<?php
//php script for the contact form
if(isset($_POST['name']) && isset ($_POST['email']) && isset($_POST['mes'])  ){
$name=$_POST['name'];
$email=$_POST['email'];
$mess= $_POST['mes'];
$to='tmhiott@gmail.com';
$from = $email;
$subject = 'message from website';
$message= '     name: '.$name.'     email: '.$email.'     message: '.$mess;
$headers= "From: $from\n";
$headers= "MIME-Version:1.0\n";
$headers=" Content-type: text/html; charset=iso-8859-1\n";
if(mail($to, $subject, $message, $headers) ){
echo "success";
}else{
echo "the server failed failed to send the messgae";
}
}
?>
