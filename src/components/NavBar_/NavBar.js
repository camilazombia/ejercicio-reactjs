import './NavBar.css';
import Logo  from "../../assets/store.png";
import Cart from "../../assets/shopping-cart.png";

function  NavBar() {
  return (
  <header  className="Navbar">
    <img src={Logo} alt="Logo" className='Navbar_Logo' />
    <div className='Navbar_items'>
    <button> Link 1 </button>
    <button> Link 1 </button>
    <button> Link 1 </button>
    </div>
    <img src={Cart} alt="Cart" className='Navbar_Cart' />
  </header>
  );
}

export default NavBar;
