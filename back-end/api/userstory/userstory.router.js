// @ts-check

const express = require('express');
const router = express.Router();
const userstoryService = require('./userstory.service');

//get all userstories
router.get('/', async (req, res) => {
    console.log('get all userstories');

    try {
        const stories = await userstoryService.getStories();
        res.json(stories);
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }

})

//get one userstory
router.get('/:id', async (req, res) => {
    const id = String(req.params.id);
    console.log(`get one userstory with id ${id}`);
    try {
        const story = await userstoryService.getStory(id);
        console.log({ story });

        if (story) {
            res.json(story);
        } else {
            res
                .status(404)
                .json({
                    message: "Story not found"
                });
        }
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }

});

//create userstory
router.post('/', async (req, res) => {
    console.log('create new userstory');
    const { body } = req;
    
    try {
        const newStory = await userstoryService.createStory(body);

    if (newStory !== false) {
        console.log('new userstory created ', newStory);
        res
            .status(201)
            .json(newStory);
    } else {
        res
            .status(404)
            .json({
                message: "Story not created"
            })
    }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }
    
})
//update a userstory
router.patch('/:id', async (req, res) => {
    const id = String(req.params.id);
    console.log(`update userstory with the id of ${id}`);
    const { body } = req;

    try {
        const updatedStory = await userstoryService.patchStory(id, body);

        if (updatedStory !== false) {
            console.log('userstory patched', updatedStory);
            res.json(updatedStory);
        } else {
            res
                .status(404)
                .json({
                    message: "Story not found"
                })
        }
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }
})

//delete userstory
router.delete('/:id', async (req, res) => {
    const id = String(req.params.id);
    console.log(`delete userstory with id of ${id}`);

    try {
        const deletedStory = await userstoryService.deleteStory(id);

        if (deletedStory !== false) {
            console.log('userstory deleted', deletedStory);
            res.json(deletedStory);
        } else {
            res
                .status(204)
                .json();
        }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }

  
})
module.exports = router;