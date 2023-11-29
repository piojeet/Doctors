let reloadFlag = false;

// Check if the page is loaded or reloaded
window.onload = function () {
  reloadFlag = true;
  // If the page is reloaded, add classes to animate the content immediately
  if (reloadFlag) {
    document.querySelectorAll('.animated').forEach((element) => {
      element.classList.add('animate');
    });

    document.querySelectorAll('.opanimeted').forEach((element) => {
      element.classList.add('opaanimation');
    });
  }
};

// Listen for scroll events
window.addEventListener('scroll', function () {
  if (!reloadFlag) {
    // If the page is scrolled after reload, animate the content
    let elements = document.querySelectorAll('.animated');
    elements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.5) {
        element.classList.add('animate');
      }
    });

    // Additionally, handle another set of elements for different animations if needed
    let opElements = document.querySelectorAll('.opanimeted');
    opElements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8) {
        element.classList.add('opaanimation');
      }
    });

   
  }
});




let reloadFlags = false;

// Check if the page is reloaded
window.addEventListener('load', function () {
  reloadFlags = true; // Set reloadFlags to true when the page is loaded
  addTopElementClass(); // Call the function to check and add the class on page load
});

// Function to add 'topelement' class to elements with top position close to window height
function addTopElementClass() {
  if (reloadFlags) {
    let elements = document.querySelectorAll('.top-up');
    elements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop <= windowHeight * 0.90) {
        element.classList.add('topelement');
      }
    });

    let elementset = document.querySelectorAll('.left-animate');
    elementset.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop <= windowHeight * 0.90) {
        element.classList.add('elementleft');
      }
    });

    let elementsete = document.querySelectorAll('.right-animate');
    elementsete.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop <= windowHeight * 0.90) {
        element.classList.add('elementright');
      }
    });

    let elementseter = document.querySelectorAll('.opacityelement');
    elementseter.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop <= windowHeight * 0.90) {
        element.classList.add('elementopacity');
      }
    });
  }
}

// Listen for scroll events
window.addEventListener('scroll', function () {
  addTopElementClass(); // Call the function to check and add the class while scrolling
});




















let videoOne = document.querySelector(".play-video");
let videoClose = document.querySelector(".video-close-icon");
let youtubeVideo = document.querySelector(".youtube-box");
let youtubeIframe = document.querySelector(".youtube-video iframe");

// Store the video URL in a variable
let videoURL = "https://www.youtube.com/embed/GJwjwgCp-ao?si=HLQP4NRJPHaon8V1"; // Replace "YOUR_VIDEO_URL_HERE" with the actual URL of the video

videoOne.addEventListener("click", function() {
    youtubeVideo.classList.add("active");
    youtubeIframe.src = videoURL;
});

videoClose.addEventListener("click", function() {
    youtubeVideo.classList.remove("active");
    youtubeIframe.src = "";
});


















let sendNow3 = document.querySelector("#section-2 .book-now3");
        let submit3 = document.querySelector(".submit-popup3");

        sendNow3.addEventListener("click", function () {
            // Store the original innerHTML content
            const originalContent = sendNow3.innerHTML;

            // Change innerHTML to show loader
            sendNow3.innerHTML = "<div class='loader3'></div>";

            setTimeout(() => {
                // Revert back to the original innerHTML content after 5 seconds (5000 milliseconds)
                sendNow3.innerHTML = originalContent;

                // Show the submit-popup element
                submit3.style.display = "block";
                submit3.style.height = "100%";

                // Hide the submit-popup after 3 seconds (3000 milliseconds)
                setTimeout(() => {
                    submit3.style.display = "none";
                }, 3000);

            }, 5000);
        });













const clickBtns = document.querySelectorAll("#section-11 .center-container button");
const toggleWidth = document.querySelectorAll("#section-11 .toggle-btn");

clickBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        toggleWidth.forEach((element, i) => {
            if (i === index) {
                element.classList.toggle("active");
            } else {
                element.classList.remove("active");
            }
        });
    });
});





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Delay of 5 seconds (in milliseconds)
    disableOnInteraction: false, // To keep autoplay running even when user interacts with slider
  },
});