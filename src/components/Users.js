import React from 'react'
import User from './User'

function show(id) {
    console.log(id)
}

const Users = ({users, handleDeleteUser}) => {
  return (
    <section className='users'>
        {users.map(user => <User key={user.id} user= {user} handleDeleteUser={handleDeleteUser}/>)}

    </section>
  )
}

export default Users