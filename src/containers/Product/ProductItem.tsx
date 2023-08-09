import React from "react";
import basket from "../../assets/basket.png";
import "./ProductItem.css";
import { useCart } from "../../contexts/CartContext";

interface Props {
  product:{
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
  }
}

function ProductItem(props: Props) {

  const {product} = props;
  const { addCart } = useCart();

  return (
    <div className="product-item" key={product.id}>
      <div className="product-item-image">
        <img src={require('../../assets/' + product.image + '.png')} alt={product.name} />
      </div>
      <div className="product-item-info">
        <h5>{product.name}</h5>
        <h6>{product.price} TL</h6>
        <p>{product.stock > 0 ? (product.stock + ' Adetle Sınırlı') : ("Stok bulunamadı.")}</p>
        <img style={{cursor: "pointer"}} src={basket} alt="Add to cart" onClick={() => addCart(product)}/>
      </div>
    </div>
  );
};

export default ProductItem;
