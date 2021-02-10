const Cube = require("../models/Cube");
const cubes = require('../data/cubes.json');
const fs = require('fs');
const path = require('path');
const uniqueId = require('uniqid');

const services = {
    create(data){
        let newCube =  new Cube(
            uniqueId(),
            data.name,
            data.description,
            data.imageUrl,
            data.difficultyLevel,
        )

        return newCube.save();
    },

    getAll(query){

        let result = Cube.getAll();

        if (query.search) {

            result = result.filter(x => x.name.toLowerCase().includes(query.search));
        }

        if (query.from) {
            
            result = result.filter(x => Number(x.difficultyLevel) >= query.from);
        }

        if (query.to) {
            
            result = result.filter(x => Number(x.difficultyLevel) <= query.from);
        }

        return result;
    }
}

module.exports = services;