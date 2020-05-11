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

module.exports = {
    getStories
}