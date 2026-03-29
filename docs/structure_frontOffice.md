frontoffice/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
│       └── logo-lemur.png
│
├── src/
│   ├── assets/              # Images, fonts, icons
│   │   ├── images/
│   │   └── styles/
│   │
│   ├── components/          # Composants réutilisables
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ArticleCard/
│   │   ├── Navbar/
│   │   └── Sidebar/
│   │
│   ├── pages/               # Pages principales
│   │   ├── Home.jsx
│   │   ├── Article.jsx
│   │   ├── Category.jsx
│   │   ├── Search.jsx
│   │   └── NotFound.jsx
│   │
│   ├── layouts/             # Layout global (comme Le Monde)
│   │   └── MainLayout.jsx
│   │
│   ├── services/            # Appels API
│   │   ├── api.js
│   │   ├── articleService.js
│   │   └── userService.js
│   │
│   ├── hooks/               # Custom hooks
│   │   └── useFetch.js
│   │
│   ├── context/             # Global state (auth, thème)
│   │   └── AuthContext.jsx
│   │
│   ├── router/              # Routes
│   │   └── AppRouter.jsx
│   │
│   ├── utils/               # Fonctions utiles
│   │   └── formatDate.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── README.md