import  { initMap, distanceTickets } from '../shared/init_map.js';
import  { urgenceToggle, urgenceTickets } from '../shared/urgence.js';
import  { bikeToggle, volumeTickets } from '../shared/volume.js';

let price = 0
const counter = () => {
  const totalContainer = document.querySelector('.total-container')
  if (totalContainer === null) {
    return
  }
  price = totalContainer.dataset.carnetPrice;

  // console.log(volumeTickets);
  const sum = volumeTickets + urgenceTickets + distanceTickets
  const totalDiv = document.getElementById('total-t');
  const totalDivPrice = document.getElementById('total-e');
  totalDiv.innerHTML = sum
  totalDivPrice.innerHTML = `${(sum * price / 100).toFixed(2)} €`;
  const ticketsFormInput = document.querySelector('.tickets-input');
  const ticketsUrgenceInput = document.querySelector('.tickets-urgence');
  const ticketsVolumeInput = document.querySelector('.tickets-volume');
  const ticketsDistanceInput = document.querySelector('.tickets-distance');
  ticketsFormInput.value = sum;
  ticketsUrgenceInput.value = urgenceTickets;
  ticketsVolumeInput.value = volumeTickets;
  ticketsDistanceInput.value = distanceTickets;
}

export { counter, price }
