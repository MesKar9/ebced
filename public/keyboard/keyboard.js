let buttons = document.querySelectorAll('.key-btn');
let nameOfPerson = document.querySelector('.nameOfPerson');
let nameOfMother = document.querySelector('.nameOfMother');
let nameOfFather = document.querySelector('.nameOfFather');
let nameInputs = document.querySelectorAll('.nameInput');

let chars = []
let inputRegion = nameOfPerson;

nameInputs.forEach(textInput => {
    textInput.addEventListener('click', () => {
        console.log();
        let theClass = textInput.classList[0];
        if(theClass === 'nameOfPerson') {
            inputRegion = nameOfPerson;
        } else if(theClass === 'nameOfMother') {
            inputRegion = nameOfMother;
        } else if(theClass === 'nameOfFather') {
            inputRegion = nameOfFather;
        }
    });
});

buttons.forEach(btn => {
    btn.addEventListener('click', (event) =>{
        if(btn.classList[0] === 'material-icons' ){
            console.log('bu backspace');
            chars.pop();
            console.log(chars);
            inputRegion.value = chars.join('');
        } else {
            inputRegion.value += btn.innerText;
            chars.push(btn.innerText)
        } 
    });
});

function backspace(btn) {
    if(btn.classList[0] === 'material-icons' ){
        console.log('bu backspace');
        return true;
    } return false;
}
