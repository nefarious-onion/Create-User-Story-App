// @ts-check

const Epic = require('./epic.model');
const Userstory = require('../userstory/userstory.model');

const getEpics = () => {
    return new Promise((resolve, reject) => {
        Epic.find((error, epics) => {
            if (error) {
                reject(error);
            } else {
                resolve(epics);
            }
        })
    })
}

const getEpic = id => {
    const isIdValid = typeof (id) === "string";

    if (!isIdValid) {
        throw new Error('Id is not a string');
    } else {
        return new Promise((resolve, reject) => {
            Epic
                .findById(id)
                .populate('stories')
                .exec((error, epic)  => {
                if (error) {
                    reject(error);
                } else {
                    resolve(epic);
                }
            })
        })
    }
}

const createEpic = content => {
    try {
        const epic = new Epic(content);
        return epic.save();
    } catch (error) {
        console.log(error);
        return false;
    }
}
const patchEpic = async (id, updatedContent) => {
    try {
        const { _id, ...restContent } = updatedContent;
        const updatedEpic = await Epic.findOneAndUpdate({ _id: id }, restContent);
        return updatedEpic;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteEpic = async (id) => {
    try {
        const deletedEpic = await Epic.findOneAndDelete({ _id: id });
        return deletedEpic;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    getEpics,
    getEpic,
    createEpic,
    patchEpic,
    deleteEpic,
}