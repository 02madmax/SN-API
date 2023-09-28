const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: String,
        unique: true,
        required: true,
        trimmed: true
    },
    {
        email: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    {
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
