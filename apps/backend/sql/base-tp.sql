CREATE DATABASE budget;
USE budget;

-- Période budgétaire
CREATE TABLE periode (
    id_periode INT AUTO_INCREMENT PRIMARY KEY,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL
);

-- Solde initial par période
CREATE TABLE solde_debut (
    id_solde_debut INT AUTO_INCREMENT PRIMARY KEY,
    id_periode INT NOT NULL,
    montant DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (id_periode) REFERENCES periode(id_periode) ON DELETE CASCADE
);

-- Départements effectuant des transactions
CREATE TABLE departement (
    id_departement INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL UNIQUE,
    mdp VARCHAR(255) NOT NULL -- Chiffrer avec password_hash() en PHP
);

-- Catégorie principale : soit "Dépense" soit "Recette"
CREATE TABLE categorie (
    id_categorie INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL UNIQUE,
    value INT
);

-- Type de catégorie : Exemple "Dépense d'investissement", "Dépense de fonctionnement"
CREATE TABLE type_categorie (
    id_type_categorie INT AUTO_INCREMENT PRIMARY KEY,
    id_categorie INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie) ON DELETE CASCADE
);

-- Transactions (chaque entrée du tableau budgétaire)
CREATE TABLE transaction (
    id_transaction INT AUTO_INCREMENT PRIMARY KEY,
    id_periode INT NOT NULL,
    id_departement INT NOT NULL,
    id_categorie INT NOT NULL, -- Dépense ou recette
    id_type_categorie INT, -- Dépense d'investissement, etc.
    description_nature_categorie VARCHAR(255), -- Achat ordinateur, etc.
    date_transaction DATE NOT NULL,
    montant_prevision DECIMAL(15,2) NOT NULL,
    montant_realisation DECIMAL(15,2) NOT NULL DEFAULT 0,
    FOREIGN KEY (id_periode) REFERENCES periode(id_periode) ON DELETE CASCADE,
    FOREIGN KEY (id_departement) REFERENCES departement(id_departement) ON DELETE CASCADE,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie) ON DELETE CASCADE,
    FOREIGN KEY (id_type_categorie) REFERENCES type_categorie(id_type_categorie) ON DELETE CASCADE
);

-- Transactions validées
CREATE TABLE transaction_validation (
    id_validation INT AUTO_INCREMENT PRIMARY KEY,
    id_transaction INT NOT NULL,
    FOREIGN KEY (id_transaction) REFERENCES transaction(id_transaction) ON DELETE CASCADE
);

-- Insertion d'un département test avec un mot de passe chiffré (à faire côté application)
CREATE TABLE periode (
    id_periode INT AUTO_INCREMENT PRIMARY KEY,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL
);

-- qui peut voir toute les transactions et utilisé les filtres
CREATE TABLE permission (
    id_permission INT AUTO_INCREMENT PRIMARY KEY,
    id_departement INT NOT NULL,
    FOREIGN KEY (id_departement) REFERENCES departement(id_departement)
);

INSERT INTO permission (id_departement) VALUES (1);


INSERT INTO periode (date_debut, date_fin) VALUES (2025-01-01, '2025-12-31');

INSERT INTO departement (nom, mdp) VALUES ('finance', 'finance');

INSERT INTO categorie (nom, value) VALUES ('dépense', 1);
INSERT INTO categorie (nom, value) VALUES ('recette', 0);

INSERT INTO type_categorie (id_categorie, description) VALUES (1, 'dépense de fonctionnement');
INSERT INTO type_categorie (id_categorie, description) VALUES (1, 'dépense d''investissement');
INSERT INTO type_categorie (id_categorie, description) VALUES (1, 'dépense exceptionnelle');
INSERT INTO type_categorie (id_categorie, description) VALUES (2, 'recette de vente');
INSERT INTO type_categorie (id_categorie, description) VALUES (2, 'recette de dividende');
INSERT INTO type_categorie (id_categorie, description) VALUES (2, 'recette exceptionnelle');

SELECT COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'transaction' 
AND REFERENCED_TABLE_NAME IS NOT NULL;