<?php

namespace app\controllers;

use Flight;
use app\models\ArticleModel;

class ArticleController {

    private function getModel(): ArticleModel {
        return new ArticleModel(Flight::db());
    }

    public function getAll() {
        $articles = $this->getModel()->getAll();
        Flight::json($articles);
    }

    public function getOne($id) {
        $article = $this->getModel()->getFullDetails((int)$id);
        if (!$article) {
            Flight::json(['error' => 'Article not found'], 404);
            return;
        }
        Flight::json($article);
    }

    public function create() {
        $data = Flight::request()->data->getData();
        
        if (empty($data['title'])) {
            Flight::json(['error' => 'Title is required'], 400);
            return;
        }

        if ($this->getModel()->insert($data)) {
            Flight::json(['message' => 'Article created successfully', 'id' => Flight::db()->lastInsertId()], 201);
        } else {
            Flight::json(['error' => 'Failed to create article'], 500);
        }
    }

    public function update($id) {
        $data = Flight::request()->data->getData();
        
        if ($this->getModel()->update($id, $data)) {
            Flight::json(['message' => 'Article updated successfully']);
        } else {
            Flight::json(['error' => 'Failed to update article'], 500);
        }
    }

    public function delete($id) {
        if ($this->getModel()->delete($id)) {
            Flight::json(['message' => 'Article deleted successfully']);
        } else {
            Flight::json(['error' => 'Failed to delete article'], 500);
        }
    }
}
