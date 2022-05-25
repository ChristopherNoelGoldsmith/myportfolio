//sass
import "../sass/styles.scss";
import "../sass/about_me.scss";
import "../sass/my_tech_stack.scss";
import "../sass/navbar.scss";
import "../sass/project_showcase.scss";
import "../sass/contact_me.scss";
import "../sass/module.scss";
//scripts
import runCascadingBubbles from "./bubbles";
//images
import "../img/oceanfloor.jpg";
import makeSomeFlashCards from "../img/makesomeflashcards.jpg";
import portrait from "../img/portrait.jpg";
import weatherProject from "../img/weather_project.jpg";

(() => {

  const populateImages = () => {
    const myPortrait = (document.getElementById("my-image").src = portrait);
    const project1 = (document.getElementById("project1-img").src =
      weatherProject);
    const project2 = (document.getElementById("project2-img").src =
      makeSomeFlashCards);
  };

  const toggleVis = (el) => {
    const elementToMakeVis = document.querySelector(el).classList;
    if (!elementToMakeVis.contains("vis")) return elementToMakeVis.add("vis");
    return elementToMakeVis.remove("vis");
  };

  document.querySelector(".module").addEventListener("click", () => {
    return toggleVis(".module");
  });

  document
    .getElementById("contact-me-form")
    .addEventListener("submit", (event) => {
      const module = ".module";
      document.forms["contact-me-form"].reset();
      toggleVis(module);
    });
  runCascadingBubbles();
  populateImages();
})();
