

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => {
    observer.observe(el);
});

const showcaseElements = document.querySelectorAll('.showcase-item');
const links = ["https://github.com/GarrettNixSoft/JFlatGL", "https://github.com/GarrettNixSoft/AStarTest", "https://github.com/GarrettNixSoft/DDPC-Code", "https://github.com/GarrettNixSoft/CanvaCord"];

var counter = 0;
showcaseElements.forEach((el) => {
    const link = links[counter];
    console.log('apply onclick, counter=' + counter);
    el.onclick = function() {
        console.log('redirect to ' + link + '?');
        if (link !== '#') window.open(link);
    }
    counter++;
});