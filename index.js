const shareBtn = document.getElementById('share-button');
const socialsDiv = document.getElementById('overlay');
const authorDiv = document.getElementById('about-author');

function display() {
    socialsDiv.classList.add('visible');
    authorDiv.classList.add('hidden')
}

shareBtn.addEventListener('click', display);