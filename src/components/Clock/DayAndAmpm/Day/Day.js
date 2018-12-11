import React from "react";
import "./Day.css";

export default function Day({ day }) {
  return (
    <div className="day">
      <div>{day}</div>
    </div>
  );
}

// import React from "react";

// export default function Day(props) {
//   return <div>{props.day}</div>;
// }
