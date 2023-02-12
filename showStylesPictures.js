import { getResource } from "../services/requests";

const showStylesPictures = (triger, wrapper) => {
  const btn = document.querySelector(triger);

  btn.addEventListener("click", () => {
    getResource("http://localhost:3000/styles")
      .then((res) => createCards(res))
      .catch((error) => {
        console.log(error);
        let errorMessage = document.createElement("p");
        errorMessage.style.cssText =
          "color: red; text-align: center; font-size: 24px";
        errorMessage.textContent = `Произошла ошибка ${error}`;
        document.querySelector(wrapper).appendChild(errorMessage);
      });
  });

  function createCards(respons) {
    respons.forEach(({ src, title, link }) => {
      let card = document.createElement("div");

      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
          	<div class="styles-block">
  					  <img src=${src} alt=${title}>
  					  <h4>${title}</h4>
  					  <a href=${link}>Подробнее</a>
  				</div>
        `;

      document.querySelector(wrapper).appendChild(card);
    });

    btn.remove();
  }
};

export default showStylesPictures;
