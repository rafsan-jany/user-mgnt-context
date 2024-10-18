import React, { useContext } from 'react'
import { useUsersContext } from '../hooks/useUsersContext';

const User = ({user}) => {
//   const{users, setUsers} = useContext(UsersContext)
  const {users, setUsers} = useUsersContext()
  const {id, username} = user;
  
  const handleDelete = (id) => {
    const filteredUser = users.filter(user=> user.id != id)
    setUsers(filteredUser)
  }

  // added comment for git testing


  return (
    <article className='user'>
        <h2>{id}</h2>
        <p>{username}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </article>
  )
}

export default User