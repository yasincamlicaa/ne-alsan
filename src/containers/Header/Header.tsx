import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import search from "../../assets/search-icon.png";
import vector from "../../assets/vector.png";
import "./Header.css";

const Header: React.FC = () => {

  const userDataString = localStorage.getItem('user');
  const userData = JSON.parse(userDataString ?? "[]");

  const [user, setUser] = useState(userData?.email);

  useEffect(() => {
    if(userData.email) {
      setUser(user);
    }
  }, [userData])

  
  return (
    <>
      {user ? (
        <div className="header-area login">
          <Container fluid={true}>
            <div className="search-category-area">
              <div className="header-input">
                <input type="text" placeholder="Ne alsan?" />
                <img src={search} alt="search" />
              </div>
              <div className="header-input-buttons">
                <Button>Teknoloji</Button>
                <Button>Giyim</Button>
                <Button>Kozmetik</Button>
                <Button>Mobilya</Button>
                <Button>Aksesuar</Button>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div className="header-area">
          <Container>
            <Row>
              <div className="col-md-6">
                <div className="header-left">
                  <h4>En uygun fiyatlara ulaşmak için giriş yapın!</h4>
                  <div className="header-input">
                    <input type="text" placeholder="Ne alsan?" />
                    <img src={search} alt="search" />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="col-md-6">
                <div className="header-image">
                  <img src={vector} alt="Vector" />
                </div>
              </div>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
