import React, {useEffect, useState} from "react";
import {Counter} from "./Counter";

export function CounterDisplay() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count])

  return (
    <Counter count={count}/>
  );
}