const navBarList = document.querySelector(".navBarList");
const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");

function abrirCerrarLista() {
  navBarList.classList.toggle("navList_opened");
}

openMenuBtn.addEventListener("click", abrirCerrarLista);
closeMenuBtn.addEventListener("click", abrirCerrarLista);

const menuLinks = document.querySelectorAll(".navBarLinks");

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", () => {
    navBarList.classList.remove("navList_opened")
  })
})
