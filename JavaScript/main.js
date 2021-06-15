const d = document,
  $btnCV = d.getElementById("btn-cv"),
  $btnModalCVs = d.getElementById("btn-modal-cvs"),
  $form = d.getElementsByName("form"),
  $btnToTop = d.getElementById("btn-top");

d.addEventListener("click", (e) => {
  if (e.target == $btnCV) {
    $btnModalCVs.classList.add("active");
  } else if (e.target == $btnModalCVs) {
    $btnModalCVs.classList.remove("active");
  }

  if (e.target.classList.contains("cv-link")) {
    $btnModalCVs.classList.remove("active");
  }

  if (e.target == $btnToTop || e.target.matches("#btn-top *")) {
    d.body.scrollTop = 0;
    d.documentElement.scrollTop = 0;
  }
});

window.addEventListener("scroll", (e) => {
  let scroll = window.pageYOffset,
    pageWidth = window.innerWidth;

  /* Efectos para pantalla movil */
  if (pageWidth > 320 && scroll > 500) {
    $btnToTop.classList.add("active");
  } else {
    $btnToTop.classList.remove("active");
  }
});
