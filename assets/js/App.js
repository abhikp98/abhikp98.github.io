const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("nav");
const menuItems = document.querySelectorAll("#nav li");
// const headernav = document.getElementById('headernav');
const scrollTopBtn = document.getElementById("scrollTopBtn");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  console.log("clicked");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.add("hidden");
    header.classList.add("hidden-nav");
  });
});

const words = ["{{ Developer }}", "</ Designer >", "[Tech enthusiastic!]"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j - 1,
    );
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(
      0,
      j + 1,
    );
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

// Make 2x skill list

window.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("scrollTrack");
  track.innerHTML += track.innerHTML;
});

// To Use EmailJS

(function () {
  emailjs.init({
    publicKey: "t5xM98SjhOSyxqYwU",
  });
})();

function sendmail(e) {
  e.preventDefault();
  const parentElem = document.getElementById("contact-form");
  console.log(document.getElementById("name").value);
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  if (!name || !email || !subject || !message) {
    alert("Why hurry? 😂 Please fill in all fields!");
    return; // stops here, won't send
  }
  emailjs
    .send("service_7eyyouh", "template_m3sy9t1", params)
    .then(() => {
      parentElem.innerHTML = `
        <div class="flex flex-col items-center justify-center py-10 text-center">
          <div class="text-5xl mb-4">🎉</div>
          <h2 class="text-2xl font-bold text-white">Thank You!</h2>
          <p class="text-indigo-200 mt-2">Your message has been sent successfully.<br/>I'll get back to you soon.</p>
        </div>
      `;
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      parentElem.innerHTML = `
      <div class="flex flex-col items-center justify-center py-10 text-center">
        <div class="text-5xl mb-4">❌</div>
        <h2 class="text-2xl font-bold text-white">Oops!</h2>
        <p class="text-indigo-200 mt-2">
          Something went wrong. Please try again.
        </p>
      </div>`;
    });
}

const send = document.getElementById("submit");

send.addEventListener("click", sendmail);

// redirect to github url onclick

const innovate = document.querySelectorAll(".project-card");
innovate.forEach((card) => {
  card.addEventListener("click", () => {
    const projectName = card.querySelector("h1").textContent.trim();
    console.log(projectName);
    let url;
    switch (projectName) {
      case "Innovate (Service Based App)":
        url = "https://github.com/abhikp98/Innovate";
        break;
      case "Matri":
        url = "https://github.com/abhikp98/matrimony";
        break;
      case "TweetApp":
        url = "https://github.com/abhikp98/tweetapp";
        break;
      case "Timewheels":
        url = "https://github.com/abhikp98/Timewheels";
        break;
      case "MedApp":
        url = "https://github.com/abhikp98/MedApp-Web";
        break;
      default:
        url = "";
    }
    window.open(url, "_blank");
  });
});
