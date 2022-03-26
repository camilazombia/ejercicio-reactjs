import './NavBar.css';
import Logo  from "../../assets/images.png";
import ShoppingCart from "../../assets/Icon feather-shopping-cart.png";


function  NavBar() {
  return (
  <header  className="Navbar">
    <img src={Logo} alt="Logo" className='Navbar_Logo' />
    <img src={ShoppingCart} alt="Cart" className='Navbar_Cart' />
  </header>
  );
}

export default NavBar;
