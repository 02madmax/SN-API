const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

// Routes for /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(addThought);

// Routes for /api/thoughts/:id
router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Routes for reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
