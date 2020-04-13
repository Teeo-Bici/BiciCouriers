import  { initMap, distanceTickets } from '../shared/init_map.js';
import  { urgenceToggle, urgenceTickets } from '../shared/urgence.js';
import  { bikeToggle, volumeTickets } from '../shared/volume.js';

const counter = () => {
  console.log(volumeTickets);
  const sum = volumeTickets + urgenceTickets + distanceTickets
  const totalDiv = document.getElementById('total-t');
  totalDiv.innerHTML = sum
  const ticketsFormInput = document.querySelector('.tickets-input');
  ticketsFormInput.value = sum;
}

export { counter }
