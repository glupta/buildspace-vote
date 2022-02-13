import { useState, useEffect } from "react";

function getStorageValue(key) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem('accountId');
    const initial = saved;
    return initial;
  }
}

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    return getStorageValue('accountId');
  });


  useEffect(() => {
    // storing client id
    if(value){
      localStorage.setItem('accountId', value);
    }
    
  }, ['accountId', value]);

  return [value, setValue];
};