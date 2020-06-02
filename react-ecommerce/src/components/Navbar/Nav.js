import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'


class Navbar extends React.Component {
  render() {
  return (
    <div className="App">
        <header>
            <nav className="navbar">
                <h1 className="logo">SneakerHead</h1>
                    <div className="nav-container">
                        <ul>
                            <li>
                                <NavLink exact={true} to="/about">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} to="/Products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink exact={true} to="/Contact">Contact </NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>

    </div>
    );
    }
    }

export default Navbar;