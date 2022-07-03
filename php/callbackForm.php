<?php
//Сбор данных из полей формы. 
$callbackLink = $_POST['callbackLink'];
$callbackNumber = $_POST['callbackNumber'];
$callbackName = $_POST['callbackName'];


$token = "5201665122:AAGYBStTX4mOOEwIXSN9VmGgpu1N6_6YpJQ"; // Тут пишем токен
$chat_id = "-732233555"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "all-tours.by"; //Указываем название сайта

$arr = array(
  'Предложение: ' => $callbackLink,
  'Телефон: ' => $callbackNumber,
  'Имя: ' => $callbackName,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>