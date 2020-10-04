import express from 'express';
const router = express.Router({ mergeParams: true });
import userstoryService from './userstory.service';

//get all userstories
router.get('/', async (req, res) => {
    const stories = userstoryService.getStories();
    res.json(stories);
})

//get one userstory
router.get('/:story_id', async (req, res) => {
    const id = req.params.story_id
    const story = await userstoryService.getStory(id);
    if (story) {
        res.json(story);
    } else {
        res.status(404).end();
    }
});

//create userstory
router.post('/', async (req, res) => {
    const epicId = req.params.id;
    const { body } = req;

    const newStory = await userstoryService.createStory(epicId, body);
    res
        .status(201)
        .json(newStory);
})

//update a userstory
router.patch('/:story_id', async (req, res) => {
    const id = req.params.story_id
    const { body } = req;

    const updatedStory = await userstoryService.patchStory(id, body);
    res.json(updatedStory);
})

//delete userstory
router.delete('/:story_id', async (req, res) => {
    const id = req.params.story_id;
    await userstoryService.deleteStory(id);
    res
        .status(204)
        .end()
})

export { router };