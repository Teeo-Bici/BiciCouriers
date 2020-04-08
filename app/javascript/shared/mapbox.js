var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const mapInit = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoidGFvZ3VlcnJlaXJvIiwiYSI6ImNrNm04dmJxaTBpOTgzdGxpYTIzZHQyY2MifQ.fdT8eYhgUBhmO8vJDPIkHw';
  var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/taoguerreiro/ck8r7wfxd0y7m1iml96jhe2u4'
  });
}

export { mapInit }
