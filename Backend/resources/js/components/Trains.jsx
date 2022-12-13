import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Trains() {
    const [trains, settrains] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_trains",
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
                //setEmail(response.data)
                settrains(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <link rel="stylesheet" href="http://localhost/lygi.web/resources/css/style.css" type="text/css" />
            <Container>
                <Row>
                    {trains.map((train) =>
                    (
                        <Col>
                            <Card style={{ width: '18rem' }} key={train.productCode}>
                                <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + train.image_name + ".jpg"} />
                                <Card.Body>
                                    <Card.Title>{train.productCode}  {train.productName}</Card.Title>
                                    <Card.Text>
                                        {train.productDescription}
                                    </Card.Text>
                                    <div className="product__price">$ {train.buyPrice}</div>
                                    <br></br>
                                    <div className="d-grid gap-2">
                                        <Link to={`${train.productCode}`} className="d-grid gap-2">
                                            <Button variant='primary' type="submit" value={train.productCode} size='lg'>Buy now!</Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Trains
