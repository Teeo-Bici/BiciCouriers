import  { counter } from '../shared/counter.js';

let distanceTickets = 0
const initMap = () => {

  const pickupInput = document.getElementById('course_pickups_attributes_0_address');
  const dropInput = document.getElementById('course_drops_attributes_0_address');
  if (dropInput === null) {
    return
  }


  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  const nantes = {lat: 47.2173, lng: -1.5534};

  const myOptions = {
    zoom:13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: nantes
  }

  const map = new google.maps.Map(document.getElementById("map-container"), myOptions);
  if (map === null) {
    return
  }
  directionsDisplay.setMap(map);

  dropInput.addEventListener("change", (event) => {
  let distance = 0
    const request = {
        origin: pickupInput.value,
        destination: dropInput.value,
        travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    // console.log(distance + "m")
    directionsService.route(request, function(response, status) {
       if (status == google.maps.DirectionsStatus.OK) {
          distance = response.routes[0].legs[0].distance.value;
          directionsDisplay.setDirections(response);
          distanceTickets = Math.ceil(distance / 3500)
          console.log(distanceTickets);
          const distanceDiv = document.getElementById('distance-t');
          distanceDiv.innerHTML = distanceTickets
          counter();
          const distanceFormInput = document.querySelector('.distance-input');
          distanceFormInput.value = distance;
       }
    });
  });
}


export { initMap, distanceTickets };
