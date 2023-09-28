const { Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // Get a thought by ID
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.id });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // Create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // Update a thought by ID
    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedThought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(updatedThought);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // Delete a thought by ID
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json({ message: 'Thought deleted successfully!' });
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};
