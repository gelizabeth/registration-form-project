const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

//Show input error message
function error(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

//Show success outline
function success(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//Check required
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (!input.value) {
            error(input, `${getFieldName(input)} is required`);
        } else {
            success(input);
        }
    });
}
//Check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        error(input, `${getFieldName(input)} can't be longer than ${max} characters`);
    } else {
        success(input);
    }
}
//Check if email is valid
function validateEmail(input){
    var re = /\S+@\S+\.\S+/;
    if(re.test(input.value)){
        success(input);
    }
    else{
        error(input, `Email is not valid. `);
    }
}
//Check passwords match
function checkMatch(input1, input2){
if(input1.value === input2.value){
success(input2);
} else{
    error(input2, `Passwords do not match`);
}
}
//Get fieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase();
}
//Button event listenter
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, passwordConfirm]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 30);
    validateEmail(email);
    checkMatch(password, passwordConfirm);
});