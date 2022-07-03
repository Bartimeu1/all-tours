<?php
//Сбор данных из полей формы. 
$userFrom = $_POST['userFrom'];
$userWhere = $_POST['userWhere'];
$userDateStart = $_POST['userDateStart'];
$userDateEnd = $_POST['userDateEnd'];
$userWishes = $_POST['userWishes'];
$userPhone = $_POST['userPhone'];
$userConnection = $_POST['userConnection'];

$token = "5201665122:AAGYBStTX4mOOEwIXSN9VmGgpu1N6_6YpJQ"; // Тут пишем токен
$chat_id = "-732233555"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "all-tours.by"; //Указываем название сайта

$arr = array(
  'Туры: Откуда: ' => $userFrom,
  'Куда: ' => $userWhere,
  'Дата вылета (с): ' => $userDateStart,
  'Дата вылета (по): ' => $userDateEnd,
  'Пожелания: ' => $userWishes,
  'Номер телефона: ' => $userPhone,
  'Желаемый способ связи: ' => $userConnection,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>