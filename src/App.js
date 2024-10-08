import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';

function App() {

  const[users, setUsers] = useState([
    {id: 1, username: 'anisul'},
    {id: 2, username: 'rafsan'},
  ])

  const handleDeleteUser = (id) => {
    console.log(id)
    const filteredUser = users.filter(user=> user.id != id)
    setUsers(filteredUser)
  }

  const handleAddNewUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <div className="App">
      <NewUser handleAddNewUser={handleAddNewUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;
