const Cube = require("../models/Cube");

const services = {
    create(data){
        let newCube =  new Cube(data);
        return newCube.save();
    },

    async getAll(query){

        let result = await Cube.find().lean();

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
    },

    getOne(id){
        return Cube.findById(id).lean();
    }
}

module.exports = services;