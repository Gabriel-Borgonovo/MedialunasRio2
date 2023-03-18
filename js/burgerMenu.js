const button = document.querySelector(`.button`);
const nav = document.querySelector(`.header_nav`);

export default function burgerMenu(){
    button.addEventListener(`click`, () => {
        nav.classList.toggle(`activado`);
    });
}