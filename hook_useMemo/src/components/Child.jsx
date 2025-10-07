import React from "react";

const Child = React.memo(({ user }) => {
  console.log("Child rendered!");
  return <h3>{user.name}</h3>;
});

export default Child;
