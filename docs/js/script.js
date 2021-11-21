const d = document,
  $btnMenu = d.getElementById("btn-menu"),
  $menu = d.getElementById("menu"),
  $form = d.getElementById("form"),
  $btnSubmit = d.getElementById("btn-submit"),
  $loader = d.getElementById("loader"),
  $formMsg = d.getElementById("form-msg"),
  $photo = d.getElementById("profile-photo");

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
        $msg.innerText = "An error has occurred please try again.";

        $formMsg.appendChild($msg);

        setTimeout(() => {
          $formMsg.removeChild($msg);
        }, 3000);
      }

      if (data.success) {
        let $msg = d.createElement("h3");
        $msg.innerText = "information submitted successfully.";

        $formMsg.appendChild($msg);

        setTimeout(() => {
          $formMsg.removeChild($msg);
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    })
    .finally(() => {
      $loader.classList.remove("active");
      $form.reset();
    });
});

d.addEventListener("keyup", (e) => {
  /* form inputs */
  const { name, email, subject, comments } = $form;

  if (e.target === name) {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (regexName.test(name.value.trim())) {
      name.classList.remove("wrong");
      $btnSubmit.disabled = false;
    } else {
      name.classList.add("wrong");
      $btnSubmit.disabled = true;
    }
  }

  if (e.target === email) {
    const regexEmail =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if (regexEmail.test(email.value.trim())) {
      email.classList.remove("wrong");
      $btnSubmit.disabled = false;
    } else {
      email.classList.add("wrong");
      $btnSubmit.disabled = true;
    }
  }

  if (e.target === subject) {
    if (subject.value.trim().length <= 1) {
      subject.classList.add("wrong");
      $btnSubmit.disabled = false;
    } else {
      subject.classList.remove("wrong");
      $btnSubmit.disabled = true;
    }
  }

  if (e.target === comments) {
    const regexComments = /^.{1,255}$/;

    if (regexComments.test(comments.value.trim())) {
      comments.classList.remove("wrong");
      $btnSubmit.disabled = false;
    } else {
      comments.classList.add("wrong");
      $btnSubmit.disabled = true;
    }
  }
});

d.addEventListener("click", (e) => {
  /* Screen mobile - Menu button */
  if (e.target.matches("#btn-menu") || e.target.matches("#btn-menu *")) {
    if (!$menu.classList.contains("show")) {
      $menu.classList.add("show");
    } else {
      $menu.classList.remove("show");
    }
  }
});

d.addEventListener("mousemove", (e) => {
  /* About section - photo */
  if ($photo) {
    const moveX = (e.clientX / 90) * -1;
    const moveY = (e.clientY / 90) * -1;

    $photo.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
  }
});
