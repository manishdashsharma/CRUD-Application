import { Toaster } from 'react-hot-toast';
import './App.css';
import Form from './Components/Form'
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <Form />
      <UserDetails />
      <Toaster />
    </div>
  );
}

export default App;














// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { fetchUsers } from './utils/HandleApi';

// function App() {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await fetchUsers();
//       setUserData(data);
//       console.log(data);
//     };
//     getUsers();
//   }, []);

//   return (
//     <div className="App">
//       {userData && userData?.user?.map(user => (
//         <div key={user._id}>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
