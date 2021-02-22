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

  window.addEventListener("scroll", (e) => {
    let scroll = window.pageYOffset,
      pageWidth = window.innerWidth;

    if (pageWidth > 600 && scroll > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
};
