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

let timesClicked = sessionStorage.timesClicked ? Number(sessionStorage.timesClicked) : 0

/**
 * This function adds to the click counter on the cookie.
 */
function clickCookie() {
  timesClicked++;
  sessionStorage.timesClicked = timesClicked
  // Display result
  document.getElementById('result').innerHTML = "You have " + timesClicked + "cookies."
}

// Update the sessionStorage
if (sessionStorage.timesClicked) {
  sessionStorage.timesClicked = Number(sessionStorage.timesClicked) + 1
} else {
  sessionStorage.timesClicked = 0
}

