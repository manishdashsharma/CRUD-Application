const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        trim : true,
        required : [true , "task is required"],
        maxlength : [20 , "over limit"]
    },
});


module.exports = mongoose.model("Task", taskSchema);