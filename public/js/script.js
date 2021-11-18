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

d.addEventListener("keyup", (e) => {
  const { name, email, subject, comments } = $form;

  if (e.target === name) {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    regexName.test(name.value.trim())
      ? name.classList.remove("wrong")
      : name.classList.add("wrong");
  }

  if (e.target === email) {
    const regexEmail =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    regexEmail.test(email.value.trim())
      ? email.classList.remove("wrong")
      : email.classList.add("wrong");
  }

  if (e.target === subject) {
    subject.value.trim().length <= 1
      ? subject.classList.add("wrong")
      : subject.classList.remove("wrong");
  }

  if (e.target === comments) {
    const regexComments = /^.{1,255}$/;

    regexComments.test(comments.value.trim())
      ? comments.classList.remove("wrong")
      : comments.classList.add("wrong");
  }
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
