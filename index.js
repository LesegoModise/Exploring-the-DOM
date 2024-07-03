// console.log(document)
const myMessage = document.querySelector('.myMessage');
// console.log(myMessage);
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');

// myMessage.innerText = 'This is a message in the DOM!'

// setTimeout(function () {
//     myMessage.innerText = 'This is a message in the DOM!' // This bring the "message" after 3 seconds
// }, 3000)

// theMessageButton.addEventListener('click', function() {
//     alert("button clicked!") // This alerts the page that "The button has been clicked"
// });

// theMessageButton.addEventListener('click', function() {
//     myMessage.innerText = 'This is a message in the DOM!' // This shows the "message" after the "show message" button has been "fired up"
// });

// clearMessageButton.addEventListener('click', function() {
//     myMessage.innerText = ''; // This will clear our "This is a message..." message 
// });

// theMessageButton.addEventListener('click', function() {
//     setTimeout(function () {
//             myMessage.innerText = 'This is a message in the DOM!' // This bring the "message" after 3 seconds
//             setTimeout(function () {
//                 myMessage.innerText = ''; // This will clear our "This is a message..." message after 3 seconds
//             }, 3000)
//         }, 3000)
// });

theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value
});

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    } else {
        myMessage.innerText = 'Type Something Darling';
        setTimeout(function () {
            myMessage.innerText = '';
        }, 3000);
    }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})


const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector('.fruits');
const fruitInput = document.querySelector('.inputFruit');
const addFruitButton = document.querySelector('.addFruitButton');

for(let i=0;i<fruits.length;i++){
    // get fruits from the list
    const fruit = fruits[i];
    
    // create a new li element
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
 }

 addFruitButton.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = fruitInput.value;
    fruitList.appendChild(li);
 })
 