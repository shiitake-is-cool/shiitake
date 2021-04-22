let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/th_food_vegetablefruits_ca_013.png') {
      myImage.setAttribute ('src','images/firefox2.jpeg');
    } else {
      myImage.setAttribute ('src','images/th_food_vegetablefruits_ca_013.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Shiitake はすばらしいよ、' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Shiitake はすばらしいよ、' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Shiitake is cool, ' + myName;
  }
}