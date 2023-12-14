import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../Context/UserContext'



export default function PermissionRequired() {
  
    const { user } = useContext(AuthProvider)

    console.log("PERMİSSİON REQUİRED DE UISER:", user)

    const [isAdmin, setIsAdmin] = useState(null)

    useEffect(() => {

        
            if (user.role !== "admin") {

                setIsAdmin(false)
            } else {

                setIsAdmin(true)
            }

    }, [])
  
  
    if (isAdmin === null) return

    if (isAdmin === false) {

        return <h1>Bu sayfayı görmek için yeterli yetkilere sahip değilsiniz.</h1>
    }

    return (
   

        <>
                <Outlet></Outlet>
        </>
  )
}
