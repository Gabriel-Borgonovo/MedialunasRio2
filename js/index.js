import burgerMenu from "./burgerMenu.js";
import renderProducts from "./renderProducts.js";
import scrollMenu from "./scrollMenu.js";


const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    burgerMenu();

    scrollMenu();

    renderProducts();

});


