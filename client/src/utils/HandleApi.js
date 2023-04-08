import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`/getUser`);
    return response.data.user;
  } catch (err) {
    return err.response.data.message;
  }
};

export const createUser = async (name, email) => {
  try {
    const data = {
      name: name,
      email: email
    };

    const response = await axios.post(`/createUser`, data);
    return response.data;
  } catch (err) {
    console.log(err.response.data.message);
    return err.response.data.message;
  }
};

export const editUser = async (name, email, user) => {
  try {
    const data = {
      name: name,
      email: email
    };
    const url = `/updateUser/${user.id}`;
    console.log(url);
    const response = await axios.put(`/updateUser/${user._id}`, data);
    return response.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteUser = async userId => {
  try {
    const url = `/deleteUser/${userId}`;
    console.log(url);
    const response = await axios.delete(`/deleteUser/${userId}`);
    return response.data;
  } catch (err) {
    return err.response.data.message;
  }
};
