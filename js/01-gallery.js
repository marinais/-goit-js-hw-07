import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")

console.log(galleryItems);

function createGallary (galleryItems){
    return galleryItems.reduce((acc, item) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`, ""
    )
}

const resultOfCreateGallery = createGallary (galleryItems)
galleryEl.insertAdjacentHTML("beforeend", resultOfCreateGallery)

galleryEl.addEventListener("click", galleryHandler)

function galleryHandler (event){
    event.preventDefault()
    const eventItem = event.target.dataset.source
    const modalEl = basicLightbox.create(`
        <img src="${eventItem}" width="800" height="600">`,
    
        {
    onShow: () => window.addEventListener("keydown", escape ),
    onClose: () => window.removeEventListener("keydown", escape)
    }
    )

    modalEl.show()

    function escape (event){
    if (event.code === "Escape"){
    modalEl.close()   
}
}    
}


