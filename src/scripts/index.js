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
  // TOggle functions

  const switchClass = (element, remove, add) => {
    element.classList.add(add);
    element.classList.remove(remove);
    return;
  };

  const toggleVis = (elements) => {
    const toggleVisClass = (el) => {
      if (!el.contains("vis")) return el.add("vis");
      return el.remove("vis");
    };

    if (elements.type === "all") {
      const elementToMakeVis = document.querySelectorAll(elements.target);
      elementToMakeVis.forEach((el) => {
        toggleVisClass(el.classList);
      });
    }
    if (elements.type === "single") {
      const elementToMakeVis = document.querySelector(
        elements.target
      ).classList;
      toggleVisClass(elementToMakeVis);
    }
  };

  const toggleTheme = (theme) => {
    const elementToMakeVis = document.querySelectorAll(theme.target);

    elementToMakeVis.forEach((el) => {
      console.log(el);
      if (theme.target === ".lite") return switchClass(el, "lite", "dark");
      return switchClass(el, "dark", "lite");
    });
  };
  //
  const hamburger = document
    .querySelector("#hamburger")
    .addEventListener("click", () => {
      return toggleVis({ type: "all", target: ".nav-btn" });
    });

  const theme = document
    .querySelector("#theme-nav")
    .addEventListener("click", () => {
      const ifLite = document.querySelector(".lite");
      if (ifLite !== null) return toggleTheme({ target: ".lite" });
      return toggleTheme({ target: ".dark" });
    });

  const moduleContactMe = document
    .getElementById("contact-me-form")
    .addEventListener("submit", (event) => {
      const module = ".module";
      document.forms["contact-me-form"].reset();
      toggleVis(module);
    });
  runCascadingBubbles();
  populateImages();
})();
