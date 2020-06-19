<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src=".github/logo.svg" />
</h1>

*Projeto desenvolvido durante a Next Level Week 1.0 ministrada pela [Rocketseat](https://github.com/Rocketseat).*

## Projeto:
O Ecoleta é um marketplace para coleta de resíduos, nele seriam cadatrados pontos de coleta e suas informações de contato, itens coletados e endereço no mapa, tornando fácil para usuários encontrarem os locais de descarte mais próximos.

## Estrutura
**server/**: 

API REST no backend desenvolvida com Node.js e express que armazena os dados de pontos de coleta e itens coletados em um banco Sqlite, disponibilizando esses dados para a versão web e mobile.

**web/**: 

Versão web do frontend desenvolvida com React, trata-se do cadastro de pontos de coleta.

**mobile/**: 

Para a versão mobile foi utilizado React Native com Expo, é aqui que usuários interessado no descarte informariam UF e cidade para encontrar os pontos de coleta.

## Executando
**Backend:**
```sh
# Na pasta server:
# Instalar módulos necessários e executar server.js
npm install
npm run dev

# Em outro terminal executar:
# Migrations, para definir a estrutura do banco
npm run knex:migrate

# Seeds para adicionar itens de coleta no banco
npm run knex:seed
```

**Frontend (web):**
```sh
# Na pasta web:
# Instalar módulos necessários e executar aplicação
npm install
npm start

# Após isso, a aplicação irá executar no browser 
```

**Mobile:**
```sh
# Na pasta mobile:
# Instalar módulos necessários
npm install

# Instalar expo-cli de forma global (necessário sudo)
sudo npm install --global expo-cli

# Mudar a baseURL em mobile/src/services/api.ts para o ip em que o servidor está rodando
# Após isso, executar:
npm start

# Para testar instalar expo pela loja de aplicativos
```