// scroll-behavior: smooth;

const scrolling = (upSelector) => {
  const up = document.querySelector(upSelector);
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 4000) {
      up.classList.add("animated", "fadeIn");
      up.classList.remove("fadeOut");
    } else {
      up.classList.add("fadeOut");
      up.classList.remove("fadeIn");
    }
  });

  let links = document.querySelectorAll("[href^='#']");
  let speed = 0.1;

  links.forEach((link) => {
    if (link.getAttribute("href") !== "#") {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        let heightTop = document.documentElement.scrollTop;
        let hash = this.hash;
        let toBlock = document.querySelector(hash).getBoundingClientRect().top;
        let start = null;

        requestAnimationFrame(step);

        function step(time) {
          if (start === null) {
            start = time;
          }

          let progress = time - start;
          let r =
            toBlock < 0
              ? Math.max(heightTop - progress / speed, heightTop + toBlock)
              : Math.min(heightTop + progress / speed, heightTop + toBlock);

          document.documentElement.scrollTo(0, r);

          if (r !== heightTop + toBlock) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash;
          }
        }
      });
    }
  });
};

export default scrolling;
