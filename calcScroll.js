const calcScroll = (position) => {
  let div = document.createElement("div");

  div.style.cssText =
    "width: 50px; height: 50px; overflow-y: scroll; visibility: hidden";
  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  if (position === "on") {
    return (document.body.style.marginRight = `${scrollWidth}px`);
  } else if (position === "off") {
    return (document.body.style.marginRight = `0px`);
  }
};

export default calcScroll;
