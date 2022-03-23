import './ItemListContainer.css';
import React,{useState} from 'react'
import producto1 from '../../assets/products/producto1.jpg';


export default function ItemListContainer(props){
  const [stock,setstock] = useState(0)
  const agregarStock = () => {
    setstock( stock + 1)
  }
  return(
    <div className="container-product">
      <div >
       <img className="image-product" src={producto1} alt=""/>
      </div> 
      <h3>{props.title}</h3>
      <p>{props.price} </p>
      <p>{stock} </p>
      <button onClick={agregarStock}>Comprar</button>
    </div>
  )

}