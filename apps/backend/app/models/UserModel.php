<?php

namespace app\models;

use PDO;

class UserModel extends BaseSQL {
    public function __construct(PDO $db) {
        parent::__construct($db, 'user', 'id');
    }

    public function getWithRole(int $id): ?array {
        try {
            $sql = "SELECT u.*, r.name as role_name 
                    FROM \"user\" u 
                    LEFT JOIN role r ON u.id_role = r.id 
                    WHERE u.id = :id";
            $stmt = $this->db->prepare($sql);
            $stmt->execute(['id' => $id]);
            return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
        } catch (PDOException $e) {
            return null;
        }
    }

    public function getAllWithRoles(): array {
        try {
            $sql = "SELECT u.*, r.name as role_name 
                    FROM \"user\" u 
                    LEFT JOIN role r ON u.id_role = r.id";
            $stmt = $this->db->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }
}
