import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "uuid";

import { CHANGE_ADD_TO_BALLS, CHANGE_UPDATE_X, REMOVE_BALL } from "../../../store/actions";
import { nextStep, random } from "../../../utils/ballHelper";
import { SPEED } from "../../../utils/types";

import "./ball.css";

const Ball = () => {
  const { maxWidth, maxHeight } = useSelector(({ dimensions }) => dimensions);
  const { mostRight, mostLeft } = useSelector(({ balls }) => balls);
  const dispatch = useDispatch();

  const ref = useRef(null);
  const [speed] = useState(random(SPEED) + 1);
  const [x, setX] = useState(random(maxWidth));
  const [y, setY] = useState(random(maxHeight));

  useEffect(() => {
    ref.current.id = uuid();
    dispatch(CHANGE_ADD_TO_BALLS({ id: ref.current.id }));
  }, [dispatch, ref]);
  useEffect(() => {
    let isMounted = true;
    const direction = { x: 1, y: 1 };
    const idToRemove = ref.current.id;

    const intervalId = setInterval(() => {
      isMounted && setX(x => nextStep(maxWidth, x, "x", speed, direction));
      isMounted && setY(y => nextStep(maxHeight, y, "y", speed, direction));
    }, 100);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      dispatch(REMOVE_BALL({ id: idToRemove }));
    };
  }, [dispatch, maxHeight, maxWidth, speed]);

  useEffect(() => {
    dispatch(CHANGE_UPDATE_X({ id: ref.current.id, x }));
  }, [dispatch, ref, x]);

  const color = (x === mostLeft && "Ball-green") || (x === mostRight && "Ball-red") || "";
  const transform = "translate(" + x + "px, " + y + "px)";

  return <div ref={ref} className={`Ball-main ${color}`} style={{ transform }} />;
};

export default Ball;
