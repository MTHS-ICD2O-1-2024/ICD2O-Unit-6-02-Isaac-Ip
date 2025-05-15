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

/**
 * This function adds a cookie.
 */
function addCookie() {

  // Retrieve cookies from sessionStorage or initialize to 0
  let cookies = parseInt(sessionStorage.getItem("cookies") || 0)
  
  // Increment cookies
  cookies++
  
  // Save updated cookies back to sessionStorage
  sessionStorage.setItem("cookies", cookies)
  
  // Display the updated cookies count
  document.getElementById('result').innerHTML = 'You have ' + cookies + ' cookies.'
}


