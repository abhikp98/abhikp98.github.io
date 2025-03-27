const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav');
const menuItems = document.querySelectorAll('#nav li');
// const headernav = document.getElementById('headernav');
const scrollTopBtn = document.getElementById("scrollTopBtn");

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    console.log("clicked");
  
    
})

menuItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        navbar.classList.add('hidden');
        header.classList.add("hidden-nav");
    })
});

const words = ["{{ Developer }}", "</ Designer >", "[Tech enthusiastic!]"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();

window.addEventListener("scroll", () => {
    if (window.scrollY > 480) {
        scrollTopBtn.classList.remove("hidden"); // Show button when scrolled down
    } else {
        scrollTopBtn.classList.add("hidden"); // Hide when at top
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});


// let lastScrollY = window.scrollY;


// window.addEventListener("scroll", () => {
//     if (window.scrollY > lastScrollY) {
//         header.classList.add("hidden-nav");

//     } else {

//         header.classList.remove("hidden-nav");
//     }
//     lastScrollY = window.scrollY;
// });