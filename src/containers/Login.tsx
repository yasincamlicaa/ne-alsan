import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, FormGroup, Button } from "react-bootstrap";
import loginimg from "../assets/login-image.png";
import logo from "../assets/ne-alsam.png";
import "./Login.css";
import { auth, signInWithEmailAndPassword } from "../firebase"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("user", JSON.stringify(user));
      navigate('/home');

    } catch (error) {
    }
  };

  const userDataString = localStorage.getItem('user');
  const userData = JSON.parse(userDataString ?? "[]");

  const [user, setUser] = useState(userData?.email);

  useEffect(() => {
    if(userData.email) {
      setUser(user);
      navigate('/home');
    }
  }, [userData])


  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col lg="7">
            <div className="login-page-image">
              <img src={loginimg} alt="Login" />
            </div>
          </Col>
          <Col lg="5">
            <div className="login-page-form">
              <h4>En uygun fiyatlara ulaşmak için giriş yapın!</h4>
              <form onSubmit={handleLogin}>
                <FormGroup className="d-flex flex-column">
                  <label htmlFor="email">E-mailiniz</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="d-flex flex-column">
                  <label htmlFor="password">Şifreniz</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="login-page-footer">
        <Container>
          <Row>
            <Col>
              <div className="login-page-bottom">
                <img src={logo} alt="logo" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit malesuada dapibus ut pulvinar neque arcu, commodo.
                  Pharetra nisi egestas nisi fermentum. Sollicitudin egestas
                  senectus pellentesque enim mauris vel odio commodo.
                  Pellentesque orci vestibulum sed in molestie consequat.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
