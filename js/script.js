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
 * This function saves cookies (the cache).
 */
function checkCookies() {

  // input
  document.cookie = "numberOfCookies";


  document.getElementById('result').innerHTML = 'You have ' + numberOfCookies + 'cookies.'

  }


/**
 * This function adds a cookie.
 */
function addCookie() {

  // input
  const cookies = "numberOfCookies"

  // process
  cookies = "numberOfCookies" + 1
  }


