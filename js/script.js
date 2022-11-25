// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-JS/sw.js", {
    scope: "/ICS2O-Unit5-02-JS/",
  })
}

/**
 * This function generates a random number.
 */
const randomNum = Math.floor(Math.random() * 10) + 1
const negativeRandomNum = Math.floor(Math.random() * -10) + 1
/**
 * This function displays a randomly generated positive or negative number.
 */
function myButtonClicked() {
  var buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML = randomNum
  } else {
    document.getElementById("radio-button-value").innerHTML = negativeRandomNum
  }
}
