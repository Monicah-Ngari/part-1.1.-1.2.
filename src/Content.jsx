import React from "react";
import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part name={props.parts[0].name}/>
      <Part name={props.parts[1].name}/>
      <Part name={props.parts[2].name}/>
    </div>
  );
}
export default Content;
