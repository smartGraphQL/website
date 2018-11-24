import React, { Component } from 'react';

const NavBar = props => {

  const links = [
    ["intro", "HOME"],
    ["getting-started", "GETTING STARTED"],
    ["features", "FEATURES"],
    ["team", "TEAM"], 
    ["contact", "CONTACT"]
  ];

  return (
    <div id="nav" className="container">
      {links.map(link => {
        return(<a title={link[0]} onClick={props.scroll}>{link[1]}</a>);
      })}
    </div>
  );
};

export default NavBar;
