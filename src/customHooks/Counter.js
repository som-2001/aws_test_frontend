import { useState } from "react";

export const Counter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const resetValue = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, resetValue };
};
