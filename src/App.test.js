import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// app.use(
//   '/graphql',
//   graphqlHTTP(() => ({
//     schema,
//     graphiql: true,
//     validationRules: [depthComplexity(ruleDepth), costLimit(ruleCost)],
//   })),
// );