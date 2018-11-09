import React from 'react';
/**
 * Functional components need to import React from 'react' in scope
 */

const Contact = props => {
  return (
    <div id="contact" className="container">
      <h2>
        <strong>CONTACT US</strong>
      </h2>
      <br />
      <p>Found a bug? Let us know.</p>
      <p>Do you use SmartGraphQL in your workflow? We'd love to hear what you think!</p>
      <form>
        <input type="text" placeholder="placeholder for the form" />
      </form>
    </div>
  );
};

export default Contact;
