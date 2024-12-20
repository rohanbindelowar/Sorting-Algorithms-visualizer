import React, { createContext, useEffect, useState } from 'react';
import Tray from './Tray'; // Adjust import based on your Tray component location

export const DataContext = createContext();

const Form = () => {
  const [number, setNumber] = useState(100);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [data, setData] = useState([]);

  function handleCountChange(e) {
    const value = parseInt(e.target.value, 10);
    if (value >= 5 && value <= 1000) {
      setNumber(value);
    } else {
      window.alert("Please enter a value between 5 and 1000.");
    }
  }

  function handleAlgorithmChange(e) {
    setAlgorithm(e.target.value);
  }

  function generateSample(size) {
    document.getElementById("isSorted")?.value = 0; // Ensure the element exists
    if (size < 5 || size > 1000) return;

    const newData = Array.from({ length: size }, () => Math.floor(Math.random() * size + 1));
    setData([...new Set(newData)]); // Ensure uniqueness
  }

  useEffect(() => {
    generateSample(number);
  }, [number]);

  return (
    <div>
      <div>
        <select
          name="sortingAlgorithm"
          id="sortingAlgorithm"
          className="sortingAlgorithm"
          onChange={handleAlgorithmChange}
          value={algorithm}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="cocktailShakerSort">Cocktail Shaker Sort</option>
        </select>
        <input
          className="formElement"
          id="count"
          placeholder="Array Size"
          type="number"
          min={5}
          max={1000}
          value={number}
          onChange={handleCountChange}
        />
        <button className="formElement" onClick={() => generateSample(number)}>
          Generate Sample
        </button>
        <button>Sort</button>
      </div>

      <DataContext.Provider value={data}>
        <Tray algorithm={algorithm} data={data} setData={setData} />
      </DataContext.Provider>
    </div>
  );
};

export default Form;
