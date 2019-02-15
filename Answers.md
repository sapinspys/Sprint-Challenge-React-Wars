# Answers

1.  What is React JS and what problems does it try and solve?

- React.JS is a JavaScript library used to build user interfaces. Web applications built using React use an engine called the Virtual DOM to updates changes efficiently and on-demand without expensive DOM operations. Instead of refreshing the entire application, React's engine selectively updates only the components that have been changed. This makes complex and overlapping user interactions much easier handle and results in smoother user experiences.

1.  What does it mean to _think_ in react?

- Thinking in React during development means thinking about applications in terms of composability. A highly composable application in React is made up of smaller pieces of UI, termed components, that are reusable and may be re-rendered dynamically on demand to the user.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Functional components are easier to read and test since they are just plain JS functions. A class component is more complex but it gives us access to useful methods from React's Component Lifecycle. Most importantly, it allows us to set up a data object, or state, on the component constructor.

1.  Describe state.

- State is a data object that is set up in a React component. This data may be passed down to child components as props.

1.  Describe props.

- Props is short for properties. These props are immutable and are recieved by children components from the parent state. They can be used to display data to the user or reference a function that lives in another component.

