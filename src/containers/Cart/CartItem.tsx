import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../../assets/product-4.png";
import "./CartItem.css";
import { formatNumber } from "../../utils/numberUtils";

interface Props {
  cartItem:{
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
  }
}

function CartItem(props: Props) {

  const {cartItem} = props;
  
  return (
    <Container fluid={false}>
      <div className="cart-item">
        <Container fluid={false}>
          <Row className="w-100 mx-auto">
            <Col lg="8">
              <div className="cart-item-info">
                <div className="cart-item-info-image">
                  <img src={require('../../assets/' + cartItem?.image + '.png')} alt={cartItem?.name} />
                </div>
                <div className="cart-item-info-text">
                  <h5>{cartItem?.name}</h5>
                  <p>{cartItem?.stock} Adetle Sınırlı</p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="cart-item-price">
                <div className="cart-item-price-count">
                  <div className="count-bar">
                    <Button>-</Button>
                    <h4>1</h4>
                    <Button>+</Button>
                  </div>
                </div>
                <div className="cart-item-price-text">
                  <h4>{formatNumber(cartItem?.price)} TL</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default CartItem;
