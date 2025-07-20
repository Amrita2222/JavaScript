// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById('btn');
const paragraph = document.getElementById('paragraph');

button.addEventListener('click', function() {
    paragraph.textContent = 'Button clicked!';
});

// Task 2.  Add a double-click event listener to an image that toggles its visibility. 
let image = document.getElementById('image');
image.addEventListener('dblclick' , () => {
    image.style.display = image.style.display === 'none'? 'block' : 'none';
})

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
let bgcolor = document.getElementById('bgcolor');

bgcolor.addEventListener("mouseover" , () => {
    bgcolor.style.backgroundColor = "lightblue";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.

bgcolor.addEventListener('mouseout', () => {
    bgcolor.style.backgroundColor = 'initial';
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let inputField = document.getElementById('inputField');

inputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

inputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

let inputField2 = document.getElementById('inputField2');

inputField2.addEventListener('keyup', () => {
    let value = inputField2.value;
    document.getElementById('valueDisplay').textContent = `Current value: ${value}`;
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form =document.getElementById('formevent');
form.addEventListener('submit' , () => {
    form.preventDefault();

    let formdata = new formdata(form);
    let entryvalue = formdata.entryvalue();
    console.log('form Data ', Object.fromEntries(entryvalue));
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let Dropdown = document.getElementById('Dropdown');
Dropdown.addEventListener('change' , () => {
    Dropdown.textContent = Dropdown.value;
})

selectDropdown.addEventListener('change', () => {
    let selectedValue = Dropdown.value;
    document.getElementById('selectedValueDisplay').textContent = `Selected value: ${selectedValue}`;
});


