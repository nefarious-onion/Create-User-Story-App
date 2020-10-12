// @ts-check
import express from 'express';
const router = express.Router();
import epicService from './epic.service';

//get all epics
router.get('/', async (req, res) => {
    const epics = await epicService.getEpics();
    res.json(epics)
})
//get one epic
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const epic = await epicService.getEpic(id);
    if (epic) {
        res.json(epic)
    } else {
        res.status(404).end();
    }

})
//create an epic
router.post('/', async (req, res) => {
    const { body } = req;
    const newEpic = await epicService.createEpic(body);

    res
        .status(201)
        .json(newEpic)
})
//update an epic
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { body } = req;

    const updatedEpic = await epicService.patchEpic(id, body);
    res.json(updatedEpic)
})

//delete an epic
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await epicService.deleteEpic(id);
    res
        .status(204)
        .end()
})

export { router }