import './ItemCart.css';
import React,{useState} from 'react';
import trash from '../../assets/delete.png';
import TarmacSL7_AZUL from '../../assets/products/Tarmac SL7 Comp - Rival eTap AXS_AZUL.png'


export default function   ItemCart(props){
  const [stock,setstock] = useState(0)
  const agregarStock = () => {
    setstock( stock + 1)
  }
  return(
    <div className="Item_Cart">
      
      <div className="Item_Image">
      <img className="Item_Image--img" src={TarmacSL7_AZUL} alt=""/>
      </div>
      
      <div>
      <ul>
        <li><h4>Familia</h4><p>{props.title}</p></li>
        <li><h4>Modelo</h4><p>{props.model}</p></li>
        <li><h4>Color</h4><p>{props.color}</p></li>
      </ul>
      </div> 

      <div>
      <ul>
        <li><h4>Talla</h4><p>{props.talla}</p></li>
        <li><h4>Precio</h4><p>{props.price}</p></li>
        <li><h4>Cantidad</h4><p><p>{stock} </p><button onClick={agregarStock}>Comprar</button></p></li>
      </ul>
      </div> 
      <div className="Item_Trash">
      <img className="Item_Trash--img" src={trash} alt=""/>
      </div>     
    </div>
  )

}