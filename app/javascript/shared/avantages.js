const cardsFly = () => {
  const cards = document.querySelectorAll(".avantages-card");
    cards.forEach((card) => {
    card.addEventListener("click", (event) => {
    let offsetLeft = 0;
    offsetLeft += 1000;

    card.style.position = "relative";
    card.style.left = (offsetLeft)+"px";
    card.style.top = (offsetLeft)+"px";

  });
  });
}

export { cardsFly };
    //prevents the page from redirecting
