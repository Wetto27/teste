## 📁 Estrutura de Pastas

Abaixo está a organização das pastas e arquivos do projeto **CardView**:

```bash
CARDVIEW/
├── node_modules/                # Dependências do projeto
├── public/                      # Arquivos públicos (favicon, index.html, etc.)
├── src/                         # Código-fonte da aplicação
│   ├── api/                     # Funções para comunicação com a API
│   ├── assets/                  # Imagens e recursos estáticos
│   ├── auth/                    # Lógica de autenticação
│   ├── components/              # Componentes reutilizáveis da interface
│   │   ├── Details/             # Detalhes dos pokémons
│   │   ├── NotificationBell/    # Componente de notificações
│   │   ├── PokemonCard/         # Componente de exibição de cartas Pokémon
│   │   └── TradeModal/          # Componente modal para trocas
│   ├── pages/                   # Páginas principais da aplicação
│   │   ├── Collection/          # Página da coleção de cartas do jogador
│   │   ├── Login/               # Página de login
│   │   └── Register/            # Página de cadastro
│   ├── App.css                  # Estilos globais do App
│   ├── App.js                   # Componente principal da aplicação
│   ├── index.css                # Estilos globais do index
│   ├── index.js                 # Ponto de entrada da aplicação React
│   └── reportWebVitals.js       # Métricas de performance (opcional)
├── .gitignore                   # Arquivos e pastas ignorados pelo Git
├── package-lock.json            # Lockfile do npm
├── package.json                 # Informações e dependências do projeto
└── README.md                    # Documentação do projeto
