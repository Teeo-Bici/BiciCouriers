import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';

import  { movement } from '../shared/services.js';
import  { cardsFly } from '../shared/avantages.js';
import  { userLogo } from '../shared/navbar.js';
import  { initMap } from '../shared/init_map.js';
import  { initAutocomplete } from '../shared/init_autocomplete.js';
import  { urgenceToggle } from '../shared/urgence.js';
import  { bikeToggle } from '../shared/volume.js';



movement();
cardsFly();
userLogo();
initMap();
initAutocomplete();
urgenceToggle();
bikeToggle();

