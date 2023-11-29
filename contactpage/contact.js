let sendNow2 = document.querySelector("#section-2 .book-now");
        let submit2 = document.querySelector(".submit-popup2");

        sendNow2.addEventListener("click", function () {
            // Store the original innerHTML content
            const originalContent = sendNow2.innerHTML;

            // Change innerHTML to show loader
            sendNow2.innerHTML = "<div class='loader2'></div>";

            setTimeout(() => {
                // Revert back to the original innerHTML content after 5 seconds (5000 milliseconds)
                sendNow2.innerHTML = originalContent;

                // Show the submit-popup element
                submit2.style.display = "block";
                submit2.style.height = "100%";

                // Hide the submit-popup after 3 seconds (3000 milliseconds)
                setTimeout(() => {
                    submit2.style.display = "none";
                }, 3000);

            }, 5000);
        });