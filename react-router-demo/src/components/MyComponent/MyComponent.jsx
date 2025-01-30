import React from "react";

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log("MyComponent render");
  return <div>My Component {value}</div>;
});

export default MyComponent;