
// let pickup =[]
// let drop =[]
// let distance = []
// const getLongLat = () => {
//   const mapElement = document.getElementById('map-container');
//   // console.log(mapElement);
//   const apiKey = mapElement.dataset.googleApiKey

//   const showPickupResponse = (data) => {
//     pickup = data.results[0].geometry.location;
//     // console.log(pickup);
//   }
//   const showDropResponse = (data) => {
//     drop = data.results[0].geometry.location;
//     // console.log(drop);
//   }

//   const getPickupAddress = (query) => {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${query}`)
//       .then(response => response.json())
//       .then(showPickupResponse);
//   };

//   const getDropAddress = (query) => {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${query}`)
//       .then(response => response.json())
//       .then(showDropResponse);
//   };

//   let pickupAddress =[]
//   let dropAddress =[]

//   const pickupInput = document.getElementById('course_pickups_attributes_0_address');
//   pickupInput.addEventListener("input", (event) => {
//     pickupAddress = event.originalTarget.value;
//     getPickupAddress(pickupAddress);
//   });

//   const dropInput = document.getElementById('course_drops_attributes_0_address');
//   dropInput.addEventListener("input", (event) => {
//     dropAddress = event.originalTarget.value;
//     getDropAddress(dropAddress);
//   });

// }

// export { getLongLat, pickup, drop, distance };



// const list = document.querySelector('#results');

// const insertMovies = (data) => {
//   data.Search.forEach((result) => {
//     const movie = `<li>
//       <img src="${result.Poster}" alt="" />
//       <p>${result.Title}</p>
//     </li>`;
//     list.insertAdjacentHTML('beforeend', movie);
//   });
// };

// const getPickupAddress = (query) => {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then(insertMovies);
// };

// getPickupAddress('harry potter'); // on 1st page load

// const form = document.querySelector('#search-form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   list.innerHTML = '';
//   const input = document.querySelector('#search-input');
//   getPickupAddress(input.value);
// });



// const showDistance = (data) => {
//   distance = data;
//   console.log(distance);
// }

// const getDistance = (pickup, drop) => {
//   fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${pickup}&destination=${drop}&key=${apiKey}`)
//     .then(response => response.json())
//     .then(showDistance);
// };


// dropInput.addEventListener("input", (event) => {
//   getDistance(pickupAddress, dropAddress);
// });
