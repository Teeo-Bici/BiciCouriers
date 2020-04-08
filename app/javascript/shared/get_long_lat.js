
const getLongLat = () => {
  const pickup = document.getElementById('course_pickups_attributes_0_address');
  pickup.addEventListener('change', (e) =>{
    console.log(pickup);
  });
}

export { getLongLat };
