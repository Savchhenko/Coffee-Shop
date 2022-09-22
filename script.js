const navbar = document.querySelector(".navbar");
const cartItem = document.querySelector(".cart-items-container");
const searchForm = document.querySelector(".search-form");

// открывает бургер-меню по клику на иконку
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
};

// открывает корзину по клику на иконку
document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
};

// открывает инпут с поиском по клику на иконку
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
};