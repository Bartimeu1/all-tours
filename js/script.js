// Слайдер Авиатуров
new Swiper('.aviatur__slider',{
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    breakpoints: {
        920: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 7,
            spaceBetween: 50,
        },
    },
});

// Слайдер Отзывов
new Swiper('.reviews__slider',{
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        centeredSlides: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1090: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// Скролл по ссылке
const anchors = document.querySelectorAll('a[href*="#"]')

$(document).ready(function () {
    $(".header__nav-link").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top - 150 }, 1200);
    });
});

// Проверка на верный ввод данных CallbackForm
const callbackButton = document.querySelector('.callback__form-button')
let callbackInput = document.querySelectorAll('.callback__form-input--important');
const callbackInputSecure = document.querySelectorAll('.callback__form--secure')
let sum2 = 0
setInterval(() => {
    for(let i = 0; i<callbackInputSecure.length; i++){
        if(callbackInputSecure[i].value == ''){
            sum2=0
            callbackInputSecure[i].style.border = '1px solid red'
        }else{
            sum2+=1
            callbackInputSecure[i].style.border = '1px solid green'
        }
    }
    if(sum2 < callbackInputSecure.length){
        callbackButton.setAttribute('disabled', true)
        sum2 = 0
    } else {
        callbackButton.removeAttribute('disabled')
    }
}, 500);
// Success 
const headerSuccess = document.querySelector('.header__success');
const headerSuccessClose = document.querySelector('.header__form-close--success');
const successFunction = function() {
    headerSuccess.classList.add('header__success--active');
}
headerSuccessClose.addEventListener('click',function() {
    headerSuccess.classList.remove('header__success--active');
});

// callback form ajax
const callbackForm = document.querySelector('.callback__form')
callbackButton.addEventListener('click',function() {
  var form_data = jQuery(callbackForm).serialize();
  jQuery.ajax({
    type: "POST",
    url: "/php/callbackForm.php",
    data: form_data,
    success: successFunction()
  });
  event.preventDefault();
});
// Бургер Меню
const headerBurger = document.querySelector('.header__burger');
const headerRight = document.querySelector('.header--right');
const headerNav = document.querySelector('.header__nav');
const headerLeft = document.querySelector('.header--left');
const headerContainer = document.querySelector('.header__container');
const header = document.querySelector('.header');

headerBurger.addEventListener('click',function() {
    headerRight.classList.toggle('header--right--active');
    headerNav.classList.toggle('header__nav--active');
    headerLeft.classList.toggle('header--left--active');
    headerContainer.classList.toggle('header__container--active');
    header.classList.toggle('header--active');
    headerBurger.classList.toggle('header__burger--active');
});

// Трансфер

const transferSelect1 = document.querySelector('.transfer__form-select--1');
const transferSelect2 = document.querySelector('.transfer__form-select--2');
const transferSelect3 = document.querySelector('.transfer__form-select--3');
const transferOptionWhere = document.querySelectorAll('.transfer__form-option--where');
const transferOptionWhere1 = document.querySelector('.transfer__form-option--where--1');
const transferButton = document.querySelector('.transfer__button');
let transferResult = document.querySelector('.transfer__result');
let result = 0
setInterval(() => {
    if (transferSelect1.value == '20') {
        transferOptionWhere1.classList.add('transfer__form-option--where--1--hidden')
        for (i = 0; i < transferOptionWhere.length; i++) {
            transferOptionWhere[i].classList.remove('transfer__form-option--where--hidden');
        };
    } else {
        transferOptionWhere1.classList.remove('transfer__form-option--where--1--hidden');
        for (i = 0; i < transferOptionWhere.length; i++) {
            transferOptionWhere[i].classList.add('transfer__form-option--where--hidden');
        };
    };
}, 500);
setInterval(() => {
    for (obj of tranferData) {
        if ((obj.fromValue == transferSelect1.value || obj.whereValue == transferSelect2.value) && obj.peopleValue == transferSelect3.value) {
            transferResult.innerText = obj.result;
        } else if (transferSelect1.value != '20' && transferSelect2.value != '20') {
            transferResult.innerText = '- ₽';
        } else if (transferSelect1.value == '20' && transferSelect2.value == '20') {
            transferResult.innerText = '- ₽';
        }
    }
}, 500);

const tranferData = [
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '1',
        result: '5000 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '2',
        result: '7500 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '3',
        result: '10000 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '4',
        result: '12500 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '5',
        result: '15000 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '6',
        result: '17500 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '7',
        result: '20000 ₽'
    },
    {
        fromValue: '10',
        whereValue: '10',
        peopleValue: '8',
        result: '22500 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '1',
        result: '5000 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '2',
        result: '7500 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '3',
        result: '10000 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '4',
        result: '12500 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '5',
        result: '15000 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '6',
        result: '17500 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '7',
        result: '20000 ₽'
    },
    {
        fromValue: '12',
        whereValue: '12',
        peopleValue: '8',
        result: '22500 ₽'
    },
]

// Рассрочка 
let installmentValue2 = document.querySelector('.installment__form-input--value--2');
const installmentInput1 = document.querySelector('.installment__form-input--1');
const installmentInput2 = document.querySelector('.installment__form-input--2');
let inputTest = document.querySelector('.input__test');
let installmentResult = document.querySelector('.installment__result');
inputTest.value = '600'
installmentInput2.value = '600'
installmentInput2.addEventListener('input', function() {
    inputTest.value = installmentInput2.value;
});
inputTest.addEventListener('input', function() {
    installmentInput2.value = inputTest.value;
});
setInterval(() => {
    if (installmentInput1.value == '106') {
        installmentResult.innerText = Math.round(installmentInput2.value*14.3/1200/(1-(1+13.99/1200)**(-(installmentInput1.value - 100)))) + ' BYN'
    } else if (installmentInput1.value >= '103') {
        installmentResult.innerText = Math.round(installmentInput2.value*0.1/1200/(1-(1+0.1/1200)**(-(installmentInput1.value - 100)))) + ' BYN'
    } else if (installmentInput1.value >= '110') {
        installmentResult.innerText = Math.round(installmentInput2.value*25.9/1200/(1-(1+25.9/1200)**(-(installmentInput1.value - 100)))) + ' BYN'
    };
}, 500);
/*
// Авиабилеты
const ticketsButton = document.querySelector('.tickets__form-button')
const ticketsInputs = document.querySelectorAll('.tickets__form__input')
ticketsButton.addEventListener('click',function() {
    let ticketsValue1 = ticketsInputs[0].value;
    let ticketsValue2 = ticketsInputs[1].value;
    let ticketsValue3 = ticketsInputs[2].value;
    let ticketsValue4 = ticketsInputs[3].value;
    let ticketsValue5 = ticketsInputs[4].value;
    localStorage.Value1 = ticketsValue1;
    localStorage.Value2 = ticketsValue2;
    localStorage.Value3 = ticketsValue3;
    localStorage.Value4 = ticketsValue4;
    localStorage.Value5 = ticketsValue5;
    document.location.href = "../zayavkaavia.html";
});
*/