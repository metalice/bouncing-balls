import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import uuid from "uuid";
import _ from "lodash";
import Ball from "./Ball";
const Balls = () => {
  const [ballsArray, setBallsArray] = useState([]);
  const ballsQuantity = useSelector(state => state.input.input);
  const diff = ballsQuantity - ballsArray.length;

  useEffect(() => {
    diff > 0
      ? setBallsArray(ballsArray => [...ballsArray, ..._.times(diff, () => <Ball key={uuid()} />)])
      : setBallsArray(ballsArray => {
          const dup = [...ballsArray];
          dup.length = ballsQuantity >= 0 ? ballsQuantity : 0;
          return dup;
        });
  }, [ballsQuantity, diff]);

  return <div>{ballsArray}</div>;
};

export default Balls;
