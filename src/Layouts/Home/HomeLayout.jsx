import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from '../../Component/Header'

export default function HomeLayout() {
    return (
        <>
            {/*<Header/>*/}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}
