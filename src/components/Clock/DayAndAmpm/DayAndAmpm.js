import React from "react";
import Day from "./Day/Day";
import Ampm from "./Ampm/Ampm";

export default function DayAndAmpm(props) {
  return (
    <div>
      <Day day={props.day} />
      <Ampm hour={props.hour} />
    </div>
  );
}
