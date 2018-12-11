import React from "react";
import "./Minute.css";

export default function Minute({ minute }) {
  return <div className="minute">{minute}</div>;
}

// import React from "react";

// export default function Minute(props) {
//   return (
//     <div>{props.minute < 10 ? `0${props.minute}` : `${props.minute}`}</div>
//   );
// }
