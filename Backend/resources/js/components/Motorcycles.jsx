import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Motorcycles(){
    const [motorcycles, setmotorcycles] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_motorcycles",
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
                setmotorcycles(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Row>
                {motorcycles.map((motorcycle) =>
                (
                    <Col>
                        <Card style={{ width: '18rem' }} key={motorcycle.productCode}>
                            <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + motorcycle.image_name + ".jpg"} />
                            <Card.Body>
                                <Card.Title>{motorcycle.productCode}  {motorcycle.productName}</Card.Title>
                                <Card.Text>
                                    {motorcycle.productDescription}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link to={`${motorcycle.productCode}`} className="d-grid gap-2">
                                        <Button variant='primary' type="submit" value={motorcycle.productCode} size='lg'>Buy now!</Button>
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

export default Motorcycles
