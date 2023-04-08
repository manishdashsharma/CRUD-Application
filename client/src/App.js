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











