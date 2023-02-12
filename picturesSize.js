const picturesSize = (selectorImg) => {
  const blocks = document.querySelectorAll(selectorImg);

  const showPicture = (block) => {
    const img = block.querySelector("img");
    img.classList.add("animated", "fadeIn");
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p").forEach((p) => (p.style.display = "none"));
    document.querySelector(".sizes-hit").style.display = "block";
  };

  const hidePicture = (block) => {
    const img = block.querySelector("img");
    img.classList.remove("animated", "fadeIn");
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p").forEach((p) => (p.style.display = "block"));
  };

  blocks.forEach((block) => {
    block.addEventListener("mouseover", () => showPicture(block));
    block.addEventListener("mouseout", () => hidePicture(block));
  });
};

export default picturesSize;
