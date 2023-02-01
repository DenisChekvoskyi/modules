import calcScroll from "./calcScroll";

const openBigImage = () => {
  const popupImg = document.createElement("div");
  const worcSpase = document.querySelector(".works");
  const bigImg = document.createElement("img");

  popupImg.classList.add("popup");
  worcSpase.appendChild(popupImg);

  popupImg.style.cssText =
    "display: none; justify-content: center; align-items: center";

  popupImg.appendChild(bigImg);

  bigImg.style.cssText = "max-width: 80%; max-height: 90%";

  worcSpase.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;
    calcScroll("on");

    document.body.style.overflow = "hidden";

    if (target && target.classList.contains("preview")) {
      popupImg.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }

    if (target && target.matches("div.popup")) {
      popupImg.style.display = "none";
      document.body.style.overflow = "";
      calcScroll("off");
    }
  });
};

export default openBigImage;
