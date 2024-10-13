import React, { useState } from 'react'
import { useUsersContext } from '../hooks/useUsersContext'

const NewUser = () => {
//    const {users, setUsers} = useContext(UsersContext)

  const {users, setUsers} = useUsersContext()
  const [username, setUsername] = useState("");

  const handleUserNameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {id: new Date().getTime().toString() , username: username}
    setUsers((prevUsers) => [...prevUsers, newUser])
    setUsername("")
  }


  return (
    <div>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} onChange={handleUserNameChange} required />
            <button type="submit">Add User</button>
        </form>

    </div>
  )
}

export default NewUser