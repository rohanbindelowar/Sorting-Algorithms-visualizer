import React from "react";
import "../styles/Bar.css";
import "../main.css"
export const Bar = (props) => {
  const barHeight = String((props.value / props.length) * 50) + "%";
  const barWidth = String(100 / props.length) + "%";
  const leftMarginPercentage = String(props.i * (100 / props.length)) + "%";
  return (
    <div
      className="bar"
      id={props.id}
      style={{
        height: barHeight,
        width: barWidth,
        marginLeft: leftMarginPercentage,
        backgroundColor: "black",
      }}
    ></div>
  );
};

export default Bar;
