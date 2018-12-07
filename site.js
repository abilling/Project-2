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

var navigation = document.queryselector('#navigation');
var nav_list = document.queryselector('.nav');
var nav_heading = document.createElement('h2');
var menu_link = document.createElement('a');

menu_link.textContext = 'Menu';
nav_heading.append(menu_link);
navigation.insertBefore(nav_heading,nav_list);

var menu_button = document.querySelector('#menu-button');
menu-button.addEventListener('click', function() {
  nav_list.classList.toggle('visible');
});