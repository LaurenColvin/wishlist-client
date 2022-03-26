import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className='nav-links'>
            <Link className='link' to='/'><h3>home</h3></Link>
            <Link className='link' to='/category'><h3>category</h3></Link>
            <Link className='link' to='/about'><h3>about</h3></Link>           
        </div>
        <Link className='link' to='/'><h1>Wishlist</h1></Link>
        <div className= 'icons'>
        <Link className='link' to='/user'><h3>User</h3></Link>
            <Link className='link' to='/cart'><h3>Cart</h3></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;