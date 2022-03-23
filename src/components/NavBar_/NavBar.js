import './NavBar.css';
import Logo  from "../../assets/store.png";
import Cart from "../Cart_/Cart.js";

function  NavBar() {
  return (
  <header  className="Navbar">
    <img src={Logo} alt="Logo" className='Navbar_Logo' />
    <div className='Navbar_items'>
    <button> Link 1 </button>
    <button> Link 1 </button>
    <button> Link 1 </button>
    </div>
    <Cart/>
  </header>
  );
}

export default NavBar;
