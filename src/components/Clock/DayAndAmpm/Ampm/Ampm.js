import React from "react";
import "./Ampm.css";

export default function Ampm({ ampm }) {
  return (
    <div className="ampm">
      <span>{ampm}</span>
    </div>
  );
}

// import React from "react";

// export default function Ampm(props) {
//   return <div>{props.hour <= 12 ? `AM` : `PM`}</div>;
// }
