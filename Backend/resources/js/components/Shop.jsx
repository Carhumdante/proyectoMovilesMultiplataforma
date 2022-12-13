import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Shop() {
    const [shop, setShop] = useState([])
    const productCode = useParams()
    const [show, setShow] = useState(false);

    const open = (e) => {
        e.target.removeEventListener(e.type, open);
    }

    const [idcart, setID] = useState()

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

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault()
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
        formData.append("productCode", shop.productCode)
        formData.append("priceEach", shop.buyPrice)
        axios.post("http://localhost/lygi.web/public/api/cart_create",
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
                setShow(true)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        const formData = new FormData()
        formData.append("productCode", productCode['product'])
        axios.post("http://localhost/lygi.web/public/api/product_index",
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
                setShop(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <Container>
                <Col>
                    <Card className="text-center">
                        <Card.Header>{shop.productCode}</Card.Header>
                        <Card.Img
                            variant="top"
                            src={"http://localhost/lygi.web/resources/images/products/" + shop.image_name + ".jpg"}
                            height='250'
                        />
                        <Card.Body>
                            <Card.Title>{shop.productName}</Card.Title>
                            <Card.Text>
                                {shop.productDescription}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Stock: {shop.quantityInStock}</Card.Footer>
                        <Form onSubmit={handleSubmit}>
                            <Button variant="primary" type="submit">
                                Add to your cart
                            </Button>
                        </Form>
                        <Alert show={show} variant="success">
                            <Alert.Heading>Congratulations!!!</Alert.Heading>
                            <p>
                                Added to cart
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    Close me y'all!
                                </Button>
                            </div>
                        </Alert>
                    </Card>
                </Col>
            </Container >
        </>
    )
}

export default Shop
