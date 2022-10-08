

const { Comment } = require('../models');

const commentData = [{
        comment_text: " Nice le learn ",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "A must to learn",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Need it.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;