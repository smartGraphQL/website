import React from 'react';

const Features = props => {
  return (
    <div id="features" className="container">
      <h2>
        <strong>FEATURES</strong>
      </h2>
      <br />
      <p>
        GraphQL query depth is calculated by how nested the query is. Every nested field adds depth
        complexity. Too nested or cyclical queries can significantly slow down or even crash your
        server by being nested to a large amount, and this is where setting a depth limit becomes
        useful.
      </p>
      <p>
        Query cost is calculated based on the number of times a resolve function makes a connection
        to the database.
      </p>
      <p>Features will go here</p>
      <p>Features will go here</p>
    </div>
  );
};

export default Features;
