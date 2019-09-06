import { BALL_SIZE } from "./types";

export const checkNotOutOfBounds = (number, init) => {
  const max = number - BALL_SIZE;
  return init >= max ? max : init <= 0 ? 0 : init;
};

export const nextStep = (maxSize, value, axe, speed, direction) => {
  if (value >= maxSize - BALL_SIZE || value <= 0) direction[axe] = -direction[axe];
  return checkNotOutOfBounds(maxSize, value + speed * direction[axe]);
};

export const random = number => {
  const value = Math.floor(Math.random() * number);
  return value <= BALL_SIZE ? value : value - BALL_SIZE;
};
