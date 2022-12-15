import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../Layouts/Home/HomeLayout'
import ListMovie from '../Module/ListMovie'
import ToDoForm from '../Module/ToDoForm/ToDoForm'
import RandomNum from '../Module/randomNum'

export default function Routes() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: "/ToDoList",
                    element: <ToDoForm />
                },
                {
                    path: "/Movie",
                    element: <ListMovie />
                },
                {
                    path: "/RandomNum",
                    element: <RandomNum />
                }
            ]
        }
    ])
    return routing
}
