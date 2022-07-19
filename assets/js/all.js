const menuItem = document.querySelectorAll('.menu__item');

menuItem.forEach((item) => {
  if(item.dataset.onpage == onpage) {
    item.classList.add('onPage')
  }
});

const menu = document.querySelector('#menu__hamb');

menu.addEventListener('click', () => {
  if(!document.querySelector('#submenu').classList.contains('hideMenu'))
    document.querySelector('#submenu').classList.add('hideMenu');
  else
    document.querySelector('#submenu').classList.remove('hideMenu');
});
