import axios from 'axios';


// const BaseURL = "http://localhost:5000";
const BaseURL = "https://curd-0lot.onrender.com";

export const fetchUsers = async () => {
    try{
        const response = await axios.get(`${BaseURL}/getUser`);
        return response.data;
    } catch(err){
        return err.response.data.message;
    }
};

export const createUser = async (name,email) => {
    try {
        const data = {
            name : name,
            email : email
        }
        const response = await axios.post(`${BaseURL}/createUser`,data);
        return response.data;
    } catch(err){
        console.log(err.response.data.message);
        return err.response.data.message;
    }
}


export const editUser = async (name,email , user) => {
    try{
        const data = {
            name : name,
            email : email
        } ; 
        const url = `${BaseURL}/updateUser/${user.id}` ;
        console.log(url);
        const response = await axios.put(`${BaseURL}/updateUser/${user._id}`,data);
        return response.data;
    } catch(err){
        return err.response.data.message;
    }
}

export const deleteUser = async (userId) => {
    try{
        const url = `${BaseURL}/deleteUser/${userId}` ;
        console.log(url);
        const response = await axios.delete(`${BaseURL}/deleteUser/${userId}`);
        return response.data;
    } catch(err){
        return err.response.data.message;
    }
}