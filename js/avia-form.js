const ticketsInputs = document.querySelectorAll('.tickets__form__input');
if (localStorage.Value1 != undefined) {
    ticketsInputs[0].value = localStorage.Value1;
}
if (localStorage.Value2 != undefined) {
    ticketsInputs[1].value = localStorage.Value2;
}
if (localStorage.Value1 != undefined) {
    ticketsInputs[2].value = localStorage.Value3;
}
if (localStorage.Value1 != undefined) {
    ticketsInputs[3].value = localStorage.Value4;
}
// Проверка на верный ввод данных 
const callbackButton = document.querySelector('.tickets__form-button')
let callbackInput = document.querySelectorAll('.callback__form-input--important');
const callbackInputSecure = document.querySelectorAll('.tickets__form__input--secure')
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
// SuccessFunction
const successFunction = function() {
    document.location.href = "../success.html";
}
// Form ajax
const form = document.querySelector('.form')
callbackButton.addEventListener('click',function() {
    var form_data = jQuery(form).serialize();
    jQuery.ajax({
      type: "POST",
      url: "/php/aviaForm.php",
      data: form_data,
      success: successFunction()
    });
    event.preventDefault();
});