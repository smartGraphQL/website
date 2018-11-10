import React, { Component } from 'react';
import ScrollArrow from './scroll-arrow.js';
import logo from '../assets/logo.png';

/**
 * Component must be class because of ref attribute when being rendered by App.js
 */
class Introduction extends Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  render() {
    return (
      <div id="intro" className="container">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="info">
          <h1>
            <strong>SmartGraphQL</strong>
          </h1>
          <br />
          <p>
            Secure your GraphQL endpoint <br />
            by limiting cost and depth of incoming queries
          </p>
          <ScrollArrow handleShow={this.props.handleShow} />
        </div>
      </div>
    );
  }
}

export default Introduction;
