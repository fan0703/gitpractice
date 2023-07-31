 const btn = document.querySelector('button');

//   // testing!
//   alert('js loaded')
//   console.log(evt);  
 
btn.addEventListener('click', function(evt) {
    const li = document.createElement('li');
    const inp   = document.querySelector('input')
    li.textContent = inp.value
    document.querySelector('ul').appendChild(li)
    console.log(evt)
  });