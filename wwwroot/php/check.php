<?php
    $email = $_POST['Email'];
    if(trim($email)=="")
        echo "почта не введена";
    else{
        echo "<h1>Vasha pochta</h1><p>$email</p>";
    }