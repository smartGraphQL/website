import React, {Component} from 'react';

// const ScrollArrow = props => {

class ScrollArrow extends Component {

  render() {
    return (
      <div className="scroll-element">
        <div id="scroll">
          <a>
            <span />
            <span />
            <span title="getting-started" onClick={this.props.scroll}/>
          </a>
        </div>
      </div>
    );
  }
  
};

export default ScrollArrow;
