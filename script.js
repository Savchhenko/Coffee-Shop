const navbar = document.querySelector(".navbar");
const cartItem = document.querySelector(".cart-items-container");
const searchForm = document.querySelector(".search-form");

// открывает/закрывает бургер-меню по клику на иконку/скролу
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    cartItem.classList.remove("active");
    searchForm.classList.remove("active");
};

// открывает/закрывает корзину по клику на иконку/скролу
document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
};

// открывает/закрывает инпут с поиском по клику на иконку/скролу
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    searchForm.classList.remove("active");
}
