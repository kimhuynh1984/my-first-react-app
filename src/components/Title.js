// src/components/Title.js
import React from "react";

/*function Title() {
  return <h1>Hi there!</h1>;
}*/

/*export default function Title() {
  return <h1>Hi there!</h1>;
}*/

export default function Title(props) {
  return <h1>{props.content}</h1>;
}
