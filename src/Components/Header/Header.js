import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className='nav-links'>
            <Link to='/'><h3>home</h3></Link>
            <Link to='/category'><h3>cagtegory</h3></Link>
            <Link to='/about'><h3>about</h3></Link>           
        </div>
        <Link to='/'><h1>Wishlist</h1></Link>
        <div className= 'icons'>
        <Link to='/user'><h6>User</h6></Link>
            <Link to='/cart'><h6>Cart</h6></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;