
//Skapa en kopia av produkterna så att dem kan visas längre ner av front-page.
const productContainer = document.querySelector('slider-component');


const clonedProductContainer = productContainer.cloneNode(true);


const scrollContainer = document.querySelector('.products-again');
scrollContainer.appendChild(clonedProductContainer);