import React, { useContext } from 'react'
import User from './User'
import { useUsersContext } from '../hooks/useUsersContext'

const Users = () => {
//   const {users, setUsers} = useContext(UsersContext)
  const {users, setUsers} = useUsersContext()
  return (
    <section className='users'>
        {users.map(user => <User key={user.id} user= {user} />)}

    </section>
  )
}

export default Users