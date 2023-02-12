const checkTextInputs = (selector, language = "en") => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach((item) => {
    item.addEventListener("keypress", (e) => {
      if (
        language === "en"
          ? e.key.match(/[^a-z 0-9]/gi)
          : e.key.match(/[^а-яё 0-9]/gi)
      ) {
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;
