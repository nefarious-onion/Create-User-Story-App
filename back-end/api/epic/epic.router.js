// @ts-check
const express = require('express');
const router = express.Router();
const epicService = require('./epic.service');

//get all epics
router.get('/', async (req, res) => {
    console.log('get all epics');
    try {
        const epics = await epicService.getEpics();
        res.json(epics)
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }
})
//get one epic
router.get('/:id', async (req, res) => {
    const id = String(req.params.id);
    console.log(`get one epic with id of ${id}`);
    try {
        const epic = await epicService.getEpic(id);
        console.log({ epic });

        if (epic) {
            res.json(epic);
        } else
            res
                .status(404)
                .json({
                    message: "Epic not found"
                });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({
                message: "Server error"
            })
    }
})
//create an epic
router.post('/', async (req, res) => {
    console.log('create new epic');
    const { body } = req;

    try {
        const newEpic = await epicService.createEpic(body);
        if (newEpic !== false) {
            console.log('new epic created ', newEpic);
            res
                .status(201)
                .json(newEpic)
        } else {
            res
                .status(402)
                .json({
                    message: "Epic not created"
                })
        }
    } catch (error) {
        console.log(error);
        res
            .json(500)
            .json({
                message: "Server error"
            })
    }
})
//update an epic
router.patch('/:id', async (req, res) => {
    const id = String(req.params.id);
    console.log(`update epic with the id of ${id}`);
    const { body } = req;

    try {
        const updatedEpic = await epicService.patchEpic(id, body);

        if (updatedEpic !== false) {
            console.log('epic updated', updatedEpic);
            res.json(updatedEpic);
        } else {
            res
                .status(404)
                .json({
                    message: "Epic not found"
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

//delete an epic
router.delete('/:id', async (req, res) => {
    const id = String(req.params.id);
    console.log(`delete epic with the id of ${id}`);

    try {
        const deletedEpic = await epicService.deleteEpic(id);

        if (deletedEpic !== false) {
            console.log('epic deleted', deletedEpic);
            res.json(deletedEpic);
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