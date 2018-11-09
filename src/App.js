import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import scrollIntoView from "scroll-into-view";
import logo from './assets/logo.png';
import code from './assets/code_snippet.png';
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
          />
          <NavBar />
          <GettingStarted 
            ref = "parallaxElement"
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
        <div id="introduction"> 
          <p>
            GraphQL is rising in popularity in web services because of declarative data fetching, 
            however one major drawback is the ability of users and hackers to create complex queries 
            that could potentially slow down or crash the server. As websites gain more users and traffic, 
            this becomes a greater concern - especially if server crashes can cause a loss in revenue. 
            To address this concern, we built SmartGraphQL to give GraphQL admins the ability to configure 
            rules that  analyze queries in the validation phase and execute only safe ones.  
          </p>
        </div>
        <div id="content">
          <div id="steps">
            <p><i class="fa fa-chevron-right" aria-hidden="true"></i> Add SmartGraphQL library to your project by running <code>npm install -s smartgraphql</code></p>
            {/* <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">    
            "https://code.jquery.com/jquery-3.3.1.slim.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre></figure> */}
            <p><i class="fa fa-chevron-right" aria-hidden="true"></i> Set limits for cost and depth complexity</p>
            <p><i class="fa fa-chevron-right" aria-hidden="true"></i> Add the built-in GraphQL validation module to your endpoint</p>
            <p><i class="fa fa-chevron-right" aria-hidden="true"></i> Pass the objects returned by cost and depth checks into valiation rules</p>
          </div>
          <div id="code">
            <img src={code}></img>
          </div>
        </div>
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
        <a href="#getting-started"><span></span><span></span><span></span></a>
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
        <p>
          GraphQL query depth is calculated by how nested the query is. Every nested field adds depth complexity. 
          Too nested or cyclical queries can significantly slow down or even crash your server by 
          being nested to a large amount, and this is where setting a depth limit becomes useful.
        </p>
        <p>
          Query cost is calculated based on the number of times a resolve function makes a connection to the database.
        </p>
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
