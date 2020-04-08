import "bootstrap";

import  { movement } from '../shared/services.js';
import  { cardsFly } from '../shared/avantages.js';
import  { userLogo } from '../shared/navbar.js';
import  { mapInit } from '../shared/mapbox.js';

movement();
cardsFly();
userLogo();
mapInit();
