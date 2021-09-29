// import functions and grab DOM elements
//Name Section
const nameInput = document.getElementById('name');
const nameButton = document.getElementById('generate');
const nameTag = document.getElementById('first-name');

//Pronouns Section
const proIn = document.getElementById('pronouns');
const proButton = document.getElementById('set');
const pronoun = document.getElementById('proDisplay');

//Color Section
const col1 = document.getElementById('color1');
const col2 = document.getElementById('color2');
const col3 = document.getElementById('color3');
let headerColor = document.getElementById('head');
let footerColor = document.getElementById('foot');

//Name Event Listener
nameButton.addEventListener('click', ()=> {
    let newName = nameInput.value;
    nameTag.textContent = newName;
});

//Pronoun Event Listener
proButton.addEventListener('click', ()=> {
    let newPro = proIn.value;
    pronoun.textContent = newPro;
});

//Color Event Listeners
col1.addEventListener('click', ()=> {
    headerColor.style.backgroundColor = '#904FCE';
    footerColor.style.backgroundColor = '#904FCE';
});

col2.addEventListener('click', ()=> {
    headerColor.style.backgroundColor = '#048BA8';
    footerColor.style.backgroundColor = '#048BA8';
});

col3.addEventListener('click', ()=> {
    headerColor.style.background = '#16DB93';
    footerColor.style.background = '#16DB93';
});