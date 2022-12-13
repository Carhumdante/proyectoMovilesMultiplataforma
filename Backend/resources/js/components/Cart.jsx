import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Cart() {
    const [idcart, setID] = useState()
    const [carts, setcart] = useState([])

    var subtotal = 0;

    useEffect(() => {
        axios.post("http://localhost/lygi.web/public/api/cookie_get",
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                setID(response.data)
            }
        }).catch(error => {
            console.log(error)
        })

        const formData = new FormData()
        formData.append("id", idcart)
        axios.post("http://localhost/lygi.web/public/api/cart_get",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setcart(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [idcart])

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
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((cart) =>
                                        (

                                            <tr>
                                                <td className="cart__cart__item">
                                                    <div className="cart__cart__item__title">
                                                        <h6>{cart.productCode}</h6>
                                                    </div>
                                                </td>
                                                <td className="cart__price">{cart.priceEach}</td>
                                                <h5 hidden>{subtotal = subtotal + parseFloat(cart.priceEach)}</h5>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <a href="/lygi.web/public/">Continue Shopping</a>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ {subtotal.toFixed(2)}</span></li>
                                    <li>Total <span>$ {subtotal.toFixed(2)}</span></li>
                                    <Button type="submit"><Nav.Link as={Link} to="/lygi.web/public/checkout">Checkout</Nav.Link></Button>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
