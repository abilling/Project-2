/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var html = document.querySelector('html');
html.classList.remove('no-js');
html.classList.add('js');

var navigation = document.querySelector('#navigation');
var nav_list = document.querySelector('.nav');

var nav_heading = document.createElement('h2');
var menu_link = document.createElement('a');
menu_link.textContent = 'Menu';
menu_link.setAttribute('id','menu-button');
menu_link.setAttribute('href','#null');
menu_link.setAttribute('tabindex','0');



nav_heading.append(menu_link);
menu_link
navigation.insertBefore(nav_heading, nav_list);

var menu_button = document.querySelector('#menu-button');
menu_button.addEventListener('click', function() {
  nav_list.classList.toggle('visible');
});