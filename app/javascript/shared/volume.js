import  { counter } from '../shared/counter.js';

let volumeTickets = 0
const bikeToggle = () => {
  const bike1 = document.querySelector('.bike-1');
  const bike2 = document.querySelector('.bike-2');
  if (bike2 === null) {
    return
  }


  const resetBike = () => {
  const bikes = document.querySelectorAll('.bike');
    bikes.forEach((urg) => {
      urg.classList.remove('active');
    });
  }

  bike1.addEventListener('click', (event) => {
    resetBike();
    bike1.classList.add('active');
    const cargoDiv = document.getElementById('cargo-t');
    cargoDiv.innerHTML = 0
    volumeTickets = 0
    const velo = document.querySelectorAll('.form-check');
    velo[0].firstChild.checked = true;
    counter();
  });

  bike2.addEventListener('click', (event) => {
    resetBike();
    bike2.classList.add('active');
    const cargoDiv = document.getElementById('cargo-t');
    cargoDiv.innerHTML = 1
    volumeTickets = 1
    const cargo = document.querySelectorAll('.form-check');
    cargo[1].firstChild.checked = true;
    counter();
  });
}

export { bikeToggle, volumeTickets };
