let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  fetchToys();
})
  
})

let submitBut =document.querySelector("body > div.container > form > input.submit")
submitBut.addEventListener('submit',function submitData(){
  let toyName = document.querySelector("body > div.container > form > input:nth-child(2)").value
  let pic = document.querySelector("body > div.container > form > input:nth-child(4)").value
  let formData = {
  name: toyName,
  image: pic,
  likes: 0
};
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

return fetch("http://localhost:3000/toys", configObj)
.then(function(response) {
  return response.json();
})
.then(function(object) {
  document.body.append(object.id);
})
.catch(function(error) {
  document.body.append(error.message)
});}
)



function fetchToys(){
  fetch('http://localhost:3000/toys')
   .then(resp => resp.json())
	 .then(json => addingToy(json))}

let divId = 0	 
function addingToy(json){
  let toysColl = document.getElementById('toy-collection')
  for(let ele of json){
    
    let toyName = document.createElement('h2')
    h2.innerHTML = ele.name
    
    let pic = document.createElement('img')
    pic.className='toy-avatar'
    img.src = ele.image
    
    let like = document.createElement('p');
    like.innerHTML = `${element.likes}`
    
    let btn = document.createElement('button')
    btn.className='like-btn'
    button.innerHTML = 'Like'
    
    let forDiv = document.createElement('div')
    forDiv.className='card'
    forDiv.Id=divId
    forDiv.appendChild(toyName)
    forDiv.appendChild(pic)
    forDiv.appendChild(like)
    forDiv.appendChild(btn)
    
    toysColl.appendChild(fordiv)
    
    divId++
  }
  
}
