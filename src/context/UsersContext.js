import { createContext, useState } from "react";
import React from "react";

export const UsersContext = createContext({});

const UsersProvider = ({children}) => {
    const[users, setUsers] = useState([
        {id: 1, username: 'anisul'},
        {id: 2, username: 'rafsan'},
      ]) 

    return  <UsersContext.Provider value= {{users, setUsers}}>
        {children}
    </UsersContext.Provider>
}

export default UsersProvider




// 1. create useContext
// 2. provide the useContext
// 3. use the context 