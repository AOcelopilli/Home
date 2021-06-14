const d = document,
  btnCV = d.getElementById("btn-cv"),
  btnModalCVs = d.getElementById("btn-modal-cvs");

d.addEventListener("click", (e) => {
  if (e.target == btnCV) {
    btnModalCVs.classList.add("active");
  } else if (e.target == btnModalCVs) {
    btnModalCVs.classList.remove("active");
  }

  if (e.target.classList.contains("cv-link")) {
    btnModalCVs.classList.remove("active");
  }
});
