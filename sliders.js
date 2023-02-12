const sliders = (sliders, direction, prev, next) => {
  let slideIndex = 1;
  let paused = false;
  const items = document.querySelectorAll(sliders);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((el) => {
      el.classList.add("animated");
      el.style.display = "none";
    });

    items[slideIndex - 1].style.display = "block";
  }

  showSlides(slideIndex);

  function slidePlus(n) {
    showSlides((slideIndex += n));
  }

  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener("click", () => {
      slidePlus(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      slidePlus(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}

  function activeteAnimation() {
    if (direction === "vertical") {
      paused = setInterval(() => {
        slidePlus(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 6000);
    } else {
      paused = setInterval(() => {
        slidePlus(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 6000);
    }
  }

  activeteAnimation();

  items[0].parentNode.addEventListener("mouseenter", () =>
    clearInterval(paused)
  );
  items[0].parentNode.addEventListener("mouseleave", () => activeteAnimation());
};

export default sliders;
