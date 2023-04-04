const User = require('../models/userModels');

module.exports.home = async (req, res) => {
    res.status(200).json({"Huh":"I am always running fine , stop checking this route go and Check the frontend code !!!"});
  }

module.exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body; 

        if ( !name || !email ) throw new Error("Name and email are required");

        const userExists = await User.findOne({ email });

        if ( userExists ) throw new Error("User already exists");

        const user = await User.create({ name, email });
        
        res.status(201).json({
            success : true,
            message : "User created successfully",
            user ,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message,
        });
    }
};

module.exports.getUser = async (req, res) => {
    try {
      const user = await User.find();
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
          });
    } catch (error) {
        console.log(error);
        res.status(400).json({
        success: false,
        message: error.message,
      });   
    }
};

exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};