let countDisplay = document.querySelector("#section-4 .countDisplay");
let plusSign = document.querySelector(".top-width .plusSign");

let countDisplay2 = document.querySelector("#section-4 .countDisplay2");
let plusSign2 = document.querySelector(".bottom-width .plusSign2");
let reloadFlagscount = false;
let animationStarted = false;

// Check if the page is reloaded
window.addEventListener('load', function () {
  reloadFlagscount = true; // Set reloadFlags to true when the page is loaded
  addTopElementClass2(); // Call the function to check and add the class on page load
});

// Function to add 'topelement' class to elements with top position close to window height
function addTopElementClass2() {
  if (reloadFlagscount) {
    let elements = document.querySelectorAll('.zoom-in');
    elements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop <= windowHeight * 0.90) {
        element.classList.add('elementzoom');
        if (!animationStarted) {
          let count = 0;
          let count2 = 0;
          let interval = setInterval(function() {
            plusSign.textContent = "+";
            countDisplay.textContent = count;
            count++;

            if (count > 80) {
              clearInterval(interval);
            }
          }, 50);
          let interval2 = setInterval(function() {
            plusSign2.textContent = "+";
            countDisplay2.textContent = count2;
            count2++;

            if (count2 > 25) {
              clearInterval(interval2);
            }
          }, 100);
          animationStarted = true;
        }
      }
    });   
  }
}

// Listen for scroll events
window.addEventListener('scroll', function () {
  addTopElementClass2(); // Call the function to check and add the class while scrolling
});
