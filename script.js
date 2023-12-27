const nameInput = document.getElementById("name-input");
        const greeting = document.querySelector(".greeting");
        const clearButton = document.querySelector(".clear-button");

        function displayGreeting() {
            const storedName = localStorage.getItem("name");
            if (storedName) {
                greeting.textContent = `Hello again, ${storedName}!`;
            } else {
                greeting.textContent = "Please enter your name to start.";
            }
        }

        displayGreeting(); // Display initial greeting on page load

        nameInput.addEventListener("blur", () => {
            const enteredName = nameInput.value.trim();
            if (enteredName) {
                localStorage.setItem("name", enteredName);
                displayGreeting();
            }
        });

        clearButton.addEventListener("click", () => {
            localStorage.removeItem("name");
            displayGreeting();
        });