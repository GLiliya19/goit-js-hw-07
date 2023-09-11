import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

const createMarkup = galleryItems.map(({ preview, original, description }) =>
   `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
).join("");

container.insertAdjacentHTML("beforeend", createMarkup);

let lightbox = new SimpleLightbox('.gallery a', { 
   captionsData: "alt",
   captionsDelat: 250
});

console.log(galleryItems);
