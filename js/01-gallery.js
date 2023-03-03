import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
console.log(event);
});





console.log(galleryItems);
