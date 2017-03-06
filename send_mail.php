<?php 

$name = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$subject = $_POST['subject'];
$mensaje = $_POST['mensaje'];
 
 $formcontent="De: $name \n email: $email \n telefono: $telefono \n Message: $message";
 $recipient = "escuderojuan@gmail.com";
 $subject = "Form de contacto - $subject";
 $mailheader = "From: $email \r\n";
 mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
 echo "Thank You!";
?>