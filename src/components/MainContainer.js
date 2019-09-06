import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grow } from "@material-ui/core";

import { CHANGE_MAX_HEIGHT, CHANGE_MAX_WIDTH } from "../store/actions/";
import Balls from "./Balls";

import "./main-container.css";

const MainContainer = () => {
  const mainContainerRef = useRef();
  const dispatch = useDispatch();
  const [screeChanged, setScreenChanged] = useState();
  window.addEventListener("resize", setScreenChanged);

  useEffect(() => {
    const { clientHeight, clientWidth } = mainContainerRef.current;
    dispatch(CHANGE_MAX_HEIGHT(clientHeight));
    dispatch(CHANGE_MAX_WIDTH(clientWidth));
  }, [mainContainerRef, screeChanged, dispatch]);

  return (
    <Grow in={true} timeout={5000}>
      <div ref={mainContainerRef} className="MainContainer-main">
        <Balls />
      </div>
    </Grow>
  );
};

export default MainContainer;
