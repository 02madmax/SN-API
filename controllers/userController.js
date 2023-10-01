const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // Get a user by ID
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // Create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // Update a user by ID
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedUser) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(updatedUser);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // Delete a user by ID
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } 
            await Thought.deleteMany({ username: user.username });
            return res.json(user)
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // Add a friend to a user's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(req.params.userId, { $push: { friends: req.params.friendId } }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    // Remove a friend from a user's friend list
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    }
};