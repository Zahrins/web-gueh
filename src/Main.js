import React from "react";
import Image from 'react-bootstrap/Image';
import MainNavbar from "./components/navbar";
import MainSidenav from "./components/sidenav";
import Carousel from 'react-bootstrap/Carousel';
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Product from "./pages/product";
import Stocks from "./pages/stocks";
import Promo from "./pages/promo";
import Report from "./pages/report";

import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const location = useLocation();

  return (
    <div className="App">
      <header id="header" className="header-css">
        <MainNavbar />
      </header>
      
      {location.pathname === "/main" && (
        <Carousel style={{ marginLeft: '90px' }} className="dashboard">
        <Carousel.Item className="carousel-custom">
        <Image src={require('./images/gif3.gif')} className="image-carousel" fluid />
          <Carousel.Caption className="carousel-caption">
            <h3>manage your marketplace</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src={require('./images/gif.gif')} className="image-carousel" fluid />
          <Carousel.Caption>
            <h3>manage your product</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={require('./images/gif1.gif')} className="image-carousel" fluid />
          <Carousel.Caption>
            <h3>manage your employee</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      )}
      
      <main>
        <MainSidenav />
        <div className="content">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/report-sales" element={<Report />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default Main;
