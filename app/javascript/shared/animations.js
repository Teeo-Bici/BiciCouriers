const animations = () => {

const urgencePlus = document.querySelector('.urgence-options')
const urgenceContainer = document.querySelector('.urgences-container')
const volumePlus = document.querySelector('.bike-options')
const volumeContainer = document.querySelector('.bikes-container')


urgencePlus.addEventListener('click', () => {
  urgenceContainer.classList.toggle('dropdown-options');
});

volumePlus.addEventListener('click', () => {
  volumeContainer.classList.toggle('dropdown-options');
});


}

export { animations }
