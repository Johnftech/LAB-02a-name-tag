// name
const updateButton = document.getElementById('update-button');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
// color
const changeColorButton = document.getElementById('color-change-button');
const nameTagColor = document.getElementsByClassName('bkg-color');
const chooseColor = document.getElementById('color-change');
//const message = () => console.log('This is an additional log of events');

/*Event Listeners*/
// listen and update name change
updateButton.addEventListener('click', () => {
    // console.log('The update button has been pressed', message());
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
}
);

// listen and update color change
let newColor = "";
chooseColor.addEventListener('change', () => {
    console.log('A color was selected');
    newColor =  chooseColor.value;
});

changeColorButton.addEventListener('click', () => {
    console.log('The color button was pressed', newColor);
    // call the choosecolor event listener
    // nameTagColor.className = color that was selected ;
    console.log('This is nameTagColor:', nameTagColor);
    nameTagColor.style.backgroundColor = newColor;
  for (let i = 0; i < nameTagColor.length; i++) {
        const item = nameTagColor[i];
        console.log(`This is the item: ${item}`);
        item.style.backgroundColor = newColor;
    }
});





