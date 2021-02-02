const Cube = require("../models/Cube");
const cubes = require('../data/cubes.json');
const fs = require('fs');
const path = require('path');
const uniqueId = require('uniqid');

const services = {
    create(data){
        return new Cube(
            //TODO:create id in better way
            uniqueId(),
            data.name,
            data.description,
            data.imageUrl,
            data.difficultyLevel,
        )
    },

    async save(cube){
        cubes.push(cube);
        let filePath = path.normalize(path.join(__dirname, '../data/cubes.json'));
        let result = await new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(cubes), (err) => {
                if (err) {
                    reject('The file writing failed.')
                }
    
                resolve();
            })
        })
        return result;
    }
}

module.exports = services;