// DOM Selector
let frontEnd = document.getElementById("front-end");
let backEnd = document.getElementById("back-end");
let dataScience = document.getElementById("data-science");
let hackathon = document.getElementById("hackathon");


// Grid Selectors
let body = document.querySelector('body');
let boxB = document.querySelector(".box.b");
// changes only the image in the class. Box C surrounds this class
let boxC = document.querySelector(".prestochango");
let boxD = document.querySelector(".box.d");
let boxE = document.querySelector(".box.e");
let boxF = document.querySelector(".box.f");

// Change to Front-End Section
frontEnd.addEventListener('click', function() {
    boxB.innerHTML = "Some of the front end work that I've done so far.<br>" + 
    "<a href=\"#\" id=\"wesellshoes\">We Sell Shoes</a>"
    boxC.innerHTML = "<img src=\"images/wesellshoes_screenshot.png\"></img>"
    boxD.innerHTML = "We Sell Shoes!"

});

backEnd.addEventListener('click', function() {
    boxB.innerHTML = "This page left intentionally blank. Potatoes be too rotten."
    boxC.innerHTML = ""
    boxD.innerHTML = "Me intentionally hiding Rotten Potatoes and Charity Tracker."
});

dataScience.addEventListener('click', function() {
    boxB.innerHTML = "This project started off as a way for me to practice Tensorflow. I had done various tutorials from Andrew Ng on Coursera and Sentdex on YouTube but those were lessons with predictable results. This was my first foray using knowledge that I've gained. The idea was to train Tensorflow to recognize empty parking spaces in a parking lot or structure using security cameras that the lots already had installed. These are typically at a high angle above the parking lot. That's when lightbulbs started coming on. There was bound to be plenty of footage online of people shooting footage over parking lots now that consumer drones are available and affordable."
    boxC.innerHTML = "<img src=\"images/Capture.png\"></img>"
    boxD.innerHTML = "An object detection model I made used to detect empty parking spaces in parking lots"
});

hackathon.addEventListener('click', function() {
    boxB.innerHTML = "Trained image segmentation model to detect breast cancer transition cells."
    boxC.innerHTML = "<img src=\"images/unet1.png\"></img><img src=\"images/unet2.png\"></img><img src=\"images/unet3.jpg\"></img>"
    boxD.innerHTML = "Image segmentation model I attempted to make. More training needed!"
});

// console.log('Hello World') DEBUGGING


