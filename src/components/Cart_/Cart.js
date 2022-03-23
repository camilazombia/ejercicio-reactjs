import './Cart.css';
import ShoppingCart from "../../assets/shopping-cart.png";

function  Cart() {
  return (
    <img src={ShoppingCart} alt="Cart" className='Navbar_Cart' />
  );
}

export default Cart;