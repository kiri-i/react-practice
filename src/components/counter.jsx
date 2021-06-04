import React, { useState, useEffect } from "react";

const counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default counter;
