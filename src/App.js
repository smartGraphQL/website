import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import scrollIntoView from "scroll-into-view";
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: this.props.speed || 1,

      width: '100%',
      height: this.props.height || '100%',

      top: this.props.top || '0%',
      left: this.props.left,
      right: this.props.right,

      position: 'absolute',
      zindex: this.props.zindex || '0',

      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: this.props.color || null,
      backgroundImage: `url(${this.props.image})`,
    };

    this.handleScroll = this.throttle(this.handleScroll.bind(this), 10);

    this.top = this.getTop();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getTop() {
    const top = this.state.top;

    return top.indexOf('%') > -1 ?
    window.innerHeight = (top.replace('%', '') / 100) :
    parseInt(top, 10);
  }

  handleScroll() {
    const speed = this.state.speed;
    const top = this.top;

    //calculate new top
    //get current scroll level, # of pixels from the absolute top
    const pageTop = window.scrollY;
    const newTop = (top - (pageTop * speed));
    //console.log('top is', pageTop, 'new top is', newTop);
    
    //set new top position
    //ref is referencing the node that was just created
    this.refs.parallaxElement.top = `${newTop}px`;
    // this.refs.parallaxElement.style.transform = `translate(0, ${newTop}px, 0)`;

  }
  
  //handleScroll runs about billion times per minute, so throttling function is needed to reduce the number of handleScroll calls to one call per 200-400 milliseconds
  throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  
  render() {
    return (
      <div className="app">
          <Introduction 
            handleShow={this.handleShow}
            ref = "parallaxElement"
            // speed = {0.5}
            // zindex = "0"
            // top = "0%"
            // style = {{...this.state}}
          />
          <NavBar />
          <GettingStarted 
            ref = "parallaxElement"
            // speed = {2.5}
            // zindex = "1"
            // top = "40%"
            // style = {{...this.state}}
          />
          <Features />
          <Team />
          <Contact />
      </div>
    );
  }
}

class Introduction extends Component {

  render() {
    // console.log('props intro', this.props)
    return (
      <div 
        id="intro"
        className="container"
      >
      <img src={logo} className="app-logo" alt="logo" />
        <div className="info">
        <h1><strong>SmartGraphQL</strong></h1><br></br>
        <p>
          Secure your GraphQL endpoint <br></br>
          by limiting cost and depth of incoming queries
        </p>
        <ScrollArrow 
          handleShow={this.props.handleShow}
        />
        </div>
      </div>
    );
  }
}

class GettingStarted extends Component {
  render() {
    return (
      <div
        id="getting-started" 
        className="container"
      >
        <h2><strong>GETTING STARTED</strong></h2><br></br>
        <p>Steps to start will go here</p>
        <p>Steps to start will go here</p>
        <p>Steps to start will go here</p>
        <p>Steps to start will go here</p>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <div
        id="nav"
        className="container"
      >
            <a href="#intro">Home</a>
            <a href="#getting-started">Getting started</a>
            <a href="#features">Features</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
      </div>
    )
  }
}

class ScrollArrow extends Component {

   render() {
    return (
      <div className="scroll-element">
        <div id="scroll">
        <a href="#home" onClick={(e) => this.props.handleShow(e)}><span></span><span></span><span></span>Link</a>
        </div>
      </div>
    )
  }
}

class Features extends Component {
  render() {
    return (
      <div
        id="features" 
        className="container"
      >
        <h2><strong>FEATURES</strong></h2><br></br>
        <p>Features will go here</p>
        <p>Features will go here</p>
        <p>Features will go here</p>
        <p>Features will go here</p>
      </div>
    );
  }
}

class Team extends Component {
  render() {
    return (
      <div
        id="team" 
        className="container"
      >
        <h2><strong>MEET THE TEAM</strong></h2><br></br>
        <p>Team member</p>
        <p>Team member</p>
        <p>Team member</p>
        <p>Team member</p>
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div
        id="contact" 
        className="container"
      >
        <h2><strong>CONTACT US</strong></h2><br></br>
        <p>Found a bug? Let us know.</p>
        <p>Do you use SmartGraphQL in your workflow? We'd love to hear what you think!</p>
        <form>
          <input type="text" placeholder="placeholder for the form"></input>
        </form>
      </div>
    );
  }
}

export default App;
