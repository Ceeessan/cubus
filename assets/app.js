const productContainer = document.querySelector("slider-component");
const clonedProductContainer = productContainer.cloneNode(true);
const scrollContainer = document.querySelector(".products-again");
scrollContainer.appendChild(clonedProductContainer);
