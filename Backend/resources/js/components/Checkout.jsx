import React, { useState, useEffect } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';

function Checkout() {

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    const [idcart, setID] = useState();
    const [carts, setcart] = useState([]);
    const [lastOrd, setLastOrd] = useState();

    const [formValue, setformValue] = useState({
        FirstName: '',
        LastName: '',
        Country: '',
        Address: '',
        TownCity: '',
        CountryState: '',
        PostcodeZip: '',
        Phone: '',
        Email: '',
    })

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        //Creamos el nuevo Customer
        if (e && e.preventDefault()) e.preventDefault()
        const formData = new FormData()
        formData.append("customerNumber", idcart)
        formData.append("customerName", formValue.FirstName)
        formData.append("contactLastName", formValue.LastName)
        formData.append("phone", formValue.Phone)
        formData.append("addressLine1", formValue.Address)
        formData.append("city", formValue.TownCity)
        formData.append("state", formValue.CountryState)
        formData.append("postalCode", formValue.PostcodeZip)
        formData.append("country", formValue.Country)
        formData.append("salesRepEmployeeNumber", 1002)
        formData.append("creditLimit", 999999)
        formData.append("email", formValue.Email)
        axios.post("http://localhost/lygi.web/public/api/customers_create",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
            }
        }).catch(error => {
            console.log(error)
        })



        //Creamos la nueva Orden
        const orderData = new FormData()
        orderData.append("orderNumber", lastOrd + 1)
        orderData.append("customerNumber", idcart)
        axios.post("http://localhost/lygi.web/public/api/order_create",
            orderData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setShow(true)
            }
        }).catch(error => {
            console.log(error)
        })

        var cartData = new FormData()
        carts.map(cart => (
            axios.post("http://localhost/lygi.web/public/api/orderdetail_create",
                cartData = {
                    "orderNumber": lastOrd + 1,
                    "productCode": cart.productCode,
                    "quantityOrdered": 1,
                    "priceEach": cart.priceEach
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json'
                    }
                }
            ).then(response => {
                if (response.status == 200) {
                    setLastOrd(response.data)
                }
            }).catch(error => {
                console.log(error)
            })
        ));

        //Delete product
        axios.post("http://localhost/lygi.web/public/api/product_delete",
            carts,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
            }
        }).catch(error => {
            console.log(error)
        })

        //DeleteCart
        const deleteCart = new FormData()
        deleteCart.append("id", idcart)
        axios.post("http://localhost/lygi.web/public/api/cart_delete",
            deleteCart,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                console.log(response.data)
            }
        }).catch(error => {
            console.log(error)
        })

    }

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

        //Obtenemos el ultimo orderNumber para crear el proximo
        axios.get("http://localhost/lygi.web/public/api/order_last",
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.status == 200) {
                setLastOrd(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [idcart])



    return (
        <>
            {carts.map(cart => (
                <Toast show={show} onClose={toggleShow}>
                    <Toast.Header>
                        <strong className="me-auto">Orded Added!!</strong>
                        <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body> OrderNumber: {lastOrd + 1} productCode: {cart.productCode}</Toast.Body>
                </Toast>))
            }
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
            <section className="checkout spad">
                <div className="container">
                    <form className="checkout__form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-8">
                                <h5>Billing detail</h5>
                                <Form>
                                    <div className="row">
                                        <div >
                                            <div className="checkout__form__input">
                                                <p>First Name <span>*</span></p>
                                                <input name="FirstName" type="text" onChange={onChange} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>Last Name <span>*</span></p>
                                                <input name="LastName" type="text" onChange={onChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="checkout__form__input">
                                                <p>Country <span>*</span></p>
                                                <input name="Country" type="text" onChange={onChange} />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Address <span>*</span></p>
                                                <input name="Address" type="text" placeholder="Street Address" onChange={onChange} />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Town/City <span>*</span></p>
                                                <input name="TownCity" type="text" onChange={onChange} />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Country/State <span>*</span></p>
                                                <input name="CountryState" type="text" onChange={onChange} />
                                            </div>
                                            <div className="checkout__form__input">
                                                <p>Postcode/Zip <span>*</span></p>
                                                <input name="PostcodeZip" type="text" onChange={onChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>Phone <span>*</span></p>
                                                <input name="Phone" type="text" onChange={onChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="checkout__form__input">
                                                <p>Email <span>*</span></p>
                                                <input name="Email" type="text" onChange={onChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                        </div>
                                    </div>
                                </Form>

                            </div>
                            <div className="col-lg-4">
                                <div className="checkout__order">
                                    <h5>Your order</h5>
                                    <div className="checkout__order__product">
                                        <ul>
                                            <li>
                                                <span className="top__text">Product</span>
                                                <span className="top__text__right">Total</span>
                                            </li>
                                            {carts.map((cart) =>
                                            (
                                                <>
                                                    <li>{cart.productCode} <span>$ {cart.priceEach}</span></li>
                                                    <h5 hidden>{subtotal = subtotal + parseFloat(cart.priceEach)}</h5>
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="checkout__order__total">
                                        <ul>
                                            <li>Subtotal <span>$ {subtotal.toFixed(2)}</span></li>
                                            <li>Total <span>$ {subtotal.toFixed(2)}</span></li>
                                        </ul>
                                    </div>

                                    <Button type="submit" >PLACE ORDER</Button>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Checkout;
