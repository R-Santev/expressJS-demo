const cubes = require('../data/cubes.json');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]
})

module.exports = mongoose.model('Cube', cubeSchema);

/*class Cube {
    constructor(id, name, description, imageUrl, difficultyLevel){
        this.id = id;
        this.name =name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    async save(){
        cubes.push(this);
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

    static getAll(){
        return cubes;
    }

    static getOne(id){
        return cubes.find(x => x.id == id);
    }
}*/
