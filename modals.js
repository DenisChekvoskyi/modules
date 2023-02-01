import calcScroll from "./calcScroll";

const modals = () => {
  function bindModals(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((el) => (el.style.display = "none"));

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        calcScroll("on");
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((el) => (el.style.display = "none"));
      modal.style.display = "none";
      document.body.style.overflow = "";
      calcScroll("off");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((el) => (el.style.display = "none"));
        modal.style.display = "none";
        document.body.style.overflow = "";
        calcScroll("off");
      }
    });
  }

  function openModalByTimer(selector, timer) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = " hidden";
    }, timer);
  }

  bindModals(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModals(".phone_link", ".popup", ".popup .popup_close");
  bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModals(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModals(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  openModalByTimer(".popup", 60000);
};

export default modals;
