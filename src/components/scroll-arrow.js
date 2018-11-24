
import React from 'react';

const ScrollArrow = props => {
  return (
    <div className="scroll-element">
      <div id="scroll">
        <a>
          <span />
          <span />
          <span title="getting-started" onClick={props.scroll}/>
        </a>
      </div>
    </div>
  );

};

export default ScrollArrow;
