const d = document,
  $btnContact = d.getElementById("btnContact"),
  $form = d.getElementById("contact"),
  $contactsInfo = d.querySelectorAll(".contact-info"),
  $labels = d.querySelectorAll(".contact-info label"),
  $inputs = d.querySelectorAll(".contact-form [required]");

/* Text of Labels to Spans */
$labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 60}ms">${letter}</span>`
    )
    .join("");
});

/* Scroll to Contact Form */
d.addEventListener("click", (e) => {
  if (!e.target.matches(`#btnContact`)) return;
  $form.scrollIntoView();
});
