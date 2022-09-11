import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousStateCount) => {
      return previousStateCount + 1;
    });
  };

  const decrement = () => {
    setCount((previousStateCount) => {
      return previousStateCount - 1;
    });
  };
  const reset = () => {
    setCount((reset) => {
      return 0;
    });
  };
  return (
    <div className="container">
      <h1 className="row justify-content-center p-3 mb-2 bg-secondary text-white">
        {"COUNTER EXAMPLE"}
      </h1>
      <h1 className="row justify-content-center">{count}</h1>
      <div className="row justify-content-center mb-2">
        <input
          className="col-2 btn btn-success"
          type="button"
          value="increment +"
          onClick={increment}
        />
      </div>
      <div className="row justify-content-center mb-2">
        <input
          className="col-2 btn btn-danger"
          type="button"
          value="decrement -"
          onClick={decrement}
        />
      </div>
      <div className="row justify-content-center mb-2">
        <input
          className="col-2 btn btn-primary"
          type="button"
          value="reset"
          onClick={reset}
        />
      </div>
    </div>
  );
};

export default Counter;
