import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery')

const createMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
    </a>
    </li>`
).join("");

container.insertAdjacentHTML("beforeend", createMarkup);
container.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    if (event.target.tagName !== 'IMG') {
        return
    };
    const galleryItem = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<div clas="modal">
        <img src="${galleryItem}", alt="${event.target.alt}">
        </div>`
    );
    instance.show();
}
console.log(galleryItems);
