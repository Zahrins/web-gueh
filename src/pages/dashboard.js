import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { VscGraph } from "react-icons/vsc";
import { LuCircleDollarSign } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import { RiHandCoinLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { MdDisabledByDefault } from "react-icons/md";

export default function Dashboard () {
    return(
        <div style={{ marginLeft: '90px' }} className="dashboard">
            <h4>Dashboard</h4>
            <Container className="container1">
            <Row>
                <Col className="border-box">
                    <div className="flex-row">
                        <VscGraph />
                        <p>earnings</p>
                    </div>
                    <h6>$350.4</h6>
                </Col>
                <Col className="border-box">
                    <div className="flex-row">
                        <LuCircleDollarSign />
                        <p>spend this month</p>
                    </div>
                    <h6>$642.6</h6>
                </Col>
                    <Col className="border-box">
                        <div className="flex-row">
                            <SlBasket />
                            <p>sales</p>
                        </div>
                    <h6>$574.75</h6>
                </Col>
                <Col className="border-box">
                    <div className="flex-row">
                        <IoPeopleOutline />
                        <p>today due</p>
                    </div>
                    <h6>$376.4</h6>
                </Col>
                <Col className="border-box">
                    <div className="flex-row">
                        <RiHandCoinLine />
                        <p>expense amount</p>
                        </div>
                    <h6>$278.4</h6>
                </Col>
            </Row>
            </Container>
            <Container>
            <Row>
                <Col className="border-boxs">
                <div className="grafik">
                    <Col className="row-container">
                    <div className="border-col">
                        <SlCalender />
                        <p>this month</p>
                    </div>
                    <div className="spent">
                        <h5>$37.5k</h5>
                        <p>total spent</p>
                        <div className="check">
                            <h6>On track</h6>
                            <FaRegCheckCircle />
                        </div>
                    </div>
                </Col>
                <Col>
                <Image src={require('../images/grafik_penjualan.jpg')} style={{ width: "500px", height: "200px" }} fluid />
                </Col>
                </div>
                </Col>
                <Col className="border-boxs">
                <Col className="wight-text">
                    <p className="text-style">Weekly Revenue</p>
                    <Image src={require('../images/graph.jpg')} style={{ width: "500px", height: "200px" }} fluid />
                </Col>
                </Col>
            </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={5} className="border-boxs">
                        <p className="text-style">Check Table</p>
                        <Col className="colom-col">
                        <div>
                            <p>NAME</p>
                            <a className="check-box">
                                <label><input type="checkbox" />marketplace</label>
                                <label><input type="checkbox" />weekly update</label>
                                <label><input type="checkbox" />promo</label>
                                <label><input type="checkbox" />product</label>
                                <label><input type="checkbox" />market</label>
                            </a>
                        </div>
                        <div>
                            <p>PROGRESS</p>
                            <a>17.5%</a>
                            <a>39.5%</a>
                            <a>36.7%</a>
                            <a>59.9%</a>
                            <a>35.8%</a>
                        </div>
                        <div>
                            <p>QUANTITY</p>
                            <a>368</a>
                            <a>115</a>
                            <a>794</a>
                            <a>473</a>
                            <a>570</a>
                        </div>
                        <div>
                            <p>DATE</p>
                            <a>23 jan 2021</a>
                            <a>23 jan 2021</a>
                            <a>23 jan 2021</a>
                            <a>23 jan 2021</a>
                            <a>23 jan 2021</a>
                        </div>
                        </Col>
                    </Col>
                    <Col className="border-boxs">
                    <p className="text-style">Dily Traffic</p>
                        <h5>2.479<p className="text-small">visitors</p></h5>
                        <Image src={require('../images/graph-weekly.jpg')} style={{ width: "800px", height: "100px" }} fluid />
                    </Col>
                    <Col className="border-boxs">
                    <p className="text-style">Your Pie Chart</p>
                        <Image src={require('../images/pie-chart.jpg')} style={{ width: "700px", height: "200px" }} fluid />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={5} className="border-boxs">
                        <p className="text-style">Complex Table</p>
                        <Col className="colom-col">
                        <div>
                            <p>NAME</p>
                            <a>marketplace</a>
                            <a>weekly update</a>
                            <a>promo</a>
                            <a>product</a>
                            <a>market</a>
                        </div>
                        <div>
                            <p>STATUS</p>
                            <div className="status">
                                <FaRegCheckCircle />
                                <p>approved</p>
                            </div><div className="status">
                                <MdDisabledByDefault />
                                <p>disable</p>
                            </div>
                            <div className="status">
                                <MdErrorOutline />
                                <p>error</p>
                            </div>
                            <div className="status">
                                <FaRegCheckCircle />
                                <p>approved</p>
                            </div>
                            <div className="status">
                                <FaRegCheckCircle />
                                <p>approved</p>
                            </div>
                        </div>
                        <div>
                            <p>DATE</p>
                                <a>23 jan 2021</a>
                                <a>23 jan 2021</a>
                                <a>23 jan 2021</a>
                                <a>23 jan 2021</a>
                                <a>23 jan 2021</a>
                        </div>
                        <div>
                            <p>PROGRESS</p>
                            <a className="check-tab">
                                <label><input type="range" /></label>
                                <label><input type="range" /></label>
                                <label><input type="range" /></label>
                                <label><input type="range" /></label>
                                <label><input type="range" /></label>
                            </a>
                        </div>
                        </Col>
                    </Col>
                    <Col className="border-boxs">
                    <p className="text-style">List</p>
                        <a className="check-tab">
                                <label><input type="checkbox" />marketplace</label>
                                <label><input type="checkbox" />weekly update</label>
                                <label><input type="checkbox" />promo</label>
                                <label><input type="checkbox" />product</label>
                                <label><input type="checkbox" />market</label>
                        </a>
                    </Col>
                    <Col className="border-boxs">
                    <div className='google-calendar'>
                    <p className="text-style">Calender</p>
                        <iframe 
                            src="https://calendar.google.com/calendar/embed?src=youremail%40gmail.com&ctz=Asia%2FJakarta" 
                            style={{ border: 0 }} 
                            width="300" 
                            height="200" 
                            frameBorder="0" 
                            scrolling="no"
                            title="Google Calendar"
                        ></iframe>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}