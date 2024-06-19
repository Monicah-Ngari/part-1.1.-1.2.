import React from "react";
import Part from "./Part";

function Content(parts) {
  const { name, exercises } = props;

  return (
    <div>
      {parts.map((parts) => (
        <Part name={parts.name} exercises={parts.exercises} />
      ))}
    </div>
  );
}

export default Content;
