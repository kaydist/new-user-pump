import React, { HTMLInputTypeAttribute } from "react";

export const currencyFormat = (amount, currency) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency || "NGN",
  }).format(amount);



export const fullDateFormat = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12",
  });



export const removeSpecialCharacters = (e) => {
  // replacing no's other than 0-9
  e.target.value = e.target.value.replace(/[^0-9 ]/g, "");
  // to replace special characters
  e.target.value = e.target.value.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "");
};

export const checkLength = (e) => {
  const KEYS = {
    leftKey: 37,
    rightKey: 39,
    backspace: 8,
    deleteKey: 46,
    digitZero: 48,
    digitNine: 57,
  };
  if (
    e.keyCode === KEYS.backspace ||
    e.keyCode === KEYS.deleteKey ||
    e.keyCode === KEYS.rightKey ||
    e.keyCode === KEYS.leftKey
  ) {
    return true;
  }
  if (
    e.keyCode < KEYS.digitZero ||
    e.keyCode > KEYS.digitNine ||
    e.target.value.length === e.target.maxLength ||
    e.shiftKey
  ) {
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  return true;
};

export const truncateString = (str, maxLenght) => {
  if (str.length > maxLenght) {
    return str.slice(0, maxLenght) + "...";
  } else {
    return str;
  }
};
