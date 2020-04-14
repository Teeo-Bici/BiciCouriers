import  { initMap, distanceTickets } from '../shared/init_map.js';
import  { urgenceToggle, urgenceTickets } from '../shared/urgence.js';
import  { bikeToggle, volumeTickets } from '../shared/volume.js';

const counter = () => {
  console.log(volumeTickets);
  const sum = volumeTickets + urgenceTickets + distanceTickets
  const totalDiv = document.getElementById('total-t');
  totalDiv.innerHTML = sum
  const ticketsFormInput = document.querySelector('.tickets-input');
  const ticketsUrgenceInput = document.querySelector('.tickets-urgence');
  const ticketsVolumeInput = document.querySelector('.tickets-volume');
  const ticketsDistanceInput = document.querySelector('.tickets-distance');
  ticketsFormInput.value = sum;
  ticketsUrgenceInput.value = urgenceTickets;
  ticketsVolumeInput.value = volumeTickets;
  ticketsDistanceInput.value = distanceTickets;
}

export { counter }
