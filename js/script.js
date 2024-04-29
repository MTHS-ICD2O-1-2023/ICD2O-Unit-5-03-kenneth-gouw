// Copyright (c) 2024 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findAgeClicked() {
  const ageInput = parseInt(document.getElementById("age-entered").value)

  if (ageInput >= 17) {
    document.getElementById("answer").innerHTML = "You can watch R rated movies alone."
  } else if (ageInput >= 13) {
    document.getElementById("answer").innerHTML = "You can watch PG-13 rated movies alone."
  } else if (ageInput >= 5) {
    document.getElementById("answer").innerHTML = "You can watch G or PG rated movies alone."
  } else {
    document.getElementById("answer").innerHTML = "You are too young to watch movies alone."
  }
}