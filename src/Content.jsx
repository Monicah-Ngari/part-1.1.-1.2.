import React from "react";
import Part from "./Part";

function Content(props) {
  const { name, exercises } = props;

  return (
    <div>
      <Part name={name} exercises={exercises} />
    </div>
  );
}

export default Content;
