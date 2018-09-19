import React, { Component } from 'react';
import Buttons from './Buttons';

// const boxStyle = {
//   height: "500px",
// }

export default class QuoteBox extends Component {
  
  render() {
    return (
      <div id="quote-text">
      {/* <h1>This is text header</h1> */}
        <div id="text"><i className="fas fa-quote-left"></i><strong>{' ' + this.props.currentQuote + ' '}</strong><i className="fas fa-quote-right"></i>
        </div>
        <div id="author">- {this.props.currentAuthor}
        </div>
        <Buttons currentAuthor={this.props.currentAuthor} currentQuote={this.props.currentQuote} randomquote={this.props.randomquote}/>
      </div>
    )
  }
}