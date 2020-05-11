const express = require('express');
const router = express.Router();
const userstoryService = require('./userstory.service');

//get all userstories
router.get('/', async (req, res) => {
    console.log('get all userstories');

    const stories = await userstoryService.getStories();

    res.json(stories);
})