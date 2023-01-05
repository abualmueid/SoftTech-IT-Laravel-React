<?php
    $name = empty($_POST['name']) ? "empty" : $_POST['name'];
    $address = empty($_POST['address']) ? "empty" : $_POST['address'];

    echo "Name: $name\n";
    echo "Address: $address\n";
 ?>
