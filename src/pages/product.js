import Image from 'react-bootstrap/Image';

import { IoIosAddCircleOutline } from "react-icons/io";

export default function Product () {
    return(
        <div style={{ marginLeft: '90px' }} className="dashboard">
            <h4>Product</h4>
            <div class="container">

                <div class="product-grid">
                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci1.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Hermes</p>
                            <p class="product-grid__price">buy price: $38.470</p>
                            <p class="product-grid__price">sell price: $38.470</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci2.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Louis Vuitton</p>
                            <p class="product-grid__price">buy price: $40.00</p>
                            <p class="product-grid__price">sell price: $40.00</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci4.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Prada</p>
                            <p class="product-grid__price">buy price: $37.90</p>
                            <p class="product-grid__price">sell price: $37.90</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci3.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Gucci</p>
                            <p class="product-grid__price">buy price: $43.70</p>
                            <p class="product-grid__price">sell price: $43.70</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci2.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Louis Vuitton</p>
                            <p class="product-grid__price">buy price: $40.00</p>
                            <p class="product-grid__price">sell price: $40.00</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci1.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Hermes</p>
                            <p class="product-grid__price">buy price: $38.470</p>
                            <p class="product-grid__price">sell price: $38.470</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci4.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Prada</p>
                            <p class="product-grid__price">buy price: $37.90</p>
                            <p class="product-grid__price">sell price: $37.90</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div class="product-grid__imagen">
                            <Image src={require('../images/bag_gucci3.jpg')} style={{ width: "200px", height: "200px" }} fluid />
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Gucci</p>
                            <p class="product-grid__price">buy price: $43.70</p>
                            <p class="product-grid__price">sell price: $43.70</p>
                        </div>
                    </div>

                    <div class="product-grid__item">
                        <div>
                        <button class="button-product">
                            <IoIosAddCircleOutline />
                        </button>
                        </div>
                        <div class="product-grid__info">
                            <p class="product-grid__name">Add product</p>
                        </div>
                    </div>

                </div>
                </div>
        </div>
    )
}