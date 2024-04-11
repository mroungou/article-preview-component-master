const shareBtn = document.getElementById('share-button');
const socialsDiv = document.getElementById('overlay');
const authorDiv = document.getElementById('about-author');
const shareBtn2 = document.getElementById('share-button-2')

function display() {
    if (window.innerWidth < 1440) {
        if (authorDiv.classList.contains('visible')) {
            authorDiv.classList.remove('visible');
            authorDiv.classList.add('hidden');
    
            socialsDiv.classList.add('visible');
        } else {
            authorDiv.classList.add('visible');
            authorDiv.classList.remove('hidden');
            socialsDiv.classList.add('hidden');
    
            socialsDiv.classList.remove('visible');
        }
    } else {
        if (!socialsDiv.classList.contains('visible')) {
            socialsDiv.classList.add('visible');
        } else {
            socialsDiv.classList.remove('visible')
        }
    }

}

shareBtn.addEventListener('click', display);