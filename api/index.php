<?php
  header('Access-Control-Allow-Origin: *');

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $adminEmail = 'devmarcelocardoso@gmail.com';
  $adminSubject = 'Novo lead';
  $customerMessage = getTemplate('customer.html');
  $adminMessage = getTemplate('admin.html');
  $name = isset($_GET['name']) ? $_GET['name'] : null;
  $email = isset($_GET['email']) ? $_GET['email'] : null;
  $phone = isset($_GET['phone']) ? $_GET['phone'] : null;
  $subject = isset($_GET['subject']) ? $_GET['subject'] : null;
  $message = isset($_GET['message']) ? $_GET['message'] : null;

  if ($name && $email && $phone && $subject && $message) {
    $customerMessage = str_replace('{{ name }}', $name, $customerMessage);
    $adminMessage = str_replace('{{ name }}', $name, $adminMessage);
    $adminMessage = str_replace('{{ email }}', $email, $adminMessage);
    $adminMessage = str_replace('{{ phone }}', $phone , $adminMessage);
    $adminMessage = str_replace('{{ subject }}', $subject , $adminMessage);
    $adminMessage = str_replace('{{ message }}', $message , $adminMessage);
    
    sendEmail($email, $subject, $customerMessage);
    sendEmail($adminEmail, $adminSubject, $adminMessage);
    echo json_encode(['status' => 200, 'message' => 'Mensagem enviada com sucesso!']);
  } else {
    echo json_encode(['status' => 400, 'message' => 'Preencha todos os campos']);
  }

  function sendEmail($email, $subject, $body){
    $mail = new PHPMailer(true);  

    try {
      //Server settings
      $mail->CharSet = 'UTF-8'; 
      $mail->SMTPDebug = SMTP::DEBUG_OFF;                              //Enable verbose debug output
      $mail->isSMTP();                                                 //Send using SMTP
      $mail->Host       = 'smtp-relay.sendinblue.com';                 //Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                        //Enable SMTP authentication
      $mail->Username   = 'devmarcelocardoso@gmail.com';               //SMTP username
      $mail->Password   = 'ASDSA6546#$!sdf02+';                        //SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;              //Enable implicit TLS encryption
      $mail->Port       = 587;                                         //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

      //Recipients
      $mail->setFrom('devmarcelocardoso@gmail.com', 'Suden');
      $mail->addAddress($email);                                       //Add a recipient

      //Attachments
      $mail->addEmbeddedImage(__DIR__ . DIRECTORY_SEPARATOR . "templates" .  DIRECTORY_SEPARATOR . "assets" . DIRECTORY_SEPARATOR . "logotipo.png" , "logotipo", "logotipo.png");        //Add attachments

      //Content
      $mail->isHTML(true);                                             //Set email format to HTML
      $mail->Subject = $subject;
      $mail->Body    = $body;

      $mail->send();
      return true;
    } catch (Exception $e) {
      return false;
    }
  }

  function getTemplate($name){
    return file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . "templates" . DIRECTORY_SEPARATOR . $name);
  }
?>