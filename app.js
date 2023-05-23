

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => {
    observer.observe(el);
});

const hiddenElementsRight = document.querySelectorAll('.hidden-right');

hiddenElementsRight.forEach((el) => {
    observer.observe(el);
});

const showcaseElements = document.querySelectorAll('.showcase-item');
const links = ["https://github.com/GarrettNixSoft/CanvaCord", "https://github.com/GarrettNixSoft/JFlatGL", "https://github.com/GarrettNixSoft/AStarTest", "https://github.com/GarrettNixSoft/DDPC-Code"];

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

var isMobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;

if (isMobile) {

    const cookieKey = "has-annoyed-user-already";

    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith(cookieKey));

    console.log("Detected mobile browser");
    if (!cookieValue) {
        alert("Hi there! My site isn't optimized for a mobile experience yet. To best view my site, please try a desktop browser.");
        document.cookie = "has-annoyed-user-already=true";
    }
}
else {
    console.log("Detected desktop browser");
}