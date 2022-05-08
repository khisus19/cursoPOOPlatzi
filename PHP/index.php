<?php
require_once('car.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('account.php');

$uberX = new UberX("CVB123", new Account("Andres Herrera", "AMS123"), "Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberPool("TYUD43", new Account("Andrea Mirto", "ANM123"), "Dodge", "Attitude");
$uberPool->printDataCar();

$uberVan = new UberVan("OJS536", new Account("Raul Ramirez", "RRI294"), "Nissan", "Versa");
$uberVan->setPassenger(6);
$uberVan->printDataCar();
?>