"use strict";

// Select all the anchor tags
let links = document.querySelectorAll("a");
// Loop through the link lists
links.forEach((link) => {
  // Add a click event on each link
  link.addEventListener("click", () => {
    // Get current active link and store in currActive variable
    let currActive = document.querySelector(".active");
    // Set next active link to the current active classname
    let nextActive = currActive.className;
    // Set the current active class to none
    currActive.className = nextActive.replace("active", "");
    // Set the clicked link item to active.
    link.className += "active";
  });
});
