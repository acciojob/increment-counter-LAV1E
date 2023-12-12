//your JS code here. If required.
document.getElementById('incrementBtn').addEventListener('click', function() {
    let counter = document.getElementById('counter');
    let currentValue = Number(counter.innerText);
    alert("localhost:300" + currentValue);
    counter.innerText = currentValue + 1;
});