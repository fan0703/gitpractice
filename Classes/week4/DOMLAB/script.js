
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

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

for(let i = 0; i < menuLinks.length; i++){
    let a = document.createElement("a")
    a.setAttribute("href", menuLinks[i].href)
    a.textContent = menuLinks[i].text
    topMenuEl.appendChild(a)
 
}
//task 4.0
const subMenuEl = document.querySelector("#sub-menu");
// task 4.1
subMenuEl.style.height = "100%";
// task 4.2
subMenuEl.style.backgroundColor = "#3da4ab";
// task 4.3
subMenuEl.classList.add("flex-around");
// task 4.4
subMenuEl.style.position = "absolute";
// task 4.5
subMenuEl.style.top = 0;
// task 5.1
const topMenuLinks = topMenuEl.querySelectorAll('a');
let showingSubMenu = false;

// task 5.2
topMenuEl.addEventListener('click', function(evt){
evt.preventDefault();
console.log(evt);
for(let i =0; i < topMenuLinks.length; i++){
    if(evt.target === topMenuLinks[i]){
        console.log(topMenuLinks[i].text);
        if(topMenuLinks[i].classlist.contains("active")){  //task 5.3
            topMenuLinks[i].classlist.remove("active");
            let showingSubmenu = false;
            subMenuEl.style.top = 0;
            return
        }   
    }
    topMenuLinks[i].classList.remove("active");  //task 5.4
    topMenuLinks[i].classList.add("active");   //task 5.5
} 

       if(evt.target.classlist.contains("subLinks")){ //task 5.6
           let showingSubMenu = true
           const subLinks = topMenuLinks[i][2] //?
        }else{ let showingSubMenu = false

          }
        
        if(showingSubMenu === true){  //task 5.7
            buildSubMenu(evt)
            subMenuEl.style.top = "100%";
        }else{
            showingSubMenu === false
            subMenuEl.style.top = 0
          }
        
})
function buildSubMenu(){        //task 5.8
    subMenuEl.innerHTML = ""
    for(let i = 0; i < subLinks.length; i++){
        let b = document.createElement("a")
        b.setAttribute("href", subLinks[i].href)
        b.textContent = subLinks[i].text
        subMenuEl.appendChild(b) 
    }
}

