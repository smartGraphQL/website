
import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import scrollIntoView from "scroll-into-view";

import Introduction from './components/introduction';
import NavBar from './components/navbar';
import GettingStarted from './components/getting-started';
import Features from './components/features';
import Team from './components/team';
import Contact from './components/contact';

import './css/App.css';

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
    // this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(e) {
    console.log('this element is clicked', e.target.title)
    const view = document.getElementById(`${e.target.title}`)
    const getS = document.getElementById('getting-started');
    console.log(view)
    view.scrollIntoView({block: 'start', behavior: 'smooth'});
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
      if (time + wait - Date.now() < 0) {
        // fn();
        time = Date.now();
      }
    }
  }
  
  render() {
    return (
      <div className="app" ref="app">
        <Introduction scroll={this.scrollTo.bind(this)}/>
        <NavBar scroll={this.scrollTo.bind(this)}/>
        <GettingStarted />
        <Features />
        <Team />
        <Contact />
      </div>
    );
  }
}
export default App;