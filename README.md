# Tech Talk: A Tech Blog Application

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [How to Contribute](#how-to-contribute)
- [GitHub Repo](#github-repo)
- [Deployed Application](#deployed-application)

## Description
This is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation
1. Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd tech-blog
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your MySQL database credentials:
    ```
    DB_NAME='your-database-name'
    DB_USER='your-database-username'
    DB_PASSWORD='your-database-password'
    ```
5. Create the database:
    ```bash
    mysql -u your-database-username -p
    CREATE DATABASE your-database-name;
    ```
6. Seed the database:
    ```bash
    npm run seed
    ```

## Usage
1. Start the server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3001` to access the application.

<img src="/public/assets/home.png" alt="Home" width="600" height="auto">
<img src="/public/assets/signup.png" alt="Sign Up" width="600" height="auto">
<img src="/public/assets/login.png" alt="Log In" width="600" height="auto">
<img src="/public/assets/dashboard.png" alt="Dashboard" width="600" height="auto">
<img src="/public/assets/createnewpost.png" alt="Create a New Post" width="600" height="auto">
<img src="/public/assets/editpost.png" alt="Edit Post" width="600" height="auto">
<img src="/public/assets/postacomment.png" alt="Post a Comment" width="600" height="auto">
<img src="/public/assets/postedcomment.png" alt="Posted Comment" width="600" height="auto">
<img src="/public/assets/editcomment.png" alt="Edit a Comment" width="600" height="auto">


## Dependencies
- [bcrypt: ^5.0.1](https://www.npmjs.com/package/bcrypt)
- [connect-session-sequelize: ^7.0.4](https://www.npmjs.com/package/connect-session-sequelize)
- [dotenv: ^8.2.0](https://www.npmjs.com/package/dotenv)
- [express: ^4.17.1](https://www.npmjs.com/package/express)
- [express-handlebars: ^5.3.0](https://www.npmjs.com/package/express-handlebars)
- [express-session: ^1.17.1](https://www.npmjs.com/package/express-session)
- [mysql2: ^2.2.5](https://www.npmjs.com/package/mysql2)
- [sequelize: ^6.6.5](https://www.npmjs.com/package/sequelize)
- [nodemon: ^2.0.7 (dev dependency)](https://www.npmjs.com/package/nodemon)

## How to Contribute
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Open a pull request.

## GitHub Repo
[GitHub Repository](https://github.com/bradleytroll/talking-tech)

## Deployed Application
[Deployed Application](https://lit-scrubland-73672-42f874aa9410.herokuapp.com/)
