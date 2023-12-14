import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteNav from '../Components/SiteNavBar'


export default function MainLayout() {
  return (

        <>

            <SiteNav></SiteNav>

            <div className="container mt-5">

                    <Outlet></Outlet>
            </div>
        
        </>
  )
}
