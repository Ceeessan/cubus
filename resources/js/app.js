
//Ändra texten för announcement-bar.
document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname;

    if (currentPage === '/' || currentPage === '/home') {
        document.querySelector('.announcement-bar').style.display = 'block';
    } else {
        document.querySelector('.announcement-bar').innerText = 'Alla barnkläder -25%';
        document.querySelector('.announcement-bar').style.color = 'white';
        document.querySelector('.announcement-bar').style.fontSize = '14px';
    }
});



//Skapa en kopia av produkterna så att dem kan visas längre ner på front-page.
const productContainer = document.querySelector('slider-component');


const clonedProductContainer = productContainer.cloneNode(true);


const scrollContainer = document.querySelector('.products-again');
scrollContainer.appendChild(clonedProductContainer);