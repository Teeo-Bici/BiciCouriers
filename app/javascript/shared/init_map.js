import  { counter } from '../shared/counter.js';

let distanceTickets = 0
const initMap =() => {

  const pickupInput = document.getElementById('course_pickups_attributes_0_address');
  const dropInput = document.getElementById('course_drops_attributes_0_address');


  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  const nantes = {lat: 47.2173, lng: -1.5534};

  const myOptions = {
    zoom:13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: nantes
  }

  const map = new google.maps.Map(document.getElementById("map-container"), myOptions);
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
       }
    });
  });
}

export { initMap, distanceTickets };










   // // The location of Uluru
   // const nantes = {lat: 47.2173, lng: -1.5534};
   // // The map, centered at Uluru
   // const map = new google.maps.Map(
   //     document.getElementById('map-container'), {zoom: 13, center: nantes});
   // // The marker, positioned at Uluru
   // const marker = new google.maps.Marker({position: nantes, map: map});

   // const pickupInput = document.getElementById('course_pickups_attributes_0_address');

   // pickupInput.addEventListener("input", (event) => {
   //   const marker = new google.maps.Marker({position: pickup, map: map});
   // });
