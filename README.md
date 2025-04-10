# Teste Front end

---

## Live Code

[URL Live](https://react-tamanho-cores.vercel.app/)

---

## Funcionalidades Principais

- Busca de dados de produtos via API
- Exibição organizada das informações do produto
- Gerenciamento de variações (SKUs) por cor e tamanho
- Interface interativa para seleção de variações
- O componente HandleItens é responsável por gerenciar e exibir informações de produtos e suas variações (SKUs) em um e-commerce, com foco especial nas dimensões "Cor" e "Tamanho".

---

## Estrutura do Projeto

- Arquivos Principais
- HandleItens.tsx: Componente principal
- Interfaces/vtex.ts: Tipagens TypeScript (IVtexItens, ISKU, IDimension)
- Services/httpClient.ts: Serviço de requisições HTTP

---

## Dependências

- React Hooks (useState, useEffect)
- TypeScript para tipagem estática
- Axios

### Rodando a aplicação

```bash

# Clone este repositório
$ git clone https://github.com/MaximianoEduardo/react-tamanho-cores

# Acesse a pasta do projeto no seu terminal/cmd
$ cd react-tamanho-cores

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[React](https://react.dev/)**
- **[Typescript](https://www.typescriptlang.org/)**

> Veja o arquivo  [package.json](./package.json)
