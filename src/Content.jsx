import React from "react";

function Content(props) {
  return (
    <div>
      <p>{props.parts[0].name}</p>
      <p>{props.parts[1].name}</p>
      <p>{props.parts[2].name}</p>
    </div>
  );
}
export default Content;
