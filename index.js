function toggleMenu() {
    document.querySelector("#navLinks").classList.toggle("show");
}

const navItems = document.querySelectorAll(".link");
const activeLine = document.querySelectorAll(".active-line");

navItems.forEach((nav, index) => {
  nav.addEventListener("click", (e) => {
    navItems.forEach((item) => item.classList.remove("active"));
    nav.classList.add("active");

    activeLine.forEach((item) => item.classList.remove('active'));
    activeLine[index].classList.add("active");
  });
});


const images = [
    "/images/poster.jpg",
    "/images/logo.png",
    "/images/IC_logo.png",
  ];

  let index = 0;
  const imgElement = document.getElementById("changingImage");

  setInterval(() => {
    index = (index + 1) % images.length; // loop through images
    imgElement.src = images[index];
  }, 2000);