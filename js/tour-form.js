const successFunction = function() {
    document.location.href = "../success.html";
}
const formButton = document.querySelector('.form__button');
const form = document.querySelector('.form');
// Проверка на верный ввод данных Form
const callbackButton = document.querySelector('.form__button');
const callbackInputSecure = document.querySelectorAll('.form__input--secure');
let sum2 = 0;
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
// Form ajax
formButton.addEventListener('click',function() {
  var form_data = jQuery(form).serialize();
  jQuery.ajax({
    type: "POST",
    url: "/php/sendform.php",
    data: form_data,
    success: successFunction()
  });
  event.preventDefault();
});