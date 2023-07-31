
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
// for (let i= 0; i< menuLinks.length; i++ ){
//   let a = document.createElement('a');
//   a.textContent = menuLinks[i].text;
//   a.setAttribute('href', menuLinks[i].href);
//   topMenuEl.appendChild(a);
// }

//   Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");
for(let i = 0; i < menuLinks.length; i++){
    let a = document.createElement('a')
    a.setAttribute("href", menuLinks[i].href)
    a.textContent = menuLinks[i].text
    topMenuEl.appendChild(a)
    }


