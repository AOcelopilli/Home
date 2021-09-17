const d = document,
  $modal = d.getElementById("modal-cv"),
  $carousel = d.querySelectorAll(".carousel"),
  $carouselBtns = d.querySelectorAll(".carousel-btn"),
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

d.addEventListener("DOMContentLoaded", (e) => {
  /* Carousel animation */
  $carousel.forEach((car) => {
    let carouselX = 0;
    $carouselBtns[0].classList.add("active");
    $carouselBtns[3].classList.add("active");

    setInterval(() => {
      $carouselBtns.forEach((btn) => btn.classList.remove("active"));

      if (carouselX < 200) {
        carouselX += 100;
        car.style.transform = `translateX(-${carouselX}%)`;
      } else {
        carouselX = 0;
        car.style.transform = `translateX(-${carouselX}%)`;
      }

      if (carouselX == 100) {
        $carouselBtns[1].classList.add("active");
        $carouselBtns[4].classList.add("active");
      } else if (carouselX == 200) {
        $carouselBtns[2].classList.add("active");
        $carouselBtns[5].classList.add("active");
      } else {
        $carouselBtns[0].classList.add("active");
        $carouselBtns[3].classList.add("active");
      }
    }, 15000);
  });
});

d.addEventListener("click", (e) => {
  /* Modal */
  if (e.target.matches(".modal-btn")) {
    if (!$modal.classList.contains("active")) {
      $modal.classList.add("active");
      window.scrollTo(0, 0);
    } else {
      $modal.classList.remove("active");
      d.getElementById("about").scrollIntoView();
    }
  }

  /* Carousel buttons */
  if (e.target.matches(".carousel-btn")) {
    let carousel = e.target.parentNode.parentNode.childNodes[1];
    let x = e.target.dataset.x;

    e.target.parentNode.childNodes[1].classList.remove("active");
    e.target.parentNode.childNodes[3].classList.remove("active");
    e.target.parentNode.childNodes[5].classList.remove("active");

    e.target.classList.add("active");

    carousel.style.transform = `translateX(${x}%)`;

    /* console.log(
      window.getComputedStyle(carousel).getPropertyValue("transform")
    ); */
  }
});
