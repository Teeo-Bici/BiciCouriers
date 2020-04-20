import  { counter } from '../shared/counter.js';

let urgenceTickets = 0
let urgenceRange = 11
const urgenceToggle = () => {

  const urgence1 = document.querySelector('.urgence-1');
  const urgence2 = document.querySelector('.urgence-2');
  const urgence3 = document.querySelector('.urgence-3');
  const urgence4 = document.querySelector('.urgence-4');
  const basePrice = 7
  if (urgence4 === null) {
    return
  }

  const resetUrgence = () => {
  const urgences = document.querySelectorAll('.urgence');
    urgences.forEach((urg) => {
      urg.classList.remove('active');
    });
  }

  urgence1.addEventListener('click', (event) => {
    resetUrgence();
    urgence1.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    const urgenceDivPrice = document.getElementById('urgence-e');
    urgenceDiv.innerHTML = 0
    urgenceDivPrice.innerHTML = 'inclu'
    urgenceTickets = 0
    urgenceRange = 11
    counter();
  });

  urgence2.addEventListener('click', (event) => {
    resetUrgence();
    urgence2.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    const urgenceDivPrice = document.getElementById('urgence-e');
    urgenceDiv.innerHTML = 1
    urgenceDivPrice.innerHTML = `${basePrice * 1}.00 €`
    urgenceTickets = 1
    urgenceRange = 4
    counter();
  });

  urgence3.addEventListener('click', (event) => {
    resetUrgence();
    urgence3.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    const urgenceDivPrice = document.getElementById('urgence-e');
    urgenceDiv.innerHTML = 2
    urgenceDivPrice.innerHTML = `${basePrice * 2}.00 €`
    urgenceTickets = 2
    urgenceRange = 0.75
    counter();
  });

  urgence4.addEventListener('click', (event) => {
    resetUrgence();
    urgence4.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    const urgenceDivPrice = document.getElementById('urgence-e');
    urgenceDiv.innerHTML = 2
    urgenceDivPrice.innerHTML = `${basePrice * 2}.00 €`
    urgenceTickets = 2
    counter();
  });
}

export { urgenceToggle, urgenceTickets, urgenceRange };
