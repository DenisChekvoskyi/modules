const tabs = (
  headerTabSelector,
  tabSelector,
  contentTabSelector,
  activeClass,
  display = "block"
) => {
  const headerTab = document.querySelector(headerTabSelector);
  const tab = document.querySelectorAll(tabSelector);
  const contentTab = document.querySelectorAll(contentTabSelector);
  const active = document.querySelectorAll("#active");

  function hideTabContent() {
    contentTab.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
    active.forEach((el) => el.classList.remove("active"));
  }

  function showTabContent(i = 0) {
    contentTab[i].style.display = display;
    tab[i].classList.add(activeClass);
    active[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  headerTab.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
