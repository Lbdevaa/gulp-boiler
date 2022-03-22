import "./import/modules"
import "./import/components"

const burger = document.querySelector(`.burger`)
const nav = document.querySelector(`.header__nav-box`)

if (burger) {
  burger.addEventListener(`click`, burgerHandler)
}

function burgerHandler() {
  burger.classList.toggle(`active`)
  nav.classList.toggle(`active`)
}

function phoneGoodLook() {
  document.querySelectorAll(`.phone-serial`).forEach((phone) => {
    phone.setAttribute(`href`, `tel:+${phone.innerHTML.match(/\d/g).join(``)}`)
  })
}

phoneGoodLook()
