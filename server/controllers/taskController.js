const Task = require('../models/taskModels')

module.exports.createTask = async (req, res) => {
    try {
        const { task } = req.body; 

        const tasks = await Task.create({ task });
        
        res.status(201).json({
            success : true,
            message : "User created successfully",
            tasks ,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};