import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
<<<<<<< Updated upstream
});


// const ruleCost = {
//   costLimit: 10000,
//   onSuccess: cost => `Complete, query cost is ${cost}`,
//   onError: (cost, costLim) => `Error: Cost is ${cost} but cost limit is set to ${costLim}`,
// };

// const ruleDepth = {
//   depthLimit: 100,
//   onSuccess: depth => `Complete, query depth is ${depth}`,
//   onError: (depth, maximumDepth) => `Error: Current depth is ${depth} but max depth is ${maximumDepth}`,
// };

// app.use(
//   '/graphql',
//   graphqlHTTP(() => ({
//     schema,
//     graphiql: true,
//     validationRules: [depthComplexity(ruleDepth), costLimit(ruleCost)],
//   })),
// );
=======
});
>>>>>>> Stashed changes
