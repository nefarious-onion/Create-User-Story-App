// @ts-check

const express = require('express');
const router = express.Router({mergeParams: true});
const userstoryService = require('./userstory.service');
//response ok
//response fail
//parametri res/koodi/message

//get all userstories
router.get('/', async (req, res) => {
    const epicId = String(req.params.id);
    console.log('get all userstories');

    try {
        const stories = await userstoryService.getStories(epicId);
       if (stories !== false) {
        res.json(stories);
       } else {
           res
            .status(404)
            .json({
                message: "Stories not found"
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

//get one userstory
router.get('/:story_id', async (req, res) => {
    const id = String(req.params.story_id);
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
    const epicId = String(req.params.id);
    const { body } = req;
    console.log('create new userstory');
    
    try {
        const newStory = await userstoryService.createStory(epicId, body);

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
router.patch('/:story_id', async (req, res) => {
    const id = String(req.params.story_id);
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
router.delete('/:story_id', async (req, res) => {
    const id = String(req.params.story_id);
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