import React from 'react'
import Sleep from './Sleep';

export const GreenLayer = async(data) => {
  let i,j;
  let counter = 0;
  const n = data.length;

  for(i=0;i<n;i++){
    document.getElementById(i).style.backgroundColor="green";
  }
  await Sleep(250);
  for(i=0;i<n;i++){
    document.getElementById(i).style.backgroundColor="black";
  }
}
export default GreenLayer;