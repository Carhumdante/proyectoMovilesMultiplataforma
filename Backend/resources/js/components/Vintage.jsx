import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Vintage(){
    const [vintages, setvintages] = useState([])
    useEffect(() => {
        const formData = new FormData()
        axios.get("http://localhost/lygi.web/public/api/product_vintages",
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
                setvintages(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Row>
                {vintages.map((vintage) =>
                (
                    <Col>
                        <Card style={{ width: '18rem' }} key={vintage.productCode}>
                            <Card.Img variant="top" src={"http://localhost/lygi.web/resources/images/products/" + vintage.image_name + ".jpg"} />
                            <Card.Body>
                                <Card.Title>{vintage.productCode}  {vintage.productName}</Card.Title>
                                <Card.Text>
                                    {vintage.productDescription}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Link to={`${vintage.productCode}`} className="d-grid gap-2">
                                        <Button variant='primary' type="submit" value={vintage.productCode} size='lg'>Buy now!</Button>
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

export default Vintage
