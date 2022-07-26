// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const totalPrice = price*quantity;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = totalPrice;
  return totalPrice;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');

  // ITERATION 3
  let cartPrice = 0;
  for (element of products){
    cartPrice += updateSubtotal(element)  
  };
  console.log(cartPrice);
  const totalCartPrice = document.querySelector('#total-value span');
  totalCartPrice.innerHTML = cartPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {
  function createProduct(event) {}
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});