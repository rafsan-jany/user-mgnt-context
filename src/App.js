import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import { UsersContext } from './context/UsersContext';

function App() {

  const[users, setUsers] = useState([
    {id: 1, username: 'anisul'},
    {id: 2, username: 'rafsan'},
  ])

  return (
    <UsersContext.Provider value= {{users, setUsers}}>
      <div className="App">
        <NewUser/>
        <Users/>
      </div>
    </UsersContext.Provider>

  );
}

export default App;
