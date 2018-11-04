import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

// const introStyle = {
//   position: 'relative',
//   margin: '20%',
//   textAlign: 'center'
// }


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
    //this.refs.parallaxElement.style.transform = `translate(0, ${newTop}px, 0)`;

  }
  
  //handleClick runs about billion times per minute, so throttling function is needed to reduce the number of handleClick calls to one call per 200-400 milliseconds
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
      <div>
          <Introduction 
            ref = "parallaxElement"
            speed = {0.5}
            zindex = "0"
            top = "0%"
            style = {{...this.state}}
          />
          <NavBar />
          <GettingStarted 
            ref = "parallaxElement"
            speed = {2.5}
            zindex = "1"
            top = "40%"
            style = {{...this.state}}
          />
      </div>
    );
  }
}

class Introduction extends Component {

  render() {
    return (
      <div 
        id="intro"
        className="container"
      >
      <img src={logo} className="app-logo" alt="logo" />
        <div className="info">
        <h2><strong>SmartGraphQL</strong></h2><br></br>
        <p>
          Secure your GraphQL endpoint <br></br>
          by limiting cost and depth of incoming queries
        </p>
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
        <h2>Getting Started</h2>
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
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#getting-started">Getting started</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default App;
