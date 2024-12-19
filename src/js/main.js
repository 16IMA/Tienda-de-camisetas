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
const total1 = document.querySelector(".js_total1");
const total2 = document.querySelector(".js_total2");
const total3 = document.querySelector(".js_total3");
const price1 = document.querySelector(".js_price1");
const price2 = document.querySelector(".js_price2");
const price3 = document.querySelector(".js_price3");
const finalTotal = document.querySelector(".js_finalTtotal");

/*Objeto */

const productsShoppingCart = [
  {name:"Node JS", price: 16, count:0},
  {name:"JavaScript", price: 13, count:0},
  {name:"React JS", price: 15, count:0}
]

/*Contadores*/

let total = 0;

/*Funciones*/

function countMore(productIndex, productAmountElement) {
  productsShoppingCart[productIndex].count += 1;
  productAmountElement.innerHTML = productsShoppingCart[productIndex].count;
  updateTotals();
}
function countLess(productIndex, productAmountElement) {
  if(productsShoppingCart[productIndex].count > 0){
  productsShoppingCart[productIndex].count = productsShoppingCart[productIndex].count - 1;
  productAmountElement.innerHTML = productsShoppingCart[productIndex].count;
  updateTotals();
}}

function mult(productIndex){
  return productsShoppingCart[productIndex].count * productsShoppingCart[productIndex].price;
  };

function updateTotals(){

  const totalValue1 = mult(0);
  const totalValue2 = mult(1);
  const totalValue3 = mult(2);

  total1.innerHTML = totalValue1;
  total2.innerHTML = totalValue2;
  total3.innerHTML = totalValue3;

  const finalSum = totalValue1 + totalValue2 + totalValue3;
  finalTotal.innerHTML = finalSum;
}

/*Eventos*/
      
btnPickUp1.addEventListener("click", (ev) => {
  countMore(0, productAmount1);
  });

                           
btnPickUp2.addEventListener("click", (ev) => {
  countMore(1, productAmount2);  
});

btnPickUp3.addEventListener("click", (ev) => {
  countMore(2, productAmount3);  
});

btnMore1.addEventListener("click", (ev) => {
  countMore(0, productAmount1);
  }); 

btnMore2.addEventListener("click", (ev) => {
  countMore(1, productAmount2);
  });

btnMore3.addEventListener("click", (ev) => {
  countMore(2, productAmount3);
  });

btnLess1.addEventListener("click", (ev) => {
  countLess(0, productAmount1);
  });

btnLess2.addEventListener("click", (ev) => {
  countLess(1, productAmount2);  
});

btnLess3.addEventListener("click", (ev) => {
  countLess(2, productAmount3);  
  });

