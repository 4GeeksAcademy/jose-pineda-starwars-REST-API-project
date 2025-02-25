import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";
import SingleCharacter from './views/SingleCharacter';
import SinglePlanet from './views/SinglePlanet';

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <Container>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Row>
            <Col>
              <NavbarMenu />
            </Col>
          </Row>

          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single-character/:name" element={<SingleCharacter />} />
                <Route path="/single-planet/:name" element={<SinglePlanet />} />
                <Route path="*" element={<h1>Not found!</h1>} />
              </Routes>
            </Col>
          </Row>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </Container>
  );
};

export default injectContext(Layout);

