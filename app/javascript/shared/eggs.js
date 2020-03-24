const eggsMovement = () => {
  window.onscroll =  (e) => {
    const your_div = document.querySelector('.oeuf-1')
    let horizontal_position = pageXOffset;
    console.log( horizontal_position);
    const EggLeft = your_div.style.left = 600 + (horizontal_position / 6) + 'px';
    console.log(EggLeft);
  }
};

export { eggsMovement };
