const { Post } = require('../models');

const postData = [{
        title: 'Node.js',
        content: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.',
        user_id: 1

    },
    {
        title: 'Sequelize',
        content: 'Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.',
        user_id: 2
    },
    {
        title: 'Express',
        content: 'Express.js is a back end web application framework for building RESTful APIs with Node.js.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;