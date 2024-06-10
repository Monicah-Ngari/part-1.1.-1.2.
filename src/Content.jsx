import React from "react";
import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part props.name={part.name} props.exercises={part.exercises}/>
    </div>
  );
}
export default Content;
