import { galleryItems } from './gallery-items.js';
// Change code below this line

// export const galleryItems = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

// console.log(galleryItems);

let gallery = document.querySelector("div.gallery");
const markup = galleryItems
  .map(galleryItem => `<div class="gallery__item">
  <a class="gallery__link" target="_blank" href=${galleryItem.original}>
  <img class="gallery__image" src=${galleryItem.preview} alt=${galleryItem.description} data-source=${galleryItem.original} height="200">
  </a>
  </div>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);
 
// lecimy dalej // 

gallery.addEventListener("click", selectPict);

function selectPict(event) {
  if (event.target.nodeName !== "img") {
    return;
  }

  console.log(event.target);

  galleryItems.forEach((galleryItem) => {
    document.querySelector('.gallery__image').onclick = () => {
      basicLightbox.create(`
      <img src=${galleryItem.original}>
    `).show()
    }
  });
}
// ********przyklad z basiclightbox i img - codepen*****
// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()
// }


// moje proby
// galleryItems.forEach((galleryItem) => {
//   document.querySelector('.gallery__image').onclick = () => {
//     basicLightbox.create(`
// 		<img src=${galleryItem.original}>
// 	`).show()
//   }
// }
// ********przyklad z basiclightbox i img  END *****


// potrzebujemy 1 event listener ustawiony na div.gallery, ktory ma zebrac wsztstkie te items.i wtedy event target pozwoli nam wiedziec na ktory obraz kliknelismy - patrz konspekt kolorki(targetem zawsze bedzie img bo on zawsze wybierze ten na koncu.trzeba uzyc Img.dataset.source.a reszta juz bedzie kwestia zmiany atrybutu src przed otworzeniem)
// to wszystko zrobi za nas lightbox, tylko musimy mu dac odpowiednie dane

// teraz 
// addEventListener("click", openOriginalPicture);

// funkcja
// openOriginalPicture => 

// Wykonuj to zadanie w plikach 01-gallery.html i 01-gallery.js. Rozbij je na kilka podzadań:

// Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
// Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
// Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. Użyj CDN serwisu jsdelivr i dodaj do projektu linki do minimalizowania (.min) plików biblioteki.
// Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
// Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.
// Zwróć uwagę na to, że obrazek zamieniono w link, a więc po domyślnym kliknięciu użytkownik zostanie przekierowany na inną stronę. Zablokuj to postępowanie domyślnie.

// Zamknięcie z klawiatury
// ⚠️ Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrą dodatkową praktyką.

// Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy, gdy otwarte jest okno modalne. W bibliotece basicLightbox istnieje metoda na programowe zamknięcie okna modalnego.

// ======================ul i li nie

// const markup = galleryItems
//   .map(galleryItem => `<li class="gallery__item"><a class="gallery__link" href=${galleryItem.original}> <img class="gallery__image" src=${galleryItem.preview} alt=${galleryItem.description} height="200"></a></li>`)
//   .join("");

// gallery.insertAdjacentHTML("afterbegin", `<ul> ${markup} </ul>`);
// ======================ul i li nie - end