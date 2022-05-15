//styles
import '../styles/styles.css';
import '../styles/about_me.css';
import '../styles/my_tech_stack.css';
import '../styles/navbar.css';
import '../styles/project_showcase.css';
import '../styles/contact_me.css';
//scripts
import runCascadingBubbles from './bubbles';
//images
import '../img/oceanfloor.jpg';
import '../img/makesomeflashcards.jpg';
import '../img/portrait.jpg';
import '../img/weather_project.png';

console.log(StyleSheet);

const toggleVis = (el) => {
    const elementToMakeVis = document.querySelector(el).classList;
    if (!elementToMakeVis.contains('vis')) return elementToMakeVis.add('vis');
    return elementToMakeVis.remove('vis');
};

document.getElementById('vis-btn').addEventListener('click', () => {
    toggleVis('#menu');
})

runCascadingBubbles();