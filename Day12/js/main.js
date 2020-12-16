import simpleDots from './task1.js';
import star from './task3.js'

const visitCont = document.querySelector('#last-visit');

const btnChoose = document.querySelector('.drop-btn');


btnChoose.addEventListener('click', () => {
  document.getElementById("myDropdown").classList.toggle("show");
});

// star(0);

simpleDots();