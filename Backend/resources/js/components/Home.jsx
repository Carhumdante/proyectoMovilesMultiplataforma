import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Card, Carousel } from 'react-bootstrap';

function Home() {
    const [motorcycles, setmotorcycles] = useState([])
    const [productLines, setlines] = useState([])
    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost/lygi.web/public/api/product_motorcycles",
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setmotorcycles(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
        axios.get("http://localhost/lygi.web/public/api/productline_show",
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setlines(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
        axios.get("http://localhost/lygi.web/public/api/product_show",
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setproducts(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="description" content="Salón de Belleza Maycar" />
            <meta name="keywords" content="Maycar, unica, creative, html" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Maycar</title>
            {/* Google Font */}
            <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            {/* Css Styles */}
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/bootstrap.min.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/font-awesome.min.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/elegant-icons.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/jquery-ui.min.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/magnific-popup.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/owl.carousel.min.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/slicknav.min.css" type="text/css" />
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/style.css" type="text/css" />
            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: `url("http://localhost/lygi.web/resources/images/categories/category-1.jpg")` }}>
                                <div className="categories__text">
                                    <h1>Classic Cars</h1>
                                    <p> Whether you are looking for classic muscle cars, dream sports cars or movie-inspired miniatures, you will find great choices in this category. </p>
                                    <a href="./shop.html">Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url("http://localhost/lygi.web/resources/images/categories/category-2.jpg")` }}>
                                        <div className="categories__text">
                                            <h4>Motorcycles</h4>
                                            <a href="./shop.html">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url("http://localhost/lygi.web/resources/images/categories/category-3.jpg")` }}>
                                        <div className="categories__text">
                                            <h4>Planes</h4>
                                            <a href="./shop.html">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url("http://localhost/lygi.web/resources/images/categories/category-4.jpg")` }}>
                                        <div className="categories__text">
                                            <h4>Trains</h4>
                                            <a href="./shop.html">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url("http://localhost/lygi.web/resources/images/categories/category-5.jpg")` }}>
                                        <div className="categories__text">
                                            <h4>Ships</h4>
                                            <a href="./shop.html">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}
            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>The newest</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        {motorcycles.filter((motorcycle => motorcycle.quantityInStock > 5000)).map((motorcycle) =>
                        (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{ backgroundImage: 'url("http://localhost/lygi.web/resources/images/products/' + motorcycle.image_name + '.jpg")' }}>
                                        <div className="label new">Nuevo</div>
                                        <ul className="product__hover">
                                            <li><a href={"http://localhost/lygi.web/resources/images/products/" + motorcycle.image_name + ".jpg"} className="image-popup"><span className="arrow_expand" /></a></li>
                                            <li><a href="#"><span className="icon_bag_alt" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">{motorcycle.productName}</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="product__price">${motorcycle.buyPrice}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Product Section End */}
            {/* Banner Section Begin */}
            <section className="banner set-bg" style={{ backgroundImage: `url("http://localhost/lygi.web/resources/images/banner/banner-1.jpg")` }}>
                <div className="container">
                    <div className="col-xl-7 col-lg-8 m-auto">
                        <Carousel variant="dark" >
                            {productLines.map((productLine) =>
                            (
                                <Carousel.Item>
                                    <div className="banner__item">
                                        <div className="banner__text">
                                            <span></span>
                                            <h1>{productLine.productLine}</h1>
                                            <a href="#">Buy Now!</a>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}
            {/* Trend Section Begin */}
            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Trends</h4>
                                </div>
                                {products.filter((product => product.quantityInStock < 150)).map((product) =>
                                (
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src={"http://localhost/lygi.web/resources/images/products/" + product.image_name + ".jpg"} alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>{product.productName}</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ {product.buyPrice}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Best sellers</h4>
                                </div>
                                {products.filter((product => product.quantityInStock < 10000 && product.quantityInStock > 9600)).map((product) =>
                                (
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src={"http://localhost/lygi.web/resources/images/products/" + product.image_name + ".jpg"} alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>{product.productName}</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ {product.buyPrice}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>The cuttiest</h4>
                                </div>
                                {products.filter((product => product.quantityInStock > 150 && product.quantityInStock < 545)).map((product) =>
                                (
                                    <div className="trend__item">
                                        <div className="trend__item__pic">
                                            <img src={"http://localhost/lygi.web/resources/images/products/" + product.image_name + ".jpg"} alt="" />
                                        </div>
                                        <div className="trend__item__text">
                                            <h6>{product.productName}</h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ {product.buyPrice}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trend Section End */}
            {/* Discount Section Begin */}
            <section className="discount">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="discount__pic">
                                <img src="http://localhost/lygi.web/resources/images/discount.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>Discounts</span>
                                    <h2>Winter 2022</h2>
                                    <h5><span>Rebaja</span> 50%</h5>
                                </div>
                                <div className="discount__countdown" id="countdown-time">
                                    <div className="countdown__item">
                                        <span>22</span>
                                        <p>Días</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>18</span>
                                        <p>Horas</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>46</span>
                                        <p>Minutos</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>05</span>
                                        <p>Segundos</p>
                                    </div>
                                </div>
                                <a href="#">¡Compra ahora!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discount Section End */}
            {/* Services Section Begin */}
            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car" />
                                <h6>Free Shipping</h6>
                                <p>For all orders over $200</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money" />
                                <h6>Warranty reimbursement</h6>
                                <p>*Revise warranty clause*</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support" />
                                <h6>24/7 online support</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones" />
                                <h6>Secure payments</h6>
                                <p>100% secure payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}
            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="./index.html"><img src="img/logo.svg" alt="" /></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                                <div className="footer__payment">
                                    <a href="#"><img src="http://localhost/lygi.web/resources/images/payment/payment-1.png" alt="" /></a>
                                    <a href="#"><img src="http://localhost/lygi.web/resources/images/payment/payment-2.png" alt="" /></a>
                                    <a href="#"><img src="http://localhost/lygi.web/resources/images/payment/payment-3.png" alt="" /></a>
                                    <a href="#"><img src="http://localhost/lygi.web/resources/images/payment/payment-4.png" alt="" /></a>
                                    <a href="#"><img src="http://localhost/lygi.web/resources/images/payment/payment-5.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>Quick links</h6>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Cars</a></li>
                                    <li><a href="#">Vintage</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>Cuenta</h6>
                                <ul>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Orders</a></li>
                                    <li><a href="#">Order Details</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>News</h6>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__social">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-youtube-play" /></a>
                                    <a href="#"><i className="fa fa-instagram" /></a>
                                    <a href="#"><i className="fa fa-pinterest" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
        </>
    );
}

export default Home;

