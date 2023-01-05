let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/moment-from-video-1.jpg') {
        myImage.setAttribute ('src', 'images/moment-from-video-2.jpg');
    } else {
        myImage.setAttribute ('src','images/moment-from-video-1.jpg');
    }
} 


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Пожалуйста введите своё имя.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Это крутой сайт, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
 let storedName = localStorage.getItem('name');
 myHeading.innerHTML = 'Это крутой сайт,'+ storedName;
    }

myButton.onclick = function() {
    setUserName();
}



const list = document.createElement('ul');
const info = document.createElement('p');
const button = document.getElementById('newElementButton');

// info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

button.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}