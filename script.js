// Objective: Build an app that is functionally similar to https://roman-numeral-converter.freecodecamp.rocks

// ! User Stories:

// ! You should have an input element with an id of "number"
// ! You should have a button element with an id of "convert-btn"
// ! You should have a div element with an id of output
// ! When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
// ! When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
// ! When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
// ! When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
// ! When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
// ! When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
// ! When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
// ! When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
// ! Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

// const roman_mapping = {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     8: 'VIII',
//     9: 'IX',
//     10: 'X',
//     40: 'XL',
//     50: 'L',
//     90: 'XC',
//     100: 'C',
//     400: 'CD',
//     500: 'D',
//     900: 'CM',
//     1000: 'M'
// }

const clearOutput = () => {
    if (output) {
        output.innerText = '';
    }
};

const integerToRoman = (num) => {
    const roman_mapping = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    let result = '';

    // Iterate through each key in the romanMapping
    const keys = Object.keys(roman_mapping).reverse(); // Reverse to start from highest value
    for (let key of keys) {
        key = parseInt(key); // Convert key to number
        // Repeat the current numeral until it cannot be used anymore
        while (num >= key) {
            result += roman_mapping[key];
            num -= key;
        }
    }

    return result;
};


const checkUserInput = () => {
    const inputInt = parseInt(input.value);
    // const regex = /^[0-9]+$/; 
    if (!input.value) {
        output.innerHTML = `
            <p class="error-message">Please enter a valid number</p>
        `
    } else if (inputInt < 1) {
        output.innerHTML = `
            <p class="error-message">Please enter a number greater than or equal to 1</p>
        `
    } else if (inputInt >= 4000) {
        output.innerHTML = `
            <p class="error-message">Please enter a number less than or equal to 3999</p>
        `
    } else {
        clearOutput(); 
        output.innerHTML = `
        <div class="">

            <p id="roman-numeral" class="m-0">${integerToRoman(inputInt)}</p>
        </div>
        `
    }
};


convertBtn.addEventListener("click", checkUserInput);
input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkUserInput();
    }
});