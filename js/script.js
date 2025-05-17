// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-Isaac-Ip/sw.js", {
    scope: "/ICD2O-Unit-6-02-Isaac-Ip/",
  })
}

let timesClicked = localStorage.timesClicked ? Number(localStorage.timesClicked) : 0

/**
 * This function adds to the click counter on the cookie.
 */
function clickCookie() {
  timesClicked++;
  localStorage.timesClicked = timesClicked
  // Display result
  document.getElementById('result').innerHTML = "You have " + timesClicked + " cookies."
}

// Update the localStorage
if (localStorage.timesClicked) {
  localStorage.timesClicked = Number(localStorage.timesClicked) + 1
} else {
  localStorage.timesClicked = 0
}

