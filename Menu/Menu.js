/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">*
    <ul>*
      {each menu item as a list item}*
    </ul>*
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
//creates a new menu componet
function createMenu(menuItem)
{
  //creates new elements per the HTML structre. See above
  const menuDiv = document.createElement('div');
  const menuUL = document.createElement('ul');
  const menuLI = [];
  
  //populates the menu list items as a list item with proper name
  for(let i = 0; i < menuItem.length; i++)
  {
    menuLI[i] = document.createElement('li');
    menuLI[i].textContent = menuItem[i];
  }

  //adds menu class to div
  menuDiv.classList.add('menu');

  //attach UL to DIV
  menuDiv.appendChild(menuUL);
 
  //attach each list item to UL
  menuLI.forEach(item =>
  {
    menuUL.appendChild(item);
  });

  //get a reference to the button already on the page
  const menuButton = document.querySelector('.menu-button');

  //event listener to know if button is clicked and opens the menu
  menuButton.addEventListener('click', () =>
  {
    menuDiv.classList.toggle('menu--open');
  });
  
  //return component
  return menuDiv;
}

//render component to the page
const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));