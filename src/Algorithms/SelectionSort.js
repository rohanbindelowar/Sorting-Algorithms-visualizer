import React from "react";
import inputOn from "./InputOn";
import Sleep from "./Sleep";
import GreenLayer from "./GreenLayer";

const SelectionSort = async (data, setData) => {
  const arr = [...data];
  const n = arr.length;
  let i, j, min;
  for (i = 0; i < n; i++) {
    min = i;
    document.getElementById(i).style.backgroundColor = "green";

    let minElement = document.getElementById(min);
    minElement.style.backgroundColor = "red";
    for (j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        minElement.style.backgroundColor = "black";
        min = j;
        minElement = document.getElementById(min);
        minElement.style.backgroundColor = "red";
      }
      document.getElementById(i).style.backgroundColor = "green";
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;

    const x = document.getElementById(min);
    const y = document.getElementById(i);

    const tempHeight = x.style.height;
    x.style.height = y.style.height;
    y.style.height = tempHeight;
    await Sleep(50)
    setData(arr);
    document.getElementById(i).style.backgroundColor = "black";

    minElement.style.backgroundColor = "black";
  }
  GreenLayer(data);
  inputOn();
};
export default SelectionSort;
