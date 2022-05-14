const toggleVis = (el) => {
    const elementToMakeVis = document.querySelector(el).classList;
    if (!elementToMakeVis.contains('vis')) return elementToMakeVis.add('vis');
    return elementToMakeVis.remove('vis');
};

document.getElementById('vis-btn').addEventListener('click', () => {
    toggleVis('#menu');
})