import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import wallet from "../../assets/wallet-icon.png";
import "./Wallet.css";
import WalletItem from "./WalletItem";
import WalletInfo from "./WalletInfo";

const Wallet = () => {
  var login = true;
  return (
    <>
      {login && (
        <>
          <div className="wallet-area login">
            <Container fluid={false}>
              <Row>
                <Col>
                  <div className="wallet-head">
                    <img src={wallet} alt="Cüzdan" />
                    <h5>Cüzdanım</h5>
                    <p>300.00 TL</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="wallet-body">
            <Container fluid={false}>
              <Row className="w-100 mx-auto">
                <Col lg="8">
                  <h3>Sepetinizdeki Ürünler (3)</h3>
                  <WalletItem />
                </Col>
                <Col lg="4">
                <h3>Bakiye Bilgileri</h3>
                <WalletInfo />
                </Col>
                <Col lg="12" className="mt-4">
                  <h3>Harcamalarınızın Dağılımı</h3>
                  <div className="total-price">
                    <h5>Toplam harcamanız:</h5>
                    <p>320.00 TL</p>
                  </div>
                </Col>
                <Col lg="12">
                  <div className="go-to-basket-button w-100">
                    <Button>Sepeti Onayla</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Wallet;
