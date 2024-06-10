import React from "react";

function Header(props) {
  return (
    <div>
       console.log(props.course); 
      <h1>{props.course}</h1>
    </div>
  );
}
export default Header;
