import './Cart.css';
import NavBar from '../NavBar_/NavBar';
import ItemCart from '../../components/ItemCart/ItemCart.js';




function Cart() {

    return (
      <div className='Cart'>
        <NavBar/>
        <h3>TU CARRITO</h3>
        <ItemCart title="Ramera1" price="90"/>
        
      </div>
  
    );
  }
  export default Cart;
