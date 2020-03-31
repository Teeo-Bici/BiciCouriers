import HorizontalScroll from '@oberon-amsterdam/horizontal';


const movement = () => {
  if (document.querySelector('.long-container') === null) {
    return
  }
  const horizontal = new HorizontalScroll({ container: document.querySelector('.long-container') });
  horizontal.on('scroll', (e) => {
    console.log(e);

    const oeufDiv = document.querySelector('.oeuf-1');
    const lineDiv = document.querySelector('.plein');
    // const LgContainer = document.querySelector('.test-contain');
    // let h_pos = pageXOffset;
    // let v_pos = pageYOffset;
    // console.log(h_pos);
    // console.log(v_pos);
    // LgContainer.style.width = 2000 + (e) + 'px';
    const lineSize = lineDiv.style.width = 200 + (e * 1.6) + 'px';
    const EggLeft = oeufDiv.style.left = 600 + (e / 6) + 'px';
  });
};

export { movement };
