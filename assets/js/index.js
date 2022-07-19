import Order from './order.js';

var order = new Order();
const productsButton = document.querySelectorAll('.product__icon');
const checkbox = document.querySelectorAll('.checkbox');
const span = document.getElementsByClassName("close")[0];
const addButton = document.querySelector('#quantity__add');
const removeButton = document.querySelector('#quantity__remove');
const photoContainer = document.querySelector('#photoProduct');
const modal = document.querySelector('#modal');
const quantity = document.querySelector('#quantity');
const buttons = document.querySelectorAll('.buttons');

addButton.addEventListener('click', () => {
  quantity.value = order.increment().toString();
});

removeButton.addEventListener('click', () => {
  quantity.value = order.decrement().toString();
});

productsButton.forEach((button) => {
  button.addEventListener('click', () => {
      document.querySelector('#wrapper'+button.dataset.product).style.visibility = "visible";
      order.new(button.dataset.product);
      photoContainer.src = order.getPhoto();
      quantity.value = order.getQuantity();
      resetModal();
      document.querySelector('body').classList.add('modal-open');
      modal.style.display = "block";
      modal.scrollTop = 0;
  });    
});

span.onclick = function() {
  closeModal();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    closeModal();
  });
});
  
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function closeModal(){
  document.querySelector('body').classList.remove('modal-open');
  modal.style.display = "none";
}

checkbox.forEach((check) => {
  check.addEventListener('click', () => {
    if(check.dataset.selected == 0){
      check.style.color = "#125c13";
      check.dataset.selected = 1;
    }
    else {
      check.style.color = "#fff";
      check.dataset.selected = 0;
    }
  });
});

function resetModal() {
  checkbox.forEach((check) => {
    check.style.color = "#fff";
    check.dataset.selected = 0;
  });

  document.querySelector('#obs__text').value = '';
}
