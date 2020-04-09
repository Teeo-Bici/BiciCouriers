// Initialize and add the map
const initMap =() => {
  // The location of Uluru
  const nantes = {lat: 47.2173, lng: -1.5534};
  // The map, centered at Uluru
  const map = new google.maps.Map(
      document.getElementById('map-container'), {zoom: 13, center: nantes});
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({position: nantes, map: map});
}


export { initMap };
