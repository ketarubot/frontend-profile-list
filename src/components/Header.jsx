import { Link } from 'react-router-dom';
import '../styles/components.css';

function Header() {
  return (
    <>
      <header>
        <h1>Profile Card List</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile/list">Card List</Link>
        <Link to="/profile/form">Make Card</Link>
      </nav>
    </>
  )
}

export default Header;