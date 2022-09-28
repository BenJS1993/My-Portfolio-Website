window.onscroll = () => {
  myFunction();
};

let navbar = document.getElementsByClassName("navbar")[0];

let sticky = navbar.offsetTop;

const myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// List of sentences
var content = ["Hi, I'm Ben Stevenson.", "I'm a Graduate / Junior Developer."];

// Current sentence being processed
var part = 0;

// Character number of the current sentence being processed
var partIndex = 0;

// Holds the handle returned from setInterval
var intervalVal;

// Element that holds the text
var element = document.querySelector(".introText");

// Cursor element
var cursor = document.querySelector("#introCursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = content[part].substring(0, partIndex + 1);
  element.innerHTML = text;
  partIndex++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === content[part]) {
    // Hide the cursor
    cursor.style.display = "block";

    clearInterval(intervalVal);
    setTimeout(function() {
      intervalVal = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = content[part].substring(0, partIndex - 1);
  element.innerHTML = text;
  partIndex--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(intervalVal);

    // If current sentence was last then display the first one, else move to the next
    if (part == content.length - 1) part = 0;
    else part++;

    partIndex = 0;

    // Start to display the next sentence after some time
    setTimeout(function() {
      cursor.style.display = "inline-block";
      intervalVal = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
intervalVal = setInterval(Type, 100);
