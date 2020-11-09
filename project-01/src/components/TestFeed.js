import React from 'react'


const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;

const TestFeed = () => (
  <div>
    <Greetings firstName="John" lastName="Smith" />
  </div>
);

export default TestFeed
