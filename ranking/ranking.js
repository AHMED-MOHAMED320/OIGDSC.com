
let my_button = document.querySelector(".up_to_home");
let nav = document.querySelector(".header_nav");
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // my_button.style.display = "flex";
    my_button.style.opacity = "1";
    // nav.style.background = "#1d1d1d";
    // nav.style.boxShadow = "0 1px 5px var(--color1)";
  } else {
    // my_button.style.display = "none";
    my_button.style.opacity = "0";
    // nav.style.background = "transparent";
    // nav.style.boxShadow = "0 0px 0px var(--color1) ";
  }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }