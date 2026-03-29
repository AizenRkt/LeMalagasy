<?php

namespace app\controllers;

use Flight;

class Controller {

    public function __construct() {
    }
    
    public function acceuil() {
        Flight::render('page/index');
    }
}
