const d = document,
  $modal = d.getElementById("modal-cv"),
  $form = d.getElementById("form"),
  $loader = d.getElementById("loader"),
  $formMsg = d.getElementById("form-msg");

d.addEventListener("submit", (e) => {
  e.preventDefault();

  $loader.classList.add("active");

  const { name, email, subject, comments } = $form;

  fetch("https://formsubmit.co/ajax/angeljpa95@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      subject: subject.value,
      comments: comments.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success == "false") {
        let $msg = d.createElement("h3");
        $msg.innerText = "Ocurrio un error, por favor vuelve a intentar";

        $formMsg.appendChild($msg);

        setTimeout(() => {
          $formMsg.removeChild($msg);
        }, 3000);
      }

      //TODO: Se envia un arreglo vacio
      if (data.success) {
        let $msg = d.createElement("h3");
        $msg.innerText = "Los datos han sido enviados con exito.";

        $formMsg.appendChild($msg);

        setTimeout(() => {
          $formMsg.removeChild($msg);
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });

  $loader.classList.remove("active");
  $form.reset();
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".modal-btn")) {
    console.log("click");
    $modal.classList.toggle("active");
  }
});
