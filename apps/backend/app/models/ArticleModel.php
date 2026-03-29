<?php

namespace app\models;

use PDO;

class ArticleModel extends BaseSQL {
    public function __construct(PDO $db) {
        // Table name is 'article', primary key is 'id'
        parent::__construct($db, 'article', 'id');
    }

    /**
     * Custom method to get articles with their categories and tags
     */
    public function getFullDetails(int $id): ?array {
        $article = $this->getById($id);
        if (!$article) return null;

        // Get categories
        $catSql = "SELECT c.* FROM categorie c 
                   JOIN article_categories ac ON c.id = ac.id_category 
                   WHERE ac.id_article = :id";
        $stmt = $this->db->prepare($catSql);
        $stmt->execute(['id' => $id]);
        $article['categories'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Get tags
        $tagSql = "SELECT t.* FROM tag t 
                   JOIN article_tags at ON t.id = at.id_tag 
                   WHERE at.id_article = :id";
        $stmt = $this->db->prepare($tagSql);
        $stmt->execute(['id' => $id]);
        $article['tags'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $article;
    }
}
