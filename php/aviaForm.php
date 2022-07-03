<?php
//Сбор данных из полей формы. 
$ticketsFrom = $_POST['ticketsFrom'];
$ticketsWhere = $_POST['ticketsWhere'];
$ticketsDateThere = $_POST['ticketsDateThere'];
$ticketsDateBack = $_POST['ticketsDateBack'];
$ticketsPeople = $_POST['ticketsPeople'];
$ticketsNumber = $_POST['ticketsNumber'];
$userTicketsConnection = $_POST['userTicketsConnection'];

$token = "5201665122:AAGYBStTX4mOOEwIXSN9VmGgpu1N6_6YpJQ"; // Тут пишем токен
$chat_id = "-732233555"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "all-tours.by"; //Указываем название сайта

$arr = array(
  'Авиабилеты: Откуда:' => $ticketsFrom,
  'Куда: ' => $ticketsWhere,
  'Туда: ' => $ticketsDateThere,
  'Обратно: ' => $ticketsDateBack,
  'Количество людей: ' => $ticketsPeople,
  'Телефон: ' => $ticketsNumber,
  'Способ связи: ' => $userTicketsConnection,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>