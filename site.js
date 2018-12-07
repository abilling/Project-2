"use strict";
var html = document.querySelector('html');
var navigation = document.querySelector('#navigation');
var nav_list = document.querySelector('.nav');
var nav_heading = document.createElement('h2');
var menu_link = document.createElement('a');
html.classList.remove('no-js');
html.classList.add('js');
menu_link.textContent = 'Menu';
menu_link.setAttribute('id', 'menu-button');
menu_link.setAttribute('href', '#null');
menu_link.setAttribute('tabindex', '0');

nav_heading.append(menu_link);
navigation.insertBefore(nav_heading, nav_list);
var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function(e) {
  nav_list.classList.toggle('visible');
  e.preventDefault();
});
