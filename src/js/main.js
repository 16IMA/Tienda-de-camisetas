'use strict';

/*querySelectors del HTML*/

const btnPickUp1 = document.querySelector(".js_btnPickUp1"); 
const btnPickUp2 = document.querySelector(".js_btnPickUp2"); 
const btnPickUp3 = document.querySelector(".js_btnPickUp3"); 
const productAmount1 = document.querySelector(".js_productAmount1"); 
const productAmount2 = document.querySelector(".js_productAmount2"); 
const productAmount3 = document.querySelector(".js_productAmount3"); 
const btnLess1 = document.querySelector(".js_btnLess1"); 
const btnLess2 = document.querySelector(".js_btnLess2"); 
const btnLess3 = document.querySelector(".js_btnLess3"); 
const btnMore1 = document.querySelector(".js_btnMore1"); 
const btnMore2 = document.querySelector(".js_btnMore2"); 
const btnMore3 = document.querySelector(".js_btnMore3"); 

/*Contadores*/

let countProduct1 = 0;
let countProduct2 = 0;
let countProduct3 = 0;


/*Funciones*/

function countMore1() {
  countProduct1 += 1;
  productAmount1.innerHTML= countProduct1;
  
}

function countMore2(ev) {
    countProduct2 += 1;
    productAmount2.innerHTML= countProduct2;
    
  }
  function countMore3(ev) {
    countProduct3 += 1;
    productAmount3.innerHTML= countProduct3;
  }

/*Eventos*/
      
btnPickUp1.addEventListener("click", (countMore1))
btnPickUp2.addEventListener("click", (countMore2))
btnPickUp3.addEventListener("click", (countMore3))

