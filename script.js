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
