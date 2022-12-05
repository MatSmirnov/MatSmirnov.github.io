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