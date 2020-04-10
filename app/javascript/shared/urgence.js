import  { counter } from '../shared/counter.js';

let urgenceTickets = 0
const urgenceToggle = () => {

  const urgence1 = document.querySelector('.urgence-1');
  const urgence2 = document.querySelector('.urgence-2');
  const urgence3 = document.querySelector('.urgence-3');
  const urgence4 = document.querySelector('.urgence-4');


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
    urgenceDiv.innerHTML = 0
    urgenceTickets = 0
    counter();
  });

  urgence2.addEventListener('click', (event) => {
    resetUrgence();
    urgence2.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    urgenceDiv.innerHTML = 1
    urgenceTickets = 1
    counter();
  });

  urgence3.addEventListener('click', (event) => {
    resetUrgence();
    urgence3.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    urgenceDiv.innerHTML = 2
    urgenceTickets = 2
    counter();
  });

  urgence4.addEventListener('click', (event) => {
    resetUrgence();
    urgence4.classList.add('active');
    const urgenceDiv = document.getElementById('urgence-t');
    urgenceDiv.innerHTML = 3
    urgenceTickets = 3
    counter();
  });
}

export { urgenceToggle, urgenceTickets };
