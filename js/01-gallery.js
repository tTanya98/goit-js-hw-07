import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryIt = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryIt);

function createGalleryItemsMarkup (galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`; }).join('');
}

// galleryEl.addEventListener('click', event => {
//     if (event.target.nodeName !== 'IMG') {
//         return;
//     }
// });


console.log(galleryItems);
