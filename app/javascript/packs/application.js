import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';

import  { movement } from '../shared/services.js';
import  { cardsFly } from '../shared/avantages.js';
import  { userLogo } from '../shared/navbar.js';
import  { initMapbox } from '../shared/init_mapbox.js';
import  { initAutocomplete } from '../shared/init_autocomplete.js';

movement();
cardsFly();
userLogo();
initMapbox();
initAutocomplete();
