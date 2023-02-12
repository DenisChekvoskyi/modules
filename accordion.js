const accordion = (trigerSelector) => {
  const btns = document.querySelectorAll(trigerSelector);

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btns.forEach((i) => {
        if (i === this) {
          btn.classList.toggle("active-style");
        } else {
          i.classList.remove("active-style");
          i.nextElementSibling.style.display = "none";
        }

        if (btn.classList.contains("active-style")) {
          btn.nextElementSibling.classList.add("animated", "fadeInDown");
          btn.nextElementSibling.style.display = "block";
        } else {
          btn.nextElementSibling.style.display = "none";
        }
      });
    });
  });
};

export default accordion;
