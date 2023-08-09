import React,{ useEffect, useState }  from "react";
import logo from "../../assets/ne-alsam.png";
import userIcon from "../../assets/user.png";
import walletIcon from "../../assets/wallet-icon.png";
import cartIcon from "../../assets/cart-icon.png";
import "./Navbar.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { formatNumber } from "../../utils/numberUtils";

const Navbar: React.FC = () => {

  const Auth = useAuth();
  const Cart = useCart();
 
  const [cart, setCart] = useState(Cart?.cart);

  const userDataString = localStorage.getItem('user');
  const userData = JSON.parse(userDataString ?? "[]");

  const [user, setUser] = useState(userData?.email);



  useEffect(() => {
    setCart(Cart?.cart);
  }, [Cart?.cart]);

  useEffect(() => {
    if(userData.email) {
      setUser(user);
    }
  }, [userData]);


  return (
    <div className="navbar-area">
      <Container fluid={true}>
        <Row className="w-100">
          <div className="col-4">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          {userData?.uid ? (
            <div className="col-8 justify-content-center align-items-center">
              <div className="navbar-links-area">
                <div className="navbar-links login">
                  <Link to={"/login"}>
                    <img src={userIcon} alt="user-logo" />
                    <h5>Yasin Çamlıca</h5>
                  </Link>
                </div>
                <div className="navbar-links wallet">
                  <Link to={"/wallet"}>
                    <img src={walletIcon} alt="wallet-logo" />
                    <h5>Cüzdanım</h5>
                    <p>{userData?.balance ? formatNumber(userData?.balance) : 0} TL</p>
                  </Link>
                </div>
                <div className="navbar-links cart">
                  <Link to={"/cart"}>
                    <div className="cart-image">
                      <img src={cartIcon} alt="cart-logo" />
                      <p>{cart?.length}</p>
                    </div>
                    <h5>Sepetim</h5>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-8 justify-content-center align-items-center">
              <div className="navbar-links login">
                <Link to={"/login"}>
                  <img src={userIcon} alt="user-logo" />
                  <h5>Giriş Yap</h5>
                </Link>
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
