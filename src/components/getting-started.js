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
        <div id="introduction">
          <p>
            GraphQL is rising in popularity in web services because of declarative data fetching,
            however one major drawback is the ability of users and hackers to create complex queries
            that could potentially slow down or crash the server. As websites gain more users and
            traffic, this becomes a greater concern - especially if server crashes can cause a loss
            in revenue. To address this concern, we built SmartGraphQL to give GraphQL admins the
            ability to configure rules that analyze queries in the validation phase and execute only
            safe ones.
          </p>
        </div>
        <div id="content">
          <div id="steps">
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" /> Add SmartGraphQL library to
              your project by running <code>npm install -s smartgraphql</code>
            </p>
            {/* <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">    
            "https://code.jquery.com/jquery-3.3.1.slim.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"</span> <span class="na">integrity=</span><span class="s">"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"</span> <span class="na">crossorigin=</span><span class="s">"anonymous"</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre></figure> */}
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" /> Set limits for cost and depth
              complexity
            </p>
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" /> Add the built-in GraphQL
              validation module to your endpoint
            </p>
            <p>
              <i className="fa fa-chevron-right" aria-hidden="true" /> Pass the objects returned by
              cost and depth checks into valiation rules
            </p>
          </div>
          <div id="code">
            <img src={code} alt="Code Snippet" />
          </div>
        </div>
      </div>
    );
  }
}

export default GettingStarted;
