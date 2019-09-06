import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Zoom } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { CHANGE_INPUT } from "../store/actions";

import "./input.css";

const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const onChangeInput = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onClick = () => dispatch(CHANGE_INPUT(inputValue));

  return (
    <Zoom in={true} timeout={4000}>
      <div className="Input-main">
        <TextField
          autoFocus
          id="outlined-number"
          label="How many balls?"
          onChange={onChangeInput}
          type="number"
          margin="normal"
          variant="outlined"
        />
        <div className="Input-button-wrapper">
          <Button
            className="Input-button"
            size="large"
            variant="contained"
            //   color="primary"
            onClick={onClick}
          >
            <StarIcon className="Input-icon" />
            RUN
            <StarIcon className="Input-icon" />
          </Button>
        </div>
      </div>
    </Zoom>
  );
};

export default Input;
