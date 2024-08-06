const mainLayout = document.querySelector("#main-layout");
const aboutLayout = document.querySelector("#about-layout");
const portfolioLayout = document.querySelector("#portfolio-layout");
const barHome = document.querySelector("#bar-home");
const barAbout = document.querySelector("#bar-about");
const barPortfolio = document.querySelector("#bar-portfolio");
const skills = document.querySelectorAll(".skills__skill");

skills.forEach((skill) => {
  const progress = skill.getAttribute("data-progress");
  skill.style.setProperty("--progress", `${progress}%`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "main-layout") {
          barHome.classList.add("bar__item--active");
          barAbout.classList.remove("bar__item--active");
          barPortfolio.classList.remove("bar__item--active");
        } else if (entry.target.id === "about-layout") {
          barAbout.classList.add("bar__item--active");
          barHome.classList.remove("bar__item--active");
          barPortfolio.classList.remove("bar__item--active");
        } else if (entry.target.id === "portfolio-layout") {
          barAbout.classList.remove("bar__item--active");
          barHome.classList.remove("bar__item--active");
          barPortfolio.classList.add("bar__item--active");
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(mainLayout);
observer.observe(aboutLayout);
observer.observe(portfolioLayout);
