import React from "react";
import inputOn from "./InputOn";
import Sleep from "./Sleep";
import GreenLayer from "./GreenLayer";

const BubbleSort = async (data, setData, speed, jump) => {
  const arr = [...data];
  const n = arr.length;
  let i, j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(j,j+1);
        const x = document.getElementById(j);
        const y = document.getElementById(j+1);

        x.style.backgroundColor = "red";
        y.style.backgroundColor = "red";

        let tempHeight = x.style.height;
        x.style.height = y.style.height;
        y.style.height = tempHeight;

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        await Sleep(2);

        x.style.backgroundColor = "black";
        y.style.backgroundColor = "black";

        setData(arr);
      }
    }
  }
  GreenLayer(data, speed, jump);
  inputOn();
};
export default BubbleSort;
