<?php
namespace app\controllers;

use Flight;

class ApiController {

    public function __construct() {
    }

    // GET /api/status
    public function status() {
        $data = [
            'status' => 'ok',
            'time' => date('c'),
        ];
        Flight::json($data, 200);
    }
}
