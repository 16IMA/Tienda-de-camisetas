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

/*Objeto */
const productsShoppingCart = [
  {name:"Node JS", price: 16, count:0},
  {name:"JavaScript", price: 13, count:0},
  {name:"React JS", price: 16, count:0}
]

/*Funciones*/

function countMore(productIndex, productAmountElement) {
  productsShoppingCart[productIndex].count += 1;
  productAmountElement.innerHTML = productsShoppingCart[productIndex].count;
}


/*function countMore1() {
  countProduct1 += 1;
  productAmount1.innerHTML= countProduct1;
  
}

function countMore2() {
    countProduct2 += 1;
    productAmount2.innerHTML= countProduct2;
    
  }
  function countMore3() {
    countProduct3 += 1;
    productAmount3.innerHTML= countProduct3;
  }


function countLess1() {
  if (countProduct1 > 0){
  countProduct1 = countProduct1 - 1;
  productAmount1.innerHTML= countProduct1;
  }  
}

function countLess2() {
    if (countProduct2 > 0){
    countProduct2 = countProduct2 - 1;
    productAmount2.innerHTML= countProduct2;
    }
  }

 function countLess3() {
    if (countProduct3 > 0){
    countProduct3 = countProduct3 - 1;
    productAmount3.innerHTML= countProduct3;
    }
  }
*/
function mult(productIndex){
  if(productsShoppingCart[productIndex].count > 0){
  const mult = productsShoppingCart[productIndex].count * productsShoppingCart[productIndex].price;
  return mult};
}


/*Eventos*/
      
btnPickUp1.addEventListener("click", (ev) => {
  countMore(0, productAmount1);
  const mult1 = mult(0);
  total1.innerHTML = mult1;
});

                           
btnPickUp2.addEventListener("click", (ev) => {
  countMore(1, productAmount2);
  const price = parseInt(price2.textContent);
  const amount = parseInt(productAmount2.innerHTML);
  const mult2 = mult(price, amount);
  total2.innerHTML = mult2;
});

btnPickUp3.addEventListener("click", (ev) => {
  countMore(2, productAmount3);
  const price = parseInt(price3.textContent);
  const amount = parseInt(productAmount3.innerHTML);
  const mult3 = mult(price, amount);
  total3.innerHTML = mult3;
});

btnMore1.addEventListener("click", (ev) => {
  countMore(0, productAmount1);
  const price = parseInt(price1.textContent);
  const amount = parseInt(productAmount1.innerHTML);
  const mult1 = mult(price, amount);
  total1.innerHTML = mult1;
}); 
btnMore2.addEventListener("click", (countMore2))
btnMore3.addEventListener("click", (countMore3))

btnLess1.addEventListener("click", (countLess1))
btnLess2.addEventListener("click", (countLess2))
btnLess3.addEventListener("click", (countLess3))

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