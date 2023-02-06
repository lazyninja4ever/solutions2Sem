let  worldData = require('../modules/world.js');

const world_index = (req, res, next) =>{
    res.render('world', { data: worldData });
};

const world_alfabetisk = (req, res, next) =>{
    res.render('world', { data: worldData });
};

module.exports = {world_index, world_alfabetisk};

