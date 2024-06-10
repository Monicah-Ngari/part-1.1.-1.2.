import React from "react";
import Part from "./Part";


function Total(props) {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
}

export default Total;
