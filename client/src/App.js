import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Form from './Components/Form';
import UserDetails from './Components/UserDetails';
import { fetchUsers } from './utils/HandleApi';

import './App.css';

const App = () => {
  const [userData, setUserData] = useState(null);

  const getUsersData = async () => {
    const data = await fetchUsers();
    setUserData(data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="App">
      <Form getUsersData={getUsersData} />
      <UserDetails users={userData} getUsersData={getUsersData} />
      <Toaster />
    </div>
  );
};

export default App;
