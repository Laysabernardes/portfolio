# Meu Portfólio Full-Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)

Este repositório contém o código-fonte do meu portfólio pessoal, uma aplicação full-stack desenvolvida para demonstrar minhas habilidades em desenvolvimento web.

---

### 🚀 **Acesse a versão online:** [portfolio.laysabernardes.com](https://laysabernardes.github.io/portfolio/)

![Demonstração do Portfólio](front-end/src/assets/site.gif)

---

## 📚 Sobre o Projeto

Este portfólio foi criado não apenas para exibir meus projetos, mas também para ser uma aplicação dinâmica e gerenciável. A principal característica é a sua capacidade de ser totalmente atualizado através de um painel de administração, sem a necessidade de alterar uma única linha de código do front-end.

O projeto é dividido em duas partes:
- **Back-End**: Uma API RESTful construída com Node.js, Express e MongoDB, responsável por toda a lógica de negócio, autenticação e gerenciamento de dados.
- **Front-End**: Uma interface moderna e interativa desenvolvida com React, que consome a API para exibir o conteúdo dinamicamente.

## ✨ Funcionalidades Principais

#### Back-End
- ✅ **Autenticação Segura**: Sistema de login com JWT para proteger as rotas de administração.
- ✅ **CRUD de Projetos**: Adicionar, editar, visualizar e deletar projetos.
- ✅ **CRUD de Tecnologias**: Gerenciar as tecnologias vinculadas a cada projeto.
- ✅ **Gerenciamento de Conteúdo**: Atualizar seções do portfólio (como "Sobre Mim" e "Contato") diretamente pelo painel.
- ✅ **Documentação Automatizada**: API documentada com Swagger para facilitar testes e integração.

#### Front-End
- ✅ **Interface Dinâmica**: Exibe projetos, tecnologias e seções do portfólio com dados vindos da API.
- ✅ **Painel de Administração**: Interface para gerenciar todo o conteúdo do site após o login.
- ✅ **Design Responsivo**: Layout adaptável para uma ótima experiência em desktops e dispositivos móveis.
- ✅ **Animações Sutis**: Uso de Framer Motion para uma experiência de usuário mais fluida.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
|-----------|-----------------------------------------------------------------|
| **Front-End** | `React`, `React Router`, `Axios`, `Styled-Components`, `Framer Motion` |
| **Back-End** | `Node.js`, `Express`, `MongoDB`, `Mongoose`, `JWT`, `Bcrypt` |
| **Ferramentas** | `Git`, `Dotenv`, `Swagger`, `Figma` |

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina.

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Uma instância do MongoDB (local ou em um serviço como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Configure o Back-End:**
    ```bash
    cd back-end
    npm install
    ```
    - Crie um arquivo `.env` na raiz da pasta `back-end` e adicione as seguintes variáveis, baseando-se no arquivo `.env.example` (se houver):
      ```
      MONGO_URI=sua_string_de_conexao_com_o_mongodb
      JWT_SECRET=seu_segredo_jwt_super_secreto
      PORT=3001
      ```
    - Inicie o servidor back-end:
    ```bash
    npm run dev
    ```

3.  **Configure o Front-End:**
    - Em um novo terminal:
    ```bash
    cd front-end
    npm install
    ```
    - Inicie a aplicação React:
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000`.

## 📄 Links e Documentação

- **API (Swagger):** [Documentação da API](https://portfolio-37lf.onrender.com/doc/)
- **Design (Figma):** [Protótipo no Figma](https://www.figma.com/design/eZSWl1162WYf4Eoc2PHlMU/Portfolio?node-id=0-1&t=hE4Zgy1SOqmNGKnm-1)

## 🌟 Contribuições

Contribuições são sempre bem-vindas! Se você encontrar um bug ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

## 📫 Contato

- **Email:** laysabernardes.ads@gmail.com
- **LinkedIn:** [Laysa Bernardes](https://www.linkedin.com/in/laysabernardes/)

Obrigado por visitar! 😊
