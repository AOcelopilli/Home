export const showMenu = (btnMenu, header) => {
  btnMenu.addEventListener("click", (e) => {
    header.classList.toggle("none");
  });
};
