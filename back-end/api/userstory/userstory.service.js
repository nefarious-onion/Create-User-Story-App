// @ts-check

const Userstory = require('./userstory.model');
const epicService = require('../epic/epic.service');

const getStories = async (epicId) => {
        try {
            const foundEpic =  await epicService.getEpic(epicId);
            console.log('found epic:', foundEpic);
            return foundEpic.stories;
        } catch (error) {
            console.log(error);
            return false;
        }
       
}

const getStory = id => {
    const isIdValid = typeof (id) === "string";

    if (!isIdValid) {
        throw new Error('Id is not a string');
    } else {
        return new Promise((resolve, reject) => {
            Userstory.findById(id, (error, story) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(story);
                }
            })
        })
    }
}

const createStory = async (epicId, content) => {
    console.log('epicid: ',epicId, content);
    try {
        const story = new Userstory(content);
        await story.save();
        
        const foundEpic = await epicService.getEpic(epicId);
        foundEpic.stories.push(story);
        await foundEpic.save();

        return story;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const patchStory = async (id, updatedContent) => {
    try {
        const {_id, ...restContent} = updatedContent;
        const updatedStory = await Userstory.findOneAndUpdate({_id: id }, restContent);
        return updatedStory;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteStory = async (id) => {
    try {
        const deletedStory = await Userstory.findOneAndDelete({_id: id});
        return deletedStory;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    getStories,
    getStory,
    createStory,
    patchStory,
    deleteStory,
}