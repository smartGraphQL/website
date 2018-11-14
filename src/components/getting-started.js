import React, { Component } from 'react';
import code from '../assets/code_snippet.png';

/**
 * Component must be class because of ref attribute when being rendered by App.js
 */
class GettingStarted extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="getting-started" className="container">
        <h2>
          <strong>GETTING STARTED</strong>
        </h2>
        <br />
        
        <div id="content">
          <div id="steps">
            <div className="step">
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" />&nbsp;&nbsp;Add SmartGraphQL dependency to
              your project
            </p>
            <figure className="code">
              <pre>
                <code className="language-html" data-lang="html">
                  <span className="nt">
                $ npm install smartgraphql
                  </span>
                </code>
              </pre>
            </figure>
            </div>

             <div className="step">
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" />&nbsp;&nbsp;Set limit for cost complexity and add custom error message
            </p>
            <figure className="code">
              <pre>
                <code className="language-html" data-lang="html">
                  <span className="nt">
                const costRule = &#123; <br></br>
                &nbsp;&nbsp; costLimit: 10000,<br></br>
                &nbsp;&nbsp; onSuccess: actualCost => `Complete, query cost is $&#123;actualCost&#125;`,<br></br>
                &nbsp;&nbsp; onError: (actualCost, costLimit) => `Error: Cost is $&#123;actualCost&#125; but cost limit is set to $&#123;costLimit&#125;`<br></br>
    &#125;;
                  </span>
                </code>
              </pre>
            </figure>
            </div>

            <div className="step">
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" />&nbsp;&nbsp;Set limit for depth complexity and add custom error message
            </p>
            <figure className="code">
              <pre>
                <code className="language-html" data-lang="html">
                  <span className="nt">
                const depthRule = &#123; <br></br>
                &nbsp;&nbsp; depthLimit: 100,<br></br>
                &nbsp;&nbsp; onSuccess: actualDepth => `Complete, query depth is $&#123;actualDepth&#125;`,<br></br>
                &nbsp;&nbsp; onError: (actualDepth, depthLimit) => `Error: Cost is $&#123;actualDepth&#125; but cost limit is set to $&#123;depthLimit&#125;`<br></br>
    &#125;;
                  </span>
                </code>
              </pre>
            </figure>
            </div>
            <div className="step">
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" />&nbsp;&nbsp;Add the built-in GraphQL
              validation module to your endpoint, pass the objects returned by cost and depth checks into valiation rules
            </p>
            <figure className="code">
              <pre>
                <code className="language-html" data-lang="html">
                  <span className="nt">
                    app.use( <br></br>
                    &nbsp;&nbsp; '/graphql',<br></br>
                    &nbsp;&nbsp; graphqlHTTP(() => (&#123; <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; schema,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; validationRules: [depthComplexity(depthRule), costLimit(costRule)]<br></br>
                    &nbsp;&nbsp; &#125;))<br></br>
                    );
                  </span>
                </code>
              </pre>
            </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GettingStarted;
