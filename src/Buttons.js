import React, {Component} from 'react';
// import axios from 'axios';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(e.target.id === "new-quote") {
      this.props.randomquote();
    } 
    // else if(e.target.id === "tweet-quote") {
    //   console.log('Twitter btn clicked!')
    //   let config = {
    //     headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //     }
    //   }
    //   axios.get(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.props.currentQuote} + ' ' + ${this.props.currentAuthor}`, { crossdomain: true }).then(res => 
    //   console.log(res.data).catch(err => console.log(err)));
    // }
  }

  render() {
    return (
      <div id="buttons">
        {/* <a href="twitter.com/intent/tweet"> */}
        <button className="button btn btn-dark" target="_blank" id="tweet-quote" onClick={this.handleClick}><i className="fab fa-twitter"></i></button>
        <button id="tumblr-quote" className="btn btn-dark"><i className="fab fa-tumblr"></i></button>
        <button id="new-quote" className="btn btn-dark" onClick={this.handleClick} randomquote={this.props.randomquote}>New quote</button>
      </div>
    )
  }
}