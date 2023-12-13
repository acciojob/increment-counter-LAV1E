//your JS code here. If required.
        function incrementCounter() {
            // Get the current value of the counter
            var counterElement = document.getElementById("counter");
            var currentCounterValue = parseInt(counterElement.innerText);

            // Display an alert with the un-incremented value
            alert("Un-incremented value: " + currentCounterValue);

            // Increment the counter value
            var newCounterValue = currentCounterValue + 1;

            // Update the counter element with the new value
            counterElement.innerText = newCounterValue;
        }