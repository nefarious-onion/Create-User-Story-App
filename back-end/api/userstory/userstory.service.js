// @ts-check

const Userstory = require('./userstory.model');

const getStories = () => {
    return new Promise((resolve, reject) => {
        Userstory.find((error, stories) => {
            if(error) {
                reject(error);
            } else {
                resolve(stories);
            }
        })
    })
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

const createStory = content => {
    try {
        const story = new Userstory(content);
        return story.save();
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