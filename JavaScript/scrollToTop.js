export const scrollToTop = (btnToTop) => {
  let scrollY = window.pageYOffset;

  if (scrollY > 480) {
    btnToTop.classList.remove("none");
  } else {
    btnToTop.classList.add("none");
  }

  btnToTop.addEventListener("click", (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};
