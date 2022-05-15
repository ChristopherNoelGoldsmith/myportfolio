//sass
import '../sass/styles.scss';
import '../sass/about_me.scss';
import '../sass/my_tech_stack.scss';
import '../sass/navbar.scss';
import '../sass/project_showcase.scss';
import '../sass/contact_me.scss';
//scripts
import runCascadingBubbles from './bubbles';
//images
import '../img/oceanfloor.jpg';
import makeSomeFlashCards from '../img/makesomeflashcards.jpg';
import portrait from '../img/portrait.jpg';
import weatherProject from '../img/weather_project.png';

const toggleVis = (el) => {
    const elementToMakeVis = document.querySelector(el).classList;
    if (!elementToMakeVis.contains('vis')) return elementToMakeVis.add('vis');
    return elementToMakeVis.remove('vis');
};

document.getElementById('vis-btn').addEventListener('click', () => {
    toggleVis('#menu');
})

const populateImages = () => {
    const myPortrait = document.getElementById('my-image').src = portrait;
    const project1 = document.getElementById('project1').src = weatherProject;
    const project2 = document.getElementById('project2').src = makeSomeFlashCards;
}

runCascadingBubbles();
populateImages();