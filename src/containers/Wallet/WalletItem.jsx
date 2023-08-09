import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../../assets/product-4.png";
import "./WalletItem.css";

const WalletItem = () => {
  return (
    <div className="wallet-item">
      <Container fluid={true} className="px-2">
        <Row className="w-100 mx-auto">
          <Col lg="7">
            <div className="wallet-item-info">
              <div className="wallet-item-info-image">
                <img src={img} alt="Ürün Fotoğrafı" />
              </div>
              <div className="wallet-item-info-text">
                <h5>Kulaküstü Kulaklık</h5>
                <p>1245 Adetle Sınırlı</p>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="wallet-item-price">
              <div className="wallet-item-price-count">
                <div className="count-bar">
                  <Button>-</Button>
                  <h4>1</h4>
                  <Button>+</Button>
                </div>
              </div>
              <div className="wallet-item-price-text">
                <h4>350 TL</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WalletItem;
