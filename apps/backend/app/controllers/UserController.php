<?php

namespace app\controllers;

use Flight;
use app\models\UserModel;

class UserController {

    private function getModel(): UserModel {
        return new UserModel(Flight::db());
    }

    public function getAll() {
        $users = $this->getModel()->getAllWithRoles();
        Flight::json($users);
    }

    public function getOne($id) {
        $user = $this->getModel()->getWithRole((int)$id);
        if (!$user) {
            Flight::json(['error' => 'User not found'], 404);
            return;
        }
        Flight::json($user);
    }

    public function create() {
        $data = Flight::request()->data->getData();
        
        if (empty($data['email']) || empty($data['name'])) {
            Flight::json(['error' => 'Name and Email are required'], 400);
            return;
        }

        if ($this->getModel()->insert($data)) {
            Flight::json(['message' => 'User created successfully', 'id' => Flight::db()->lastInsertId()], 201);
        } else {
            Flight::json(['error' => 'Failed to create user'], 500);
        }
    }

    public function update($id) {
        $data = Flight::request()->data->getData();
        
        if ($this->getModel()->update($id, $data)) {
            Flight::json(['message' => 'User updated successfully']);
        } else {
            Flight::json(['error' => 'Failed to update user'], 500);
        }
    }

    public function delete($id) {
        if ($this->getModel()->delete($id)) {
            Flight::json(['message' => 'User deleted successfully']);
        } else {
            Flight::json(['error' => 'Failed to delete user'], 500);
        }
    }
}
