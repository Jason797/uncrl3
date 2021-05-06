import {
    Link
  } from 'react-router-dom';
  
  function Header() {
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
            </ul>
        </nav>
  
      </header>
    );
  }
  
  export default Header;
  