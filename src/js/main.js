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
  {name:"React JS", price: 16, count:0}
]

/*Contadores*/

let total = 0;

/*Funciones*/

function countMore(productIndex, productAmountElement) {
  productsShoppingCart[productIndex].count += 1;
  productAmountElement.innerHTML = productsShoppingCart[productIndex].count;
}
function countLess(productIndex, productAmountElement) {
  if(productsShoppingCart[productIndex].count > 0){
  productsShoppingCart[productIndex].count = productsShoppingCart[productIndex].count - 1;
  productAmountElement.innerHTML = productsShoppingCart[productIndex].count;
}}

function mult(productIndex){
  if(productsShoppingCart[productIndex].count >= 0){
  const mult = productsShoppingCart[productIndex].count * productsShoppingCart[productIndex].price;
  return mult};
}

function sumTotal(productIndex, counter){
  const sumPrice = counter + productsShoppingCart[productIndex].price;
  return sumPrice;
}

function lessTotal(productIndex, counter){
  const lessPrice = counter - productsShoppingCart[productIndex].price;
  return lessPrice;
}

/*Eventos*/
      
btnPickUp1.addEventListener("click", (ev) => {
  countMore(0, productAmount1);
  const mult1 = mult(0);
  total1.innerHTML = mult1;
  total += mult1;
  finalTotal.innerHTML = total;
});

                           
btnPickUp2.addEventListener("click", (ev) => {
  countMore(1, productAmount2);
  const mult2 = mult(1);
  total2.innerHTML = mult2;
  total += mult2;
  finalTotal.innerHTML = total;
});

btnPickUp3.addEventListener("click", (ev) => {
  countMore(2, productAmount3);
  const mult3 = mult(2);
  total3.innerHTML = mult3;
  total += mult3;
  finalTotal.innerHTML = total;
});

btnMore1.addEventListener("click", (ev) => {
  countMore(0, productAmount1);
  const mult1 = mult(0);
  total1.innerHTML = mult1;
  total += mult1;
  finalTotal.innerHTML = total;
}); 

btnMore2.addEventListener("click", (ev) => {
  countMore(1, productAmount2);
  const mult2 = mult(1);
  total2.innerHTML = mult2;
  total += mult2;
  finalTotal.innerHTML = total;
});

btnMore3.addEventListener("click", (ev) => {
  countMore(2, productAmount3);
  const mult3 = mult(2);
  total3.innerHTML = mult3;
  total += mult3;
  finalTotal.innerHTML = total;
});

btnLess1.addEventListener("click", (ev) => {
  countLess(0, productAmount1);
  const mult1 = mult(0);
  total1.innerHTML = mult1;
  total = lessTotal(0, total);
  finalTotal.innerHTML = total;
});

btnLess2.addEventListener("click", (ev) => {
  countLess(1, productAmount2);
  const mult2 = mult(1);
  total2.innerHTML = mult2;
  total += mult2;
  finalTotal.innerHTML = total;
});

btnLess3.addEventListener("click", (ev) => {
  countLess(2, productAmount3);
  const mult3 = mult(2);
  total3.innerHTML = mult3;
  total += mult3;
  finalTotal.innerHTML = total;
  });

/*Procesos*/


/*if(total1.value > 0 || total2.value > 0 || total3.value > 0){
  let sum =  total1.value + total2.value + total3.value;
  
}

if(parseInt(productAmount1.value) > 0){
  let mult = price1.value * parseInt(productAmount1.value);
  total1.innerHTML = mult;
}*/

/*OJO: VER PORQUÉ ESTA FUNCIÓN NO PUEDE USARSE. Sólo sirve una vez. 
function countMore(countProduct, productAmount) {
  countProduct += 1;
  productAmount.innerHTML= countProduct;
  
}*/