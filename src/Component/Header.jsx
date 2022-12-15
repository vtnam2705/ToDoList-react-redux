import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                position: 'relative',
                
            }}
        >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink className="nav-item" to="/ToDoList">
                            <a className="nav-link" href="#">To-Do-List</a>
                        </NavLink>
                        <NavLink className="nav-item" to="/Movie">
                            <a className="nav-link" href="#">Movie</a>
                        </NavLink>
                        <NavLink className="nav-item" to="/RandomNum">
                            <a className="nav-link" href="#">Random-num</a>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
