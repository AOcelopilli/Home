const d = document,
  $btnMenu = d.getElementById("btn-menu"),
  $menu = d.getElementById("menu"),
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

      // Se envia un arreglo vacio
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
  /* Mobile Menu */
  if (e.target.matches("#btn-menu") || e.target.matches("#btn-menu *")) {
    if (!$menu.classList.contains("show")) {
      $menu.classList.add("show");
    } else {
      $menu.classList.remove("show");
    }
  }
});
