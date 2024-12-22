import React from "react";
import Sleep from "./Sleep";
import GreenLayer from "./GreenLayer";
import InputOn from "./InputOn";

const InsertionSort = async (data, setData) => {
  const arr = [...data];
  const n = arr.length;
  let i, j, temp;
  for (i = 1; i < n; i++) {
    temp = arr[i];
    j = i - 1;
    let keyElement = document.getElementById(i);
    const keyHeight = keyElement.style.height;

    keyElement.style.backgroundColor = "red";
    while (j >= 0 && arr[j] > temp) {
      document.getElementById(j).style.backgroundColor = "red";

      arr[j + 1] = arr[j];
      const x = document.getElementById(j);
      const y = document.getElementById(j + 1);

      x.style.backgroundColor = "red";
      y.style.backgroundColor = "red";

      let tempHeight = x.style.height;
      x.style.height = y.style.height;
      y.style.height = tempHeight;
      j--;

      await Sleep(2);
      x.style.backgroundColor = "black";
      y.style.backgroundColor = "black";
    }
    arr[j + 1] = temp;
    document.getElementById(j + 1).style.height = keyHeight;
    setData(arr);
  }
  GreenLayer(data);
  InputOn();
};

export default InsertionSort;
