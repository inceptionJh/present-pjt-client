import React from "react";
import Day from "./Day/Day";
import Ampm from "./Ampm/Ampm";
import "./DayAndAmpm.css";

export default function DayAndAmpm({ day, ampm }) {
  return (
    <div className="day-and-ampm">
      <Day day={day} />
      <Ampm ampm={ampm} />
    </div>
  );
}

// import React from "react";
// import Day from "./Day/Day";
// import Ampm from "./Ampm/Ampm";

// export default function DayAndAmpm(props) {
//   return (
//     <div>
//       <Day day={props.day} />
//       <Ampm hour={props.hour} />
//     </div>
//   );
// }
