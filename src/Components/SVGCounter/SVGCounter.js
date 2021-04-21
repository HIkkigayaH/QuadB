import React, { useEffect, useState } from "react";
import "./SVGCounter.css";

const SVGCounter = () => {
  const [counter, setCounter] = useState(59);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStrokeDashoffset((strokeDashoffset) =>
        strokeDashoffset >= 289.027 ? 0 : strokeDashoffset + 5
      );
      setCounter((counter) => (counter === 0 ? 59 : counter - 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="counter-container">
      <svg
        className="counter"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          className="counter-path"
          d="
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth={8}
          fillOpacity={0}
        />
        <path
          className="counter-progress"
          d="  
            M 50,50
            m 0,-46
            a 46,46 0 1 1 0,92
            a 46,46 0 1 1 0,-92
          "
          strokeWidth={8}
          fillOpacity={0}
          style={{
            strokeDashoffset,
          }}
        />
        <text className="counter-text fw5" x={30} y={65}>
          {counter}
        </text>
      </svg>
    </div>
  );
};

export default SVGCounter;
