import React from "react";

function CounterHeader({ heading, description }) {
  return (
    <div>
      <h1>{heading}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default CounterHeader;
