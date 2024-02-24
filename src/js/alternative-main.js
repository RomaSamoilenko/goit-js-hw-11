// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// document.querySelector(".form-search").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const loader = document.querySelector("span.loader");
//     const gallery = document.querySelector(".gallery");
//     gallery.innerHTML = '';

//     loader.classList.add('visible');

//     const searchImg = document.querySelector(".text-input").value;
//     const apiKey = '42531560-9f80359c55485b48c70b7f04a';

//     const params = {
//         key: apiKey,
//         q: searchImg,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true
//     };

//     const searchParams = new URLSearchParams(params).toString();

//     fetch(`https://pixabay.com/api/?${searchParams}`)
//         .then(response => response.json())
//         .then(data => {
//             loader.classList.remove('visible');

//             if (data.hits.length === 0) {
//                 iziToast.error({
//                     message: 'Sorry, there are no images matching your search query. Please try again!',
//                     position: 'topRight',
//                     messageColor: '#FAFAFB',
//                     backgroundColor: '#EF4040'
//                 });
//             } else {
//                 data.hits.forEach(result => {
//                     const resultItem = document.createElement('li');
//                     const imgElement = document.createElement('img');
//                     const aElement = document.createElement('a');
//                     const infoElement = document.createElement("div");

//                     imgElement.src = result.webformatURL;
//                     imgElement.alt = result.tags;

//                     aElement.href = result.largeImageURL;
//                     aElement.appendChild(imgElement);

//                     infoElement.classList.add('image-info');
//                     infoElement.innerHTML = `
//                         <p class="likes">Likes <span>${result.likes}</span></p>
//                         <p class="views">Views <span>${result.views}</span></p>
//                         <p class="comments">Comments <span>${result.comments}</span></p>
//                         <p class="downloads">Downloads <span>${result.downloads}</span></p>
//                     `;

//                     resultItem.appendChild(aElement);
//                     resultItem.appendChild(infoElement);

//                     gallery.appendChild(resultItem);
//                 });
                
//                 const modal = new SimpleLightbox('.gallery a', {
//                     captionsData: 'alt',
//                     captionDelay: 250,
//                 });

//                 modal.refresh();
//             }
//         })
//         .catch(error => {
//             console.error("Error fetching search results:", error);
//             loader.classList.remove('visible');
//         });
// });