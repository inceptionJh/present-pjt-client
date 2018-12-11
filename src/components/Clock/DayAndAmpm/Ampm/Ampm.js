import React from "react";

export default function Ampm(props) {
  return <div>{props.hour <= 12 ? `AM` : `PM`}</div>;
}
