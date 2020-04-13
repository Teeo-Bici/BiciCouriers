import  { counter } from '../shared/counter.js';

let volumeTickets = 0
const bikeToggle = () => {
  const bike1 = document.querySelector('.bike-1');
  const bike2 = document.querySelector('.bike-2');



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
    counter();
    const velo = document.querySelectorAll('.form-check');
    velo[0].firstChild.checked = true;
  });

  bike2.addEventListener('click', (event) => {
    resetBike();
    bike2.classList.add('active');
    const cargoDiv = document.getElementById('cargo-t');
    cargoDiv.innerHTML = 1
    volumeTickets = 1
    counter();
    const cargo = document.querySelectorAll('.form-check');
    cargo[1].firstChild.checked = true;
  });
}

export { bikeToggle, volumeTickets };
