import {
    Link
  } from 'react-router-dom';
import React from "react";
  class Header extends React.Component {

    render() {
        return (
        <header>
            <div className="logo">
                UNC Rocket League
            </div>
    
            <nav className="nav">
                <ul className="ul">
                    <li className="li">
                        <Link className="a" to="/">Home</Link>
                    </li>
                    <li className="li">
                        <Link className="a" to="/News">News</Link>
                    </li>
                    <li className="li">
                        <Link className="a" to="/Teams">Teams</Link>
                    </li>
                    <li className="li">
                        <Link className="a" to="/Player List">Player List</Link>
                    </li>
                    <li className="create">
                        <Link className="a" to="/">Create Player</Link>
                    </li>
                </ul>
            </nav>
    
        </header>
        );
    }
}
  export default Header;
  