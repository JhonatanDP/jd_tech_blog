const { User } = require('../models');

const userData = [{
        username: 'jhon',
        password: 'password'

    },
    {
        username: 'joel',
        password: 'joel'
    },
    {
        username: 'patrick',
        password: 'data'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;