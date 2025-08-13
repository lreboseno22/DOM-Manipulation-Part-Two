document.addEventListener("DOMContentLoaded", function() {
// Part One:

// Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector("main");

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = `var(--main-bg)`;

// Set the content of mainEl to <h1>DOM Manipulation</h1>
const newHeader = document.createElement("h1");
newHeader.textContent = "DOM Manipulation";
mainEl.append(newHeader);

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// ---------------------------------------------------------

// Part Two

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";

// Set the background color of topMenuEL to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

// ---------------------------------------------------------

// Part Three

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Iterate over the entire menuLinks array and for each "link" object
//  - Create an <a> element
//  - On the new element, add an href attribute with its value set to the href property of the "link" object
//  - Set the new element's content to the value of the text property of the "link" object
//  - Append the new element to the topMenu element

for (const link of menuLinks) { 
   const a = document.createElement("a"); 
   a.href = link.href; 
   a.textContent = link.text; 
   topMenuEl.appendChild(a); 
} 

// ----------------------------------

// Second Part of Lab
// Creating the Submenu

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add("flex-around");

// temporarily hide subMenuEl
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Adding Menu Interaction
let topMenuLinks = this.querySelectorAll("a");

topMenuEl.addEventListener('click', function(event){
    event.preventDefault();

    if (!event.target.matches('a')) return;

    // Toggle
    if (event.target.classList.contains('active')){
        event.target.classList.remove('active');
    } else {
        topMenuLinks.forEach(link => {
            link.classList.remove('active');
            event.target.classList.add('active');
        });
    }

    console.log(event.target.textContent);
})



});