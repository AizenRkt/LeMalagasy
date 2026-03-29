<?php
namespace app\controllers;

use Flight;

class DbController {

    public function __construct() {}

    // GET /api/db-status
    public function status() {
        try {
            // try using registered Flight DB service first
            try {
                $db = Flight::db();
                $db->query('SELECT 1');
                Flight::json(['db' => 'ok', 'via' => 'flight.db', 'time' => date('c')], 200);
                return;
            } catch (\Throwable $e) {
                // fallback to using config values
            }

            $dbConf = $config['database'] ?? [];
            $driver = $dbConf['driver'] ?? 'pgsql';
            $host = $dbConf['host'] ?? 'localhost';
            $port = $dbConf['port'] ?? '5432';
            $dbname = $dbConf['dbname'] ?? '';
            $user = $dbConf['user'] ?? null;
            $pass = $dbConf['password'] ?? null;

            $dsn = sprintf('%s:host=%s;port=%s;dbname=%s', $driver, $host, $port, $dbname);
            $pdo = new \PDO($dsn, $user, $pass, [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
            $pdo->query('SELECT 1');
            Flight::json(['db' => 'ok', 'via' => 'config', 'time' => date('c')], 200);
        } catch (\Throwable $ex) {
            Flight::json(['db' => 'error', 'message' => $ex->getMessage()], 500);
        }
    }
}
