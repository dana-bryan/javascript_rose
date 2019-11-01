
const image1 = document.querySelector('img');

let exterior = "images/exterior-roses.jpg";
let red = "images/red-roses.jpg";

image1.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', red);
};

image1.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', exterior);
};




// get elements from DOM, make variables
const clicker = document.querySelector('button');
const image2 = document.querySelector('#bunchOfRoses');

// hide the P
image2.style.display = 'none';

// make button work
clicker.onclick = showAndHide;

// this function runs each time button is clicked
function showAndHide() {
  if (image2.classList.contains('showing')) {
    // hide it
    image2.style.display = 'none';
    // remove class
    image2.classList.remove('showing');
  } else {
    // show it
    image2.style.display = 'block';
    // add class
    image2.classList.add('showing');
  }
}
