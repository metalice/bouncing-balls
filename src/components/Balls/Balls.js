import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import uuid from "uuid";
import _ from "lodash";

import Ball from "./Ball/Ball";

const Balls = () => {
  const [ballsArray, setBallsArray] = useState([]);
  const ballsQuantity = useSelector(({ input: { inputValue } }) => inputValue);

  const diff = ballsQuantity - ballsArray.length;

  useEffect(() => {
    diff > 0 &&
      setBallsArray(ballsArray => [...ballsArray, ..._.times(diff, () => <Ball key={uuid()} />)]);

    diff < 0 &&
      setBallsArray(ballsArray => {
        _.times(-diff, () => ballsArray.pop());
        return [...ballsArray];
      });
  }, [ballsQuantity, diff]);

  return <>{ballsArray}</>;
};

export default Balls;
