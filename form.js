import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const form = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Заявка принята, ожидайте!",
    error: "Что-то пошло не так",
  };

  const clearInputs = () => {
    inputs.forEach((item) => (item.value = ""));
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.error;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => statusMessage.remove(), 5000);
          setTimeout(() => {
            document.querySelectorAll("[data-modal]").forEach((item) => {
              item.style.display = "none";
              document.body.style.overflow = "";
            });
          }, 6000);
        });
    });
  });
};

export default forms;
