<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Validate form data
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo 'Please fill out all fields.';
        exit;
    }

    // Send email
    $to = 'yuenkevin0227@gmail.com';
    $headers = "From: $name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent.';
    } else {
        echo 'Message could not be sent.';
    }
}
?>