import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cars() {
    const [cars, setcars] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_cars",
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
                setcars(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Row>
                {cars.map((car) =>
                (
                    <Col>
                        <Card style={{ width: '18rem' }} key={car.productCode}>
                            <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + car.image_name + ".jpg"} />
                            <Card.Body>
                                <Card.Title>{car.productCode}  {car.productName}</Card.Title>
                                <Card.Text>
                                    {car.productDescription}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link to={car.productCode} className="d-grid gap-2">
                                        <Button variant='primary' type="submit" value={car.productCode} size='lg'>Buy now!</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Cars
