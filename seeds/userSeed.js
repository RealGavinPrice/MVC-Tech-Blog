const { User } = require('../model');

const userData = [
    {
        username: "Gavin",
        email: "gavin@seiya.com",
        password: "p4ssw0rd"
    },
    {
        username: "Seiya",
        email: "seiya@seiya.com",
        password: "p4ssw0rd"
    },
    {
        username: "AB",
        email: "ab@seiya.com",
        password: "p4ssw0rd"
    },
    {
        username: "Fanny",
        email: "fanny@seiya.com",
        password: "p4ssw0rd"
    },
    {
        username: "Benji",
        email: "benji@seiya.com",
        password: "p4ssw0rd"
    },
    {
        username: "Vanessa",
        email: "vanessa@seiya.com",
        password: "p4ssw0rd"
    },
];

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;