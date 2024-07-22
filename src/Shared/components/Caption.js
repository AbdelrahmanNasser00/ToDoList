import React from "react";
import "../../App.css";
const Caption = () => {
  const h1Style = {
    color: "white",
    textAlign: "center",
    fontSize: "5em",
    fontWeight: "400",
    margin: "1em",
    height: "auto",
  };
  return (
    <h1 style={h1Style} id="title">
      Just do it.
      <div id="border"></div>
    </h1>
  );
};
export default Caption;
