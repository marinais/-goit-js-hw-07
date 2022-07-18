import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")
console.log(galleryItems);

function createGallary (galleryItems){
    return galleryItems.reduce((acc, item) => acc + 
    `<a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  `, ""
    )
}

const resultOfCreateGallery = createGallary (galleryItems)
galleryEl.insertAdjacentHTML("beforeend", resultOfCreateGallery)

let gallery = new SimpleLightbox('.gallery a', 
{captionsData: "alt", 
captionDelay: 250,
captionPosition: "bottom"});
// gallery.on('show.simplelightbox', function () {
//     // Do something…
// })