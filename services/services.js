let sendNow4 = document.querySelector("#section-2 .book-now4");
        let submit4 = document.querySelector(".submit-popup4");

        sendNow4.addEventListener("click", function () {
            // Store the original innerHTML content
            const originalContent = sendNow4.innerHTML;

            // Change innerHTML to show loader
            sendNow4.innerHTML = "<div class='loader4'></div>";

            setTimeout(() => {
                // Revert back to the original innerHTML content after 5 seconds (5000 milliseconds)
                sendNow4.innerHTML = originalContent;

                // Show the submit-popup element
                submit4.style.display = "block";
                submit4.style.height = "100%";

                // Hide the submit-popup after 3 seconds (3000 milliseconds)
                setTimeout(() => {
                    submit4.style.display = "none";
                }, 3000);

            }, 5000);
        });