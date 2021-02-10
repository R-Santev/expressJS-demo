const cubes = require('../data/cubes.json');
const fs = require('fs');
const path = require('path');

class Cube {
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
}

module.exports = Cube;