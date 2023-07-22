const nameElement = document.querySelector('#name');
const mailElement = document.querySelector('#mail');
const phnumberElement = document.querySelector('#phnum');
const courseElement = document.querySelector('#course-dropdown');
const formElement = document.querySelector('#forms');
const msgElement = document.querySelector('#msg')

const nameErrorElement = document.getElementById('nameError');
const mailErrorElement = document.getElementById('mailError');
const numErrorElement = document.getElementById('numError');
const courseErrorElement = document.getElementById('courseError');

const nameLengthErrorElement = document.querySelector('#nameLengthError');
const mobileNumberLengthErrorElement = document.querySelector('#mobileNumberLengthError');
const emailFormatErrorElement = document.querySelector('#emailFormatError');

const successMessageElement = document.querySelector('#success');

// click, change, keyup, submit 
//textcontent, innertext, innerhtml

phnumberElement.addEventListener('keyup', function (event) {
    const value = Number(event.target.value);
    console.log(value)
    if (isNaN(value)) {
        console.log('not a number');
        phnumberElement.value = '';
        return false;
    }
})

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameValue = nameElement.value;
    const mailValue = mailElement.value;
    const phnumberValue = phnumberElement.value;
    const courseValue = courseElement.value;

    let nameValidation = false;
    let emailValidation = false;
    let mobileValidation = false;
    let courseValidation = false;


    console.log(nameValue, mailValue, phnumberValue, courseValue);

    if (nameValue === '') {
        nameErrorElement.classList.remove('hide');
    } else {
        nameErrorElement.classList.add('hide');
        if (nameValue.length < 3) {
            nameLengthErrorElement.classList.remove('hide');
        } else {
            nameLengthErrorElement.classList.add('hide');
            nameValidation = true;
        }
    }

    if (mailValue === '') {
        mailErrorElement.classList.remove('hide');
    } else {
        mailErrorElement.classList.add('hide');
        if (mailValue.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            emailFormatErrorElement.classList.add('hide');
            emailValidation = true;
        } else {
            emailFormatErrorElement.classList.remove('hide');
        }
    }

    if (phnumberValue === '') {
        numErrorElement.classList.remove('hide');
    } else {
        numErrorElement.classList.add('hide');
        if (phnumberValue.length !== 10) {
            mobileNumberLengthErrorElement.classList.remove('hide');
        } else {
            mobileNumberLengthErrorElement.classList.add('hide');
            mobileValidation = true;
        }
    }


    if (courseValue === '-1') {
        courseErrorElement.classList.remove('hide');
        // console.log('if')   
    } else {
        courseErrorElement.classList.add('hide');
        courseValidation = true;
        // console.log('else');
    }

    if (nameValidation && emailValidation && mobileValidation && courseValidation) {
        // show 
        successMessageElement.classList.remove('hide');
        nameElement.value = '';
        mailElement.value = '';
        phnumberElement.value = '';
        courseElement.value = '-1';
        msgElement.value = '';
    } else {
        successMessageElement.classList.add('hide');
    }
});