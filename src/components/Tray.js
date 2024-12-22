import React, { useContext } from "react";
import { DataContext } from "./Form";
import Bar from "./Bar";
import BubbleSort from "../Algorithms/BubbleSort";
import SelectionSort from "../Algorithms/SelectionSort";
import InsertionSort from "../Algorithms/InsertionSort";
import '../styles/Tray.css'


export const Tray = (props) => {
  const data = useContext(DataContext);


  const sort = () => {
    if (document.getElementById("isSorted").value == "1") return;

    document.getElementById("isSorted").value = "1";
    document.getElementById("sortingButton").disabled = true;
    document.getElementById("generateButton").disabled = true;

    switch (props.algorithm) {
      case "bubbleSort": {
        console.log("Bubble sort is in progress");
        BubbleSort(props.data, props.setData);
        break;
      }
      case "selectionSort": {
        console.log("Selection sort is in progress");
       SelectionSort(props.data, props.setData);
        break;
      }

      case "insertionSort": {
        console.log("Insertion sort is in progress");
       InsertionSort(props.data, props.setData);
        break;
      }
      default: {
        console.log("select any sort!! something went wrong!!!");
        break;
      }
    }
  };
  return (
    <div className="trayContent">
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
