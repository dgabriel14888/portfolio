<?php
	if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
		

		/* Tests to make sure the code works correctly */
		print_r($_POST);


		$to			= 'dgabriel1488@gmail.com';
		$subject 	= $_POST['name'] . ' sent you a message.';
		$message 	= $_POST['message'];
		$headers	= "From: " . $_POST['email'] . "\r\n";


		$send = mail($to, $subject, $message, $headers);



	}
?>