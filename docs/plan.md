## Plan: Site News + Backoffice SEO

Objectif: livrer un monorepo Dockerisé pour un site d’actualités (FrontOffice React) + Backoffice Flight PHP avec PostgreSQL et MongoDB, conforme aux exigences SEO et livrables décrits dans docs/informations.md.

**Steps**
1. Phase 1 - Cadrage et architecture (bloquant pour toutes les phases suivantes)
- Extraire les exigences de docs/informations.md: stack imposée, points SEO, livrables, deadline.
- Valider la convention d’architecture: monorepo avec séparation apps/frontend, apps/backend, infra/docker, docs.
- Définir la responsabilité des bases: PostgreSQL pour données relationnelles (users/articles), MongoDB pour contenus annexes/recherche/indexation.

2. Phase 2 - Squelette de dépôt et environnement (dépend de 1)
- Créer l’arborescence cible du projet.
- Préparer l’orchestration Docker (services frontend, backend, postgres, mongo).
- Préparer les fichiers d’environnement exemple (.env.example global + par app).

3. Phase 3 - Backend Flight PHP (dépend de 2, en parallèle partiel avec 4)
- Implémenter les fondations API: auth, CRUD articles, validation.
- Implémenter rewriting URL côté backend.
- Préparer migration/seed PostgreSQL + init MongoDB.
- Ajouter login BO avec credentials par défaut documentés.

4. Phase 4 - FrontOffice React (dépend de 2, peut démarrer en parallèle avec 3)
- Implémenter pages principales: accueil, détail article, page 404.
- Connecter API backend.
- Assurer structure sémantique H1-H6 et titres de pages.
- Intégrer méta tags (title, description, OG) et alt images.

5. Phase 5 - Backoffice UI (dépend de 3)
- Implémenter login, dashboard, gestion articles (create/read/update/delete).
- Gérer média + attribut alt + slug URL normalisé.

6. Phase 6 - SEO et performance (dépend de 4 et 5)
- Vérifier URLs normalisées, sitemap, robots.
- Exécuter Lighthouse local mobile + desktop.
- Corriger prioritairement les points bloquants (images, bundle, accessibilité de base).

7. Phase 7 - Documentation et livraison (dépend de 6)
- Constituer la documentation technique dans docs: architecture, modèle de données, procédures d’exécution, captures FO/BO, login par défaut, num ETU.
- Produire ZIP final Docker fonctionnel.
- Préparer dépôt public GitHub/GitLab.

**Relevant files**
- docs/informations.md — source des exigences fonctionnelles, techniques et livrables.
- docs/ — destination de tous les documents de livraison demandés.

**Verification**
1. Vérification fonctionnelle FO: liste d’articles, détail article, navigation.
2. Vérification fonctionnelle BO: login, CRUD article, persistance en base.
3. Vérification SEO: headings, title/meta, alt images, URLs rewriting.
4. Vérification qualité: Lighthouse local mobile + desktop avec rapport archivé dans docs.
5. Vérification livraison: docker compose up réussit l’ensemble de la stack depuis zéro.

**Decisions**
- Inclus: architecture monorepo, plan d’exécution, arborescence cible, stratégie de vérification, stratégie documentaire dans docs.
- Exclu: implémentation de code, création effective des dossiers/fichiers (à faire en mode exécution).
- Hypothèse: projet en binôme, exécution en parallèle Front/Back pour tenir la deadline.

**Further Considerations**
1. Décider rapidement la répartition binôme (Front/SEO vs Back/DB) pour compresser le délai.
2. Définir tôt les champs article (title, slug, body, image, alt, tags, published_at) pour éviter les refontes DB.
3. Fixer un objectif Lighthouse minimal réaliste (ex: >= 85 mobile, >= 90 desktop).