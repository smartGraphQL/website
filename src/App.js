import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import scrollIntoView from "scroll-into-view";

import Introduction from './components/introduction';
import NavBar from './components/navbar';
import GettingStarted from './components/getting-started';
import Features from './components/features';
import Team from './components/team';
import Contact from './components/contact';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { speed, height, top, left, right, zindex, color, image } = this.props;

    this.state = {
      speed: speed || 1,

      width: '100%',
      height: height || '100%',

      top: top || '0%',
      left: left,
      right: right,

      position: 'absolute',
      zindex: zindex || '0',

      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: color || null,
      backgroundImage: `url(${image})`,
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

    return top.indexOf('%') > -1
      ? (window.innerHeight = top.replace('%', '') / 100)
      : parseInt(top, 10);
  }

  handleScroll() {
    const speed = this.state.speed;
    const top = this.top;

    /**
     * calculate new top,
     * get current scroll level, # of pixels from the absolute top
     */

    const pageTop = window.scrollY;
    const newTop = top - pageTop * speed;
    //console.log('top is', pageTop, 'new top is', newTop);

    /**
     * set new top position
     * ref is referencing the node that was just created
     */
    this.refs.parallaxElement.top = `${newTop}px`;
    // this.refs.parallaxElement.style.transform = `translate(0, ${newTop}px, 0)`;
  }

  /**
   * handleScroll runs about billion times per minute, so throttling function is needed
   * to reduce the number of handleScroll calls to one call per 200-400 milliseconds
   */
  throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Introduction handleShow={this.handleShow} ref="parallaxElement" />
        <NavBar />
        <GettingStarted ref="parallaxElement" />
        <Features />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default App;
