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
          {/* <p>
            Secure your GraphQL endpoint <br />
            by limiting cost and depth of incoming queries
          </p> */}
          <div id="introduction">
          <p>
            GraphQL is rising in popularity in web services because of declarative data fetching.
            However, one major drawback is the ability of users and hackers to create complex queries
            that could potentially slow down or crash the server. <br></br>
            To address this concern, we built SmartGraphQL to give GraphQL admins the
            ability to configure rules that analyze queries in the validation phase and execute only
            safe ones.
          </p>
        </div>
          <ScrollArrow handleShow={this.props.handleShow} />
        </div>
      </div>
    );
  }
}

export default Introduction;
