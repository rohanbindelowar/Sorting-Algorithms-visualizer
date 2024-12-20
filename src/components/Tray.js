import React, { useContext, useState } from "react";
import { DataContext } from "./Form";
import Bar from "./Bar";
import BubbleSort from "../Algorithms/BubbleSort";
import '../styles/Tray.css'


export const Tray = (props) => {
  const data = useContext(DataContext);
  const [speed, setSpeed] = useState(0);
  const [jump, setJump] = useState(0);
  const [sliderValue, setSliderValue] = useState(51);

  const sort = () => {
    if (document.getElementById("isSorted").value == "1") return;

    document.getElementById("isSorted").value = "1";
    document.getElementById("sortingButton").disabled = true;
    document.getElementById("generateButton").disabled = true;

    switch (props.algorithm) {
      case "bubbleSort": {
        console.log("Bubble sort is in progress");
        BubbleSort(props.data, props.setData, speed, jump);
        break;
      }
      case "selectionSort": {
        console.log("Selection sort is in progress");
       // SelectionSort(props.data, props.setData, speed, jump);
        break;
      }

      case "insertionSort": {
        console.log("Insertion sort is in progress");
       // insertionSort(props.data, props.setData, speed, jump);
        break;
      }
      default: {
        console.log("select any sort!! something went wrong!!!");
        break;
      }
    }
  };
  return (
    <div>
      <button onClick={sort} id="sortingButton" className="edit">
        Sort
      </button>
      <div className="tray" id="tray">
        <div className="screen" id="screen">
          {data.map((item, i) => {
            return (
              <Bar length={data.length} id={i} key={i} value={item} i={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Tray;
