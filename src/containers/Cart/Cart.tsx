import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cartIcon from "../../assets/cart-icon.png";
import "./Cart.css";
import CartItem from "./CartItem";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { formatNumber } from "../../utils/numberUtils";

const Cart: React.FC = () => {
  
  const Cart = useCart();
  const Auth = useAuth();
 
  const [cart, setCart] = useState(Cart?.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const userDataString = localStorage.getItem('user');
  const userData = JSON.parse(userDataString ?? "[]");

  const [balance, setBalance] = useState(userData?.balance);

  useEffect(() => {
    setCart(Cart?.cart);
  }, [Cart?.cart]);

  useEffect(() => {
    let newTotalPrice = 0;
    for (const item of cart) {
      newTotalPrice += item.price;
    }
    setTotalPrice(newTotalPrice);

  }, [cart]);

  return (
    <>
      <div className="cart-area login">
        <Container fluid={false}>
          <Row>
            <Col>
              <div className="cart-head">
                <img src={cartIcon} alt="Sepet" />
                <h5>Sepetim</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="cart-items">
        {cart && cart.map((item) => (
          <CartItem
            cartItem={item}
          />
        ))}
        {
          totalPrice && <h4>Toplam Fiyat: {formatNumber(totalPrice)} TL</h4>
        }
        {
          balance && <h5 className={(balance - totalPrice) < 0 ? "text-danger" : "text-success"}>Cüzdan: {formatNumber(balance - totalPrice)} TL</h5>
        }
      </div>
    </>
  );
};

export default Cart;
