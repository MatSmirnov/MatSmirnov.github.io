
// Переключение картинок 
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/moment-from-video-1.jpg') {
        myImage.setAttribute ('src', 'images/moment-from-video-2.jpg');
    } else {
        myImage.setAttribute ('src','images/moment-from-video-1.jpg');
    }
} 

// Базовая идентефикация на сайте
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


// Автоматически дополняющийся список

const list = document.createElement('ul');
const info = document.createElement('p');
const button = document.getElementById('newElementButton');


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

// Плавный скролл "#" сылок (не работает)

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});