/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: ft.js
 */

function resetForm() {
  document.getElementById('photognum').value = 1;
  document.getElementById('photoghrs').value = 2;
  document.getElementById('membook').checked = false;
  document.getElementById('reprodrights').checked = false;
  document.getElementById('distance').value = 0;
}

//  resets form when page is reloaded
document.addEventListener('load', resetForm, false);