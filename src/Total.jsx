import React from "react";

function Total(props) {
  return (
    <div>
      <p>{props.exercises[0].exercises}</p>
      <p>{props.exercises[1].exercises}</p>
      <p>{props.exercises[2].exercises}</p>
    </div>
  );
}
export default Total;
