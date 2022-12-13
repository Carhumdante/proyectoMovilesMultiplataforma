import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Trucks(){
    const [trucks, settrucks] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_trucks",
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
                settrucks(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Row>
                {trucks.map((truck) =>
                (
                    <Col>
                        <Card style={{ width: '18rem' }} key={truck.productCode}>
                            <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + truck.image_name + ".jpg"} />
                            <Card.Body>
                                <Card.Title>{truck.productCode}  {truck.productName}</Card.Title>
                                <Card.Text>
                                    {truck.productDescription}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link to={`${truck.productCode}`} className="d-grid gap-2">
                                        <Button variant='primary' type="submit" value={truck.productCode} size='lg'>Buy now!</Button>
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

export default Trucks
