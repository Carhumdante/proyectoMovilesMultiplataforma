import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Ships(){
    const [ships, setships] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_ships",
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
                setships(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Row>
                {ships.map((ship) =>
                (
                    <Col>
                        <Card style={{ width: '18rem' }} key={ship.productCode}>
                            <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + ship.image_name + ".jpg"} />
                            <Card.Body>
                                <Card.Title>{ship.productCode}  {ship.productName}</Card.Title>
                                <Card.Text>
                                    {ship.productDescription}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link to={`${ship.productCode}`} className="d-grid gap-2">
                                        <Button variant='primary' type="submit" value={ship.productCode} size='lg'>Buy now!</Button>
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

export default Ships
