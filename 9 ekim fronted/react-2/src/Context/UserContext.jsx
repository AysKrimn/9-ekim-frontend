import React, { createContext, useState } from 'react'


export const AuthProvider = createContext()

export default function UserContext(props) {

  const [user, setUser] = useState(null)

  return (

        <>

            <AuthProvider.Provider value={{ user, setUser}}>

                {props.children}

            </AuthProvider.Provider>
        
        </>
  )
}
