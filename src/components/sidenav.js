import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";
import { MdSell } from "react-icons/md";
import { FaList } from "react-icons/fa";

import Image from 'react-bootstrap/Image';

export default function MainPageSidenav() {
    return (
        <div className="sidebar">
            <div className="dots">
                <Image src={require('../images/icon e-commerce.png')} style={{ width: "60px", height: "60px" }} fluid />
            </div>
            <ul>
                <li>
                    <Link to="dashboard">
                        <IoHome />
                        <p>Dashboard</p>
                    </Link>
                </li>
            </ul>
            <ul>
                <span>Features</span>
                <li className="features">
                    <Link to="product">
                        <FaShoppingBag />
                        <p>Product</p>
                    </Link>
                </li>
                <li>
                    <Link to="stocks">
                        <PiShoppingBagOpen />
                        <p>Stocks</p>
                    </Link>
                </li>
                <li className="likes">
                    <Link to="promo">
                        <MdSell />
                        <p>Promo</p>
                    </Link>
                </li>
                <li className="likes">
                    <Link to="report-sales">
                        <FaList />
                        <p>Report Sales</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
