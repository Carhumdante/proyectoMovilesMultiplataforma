import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';

function Example() {
    const [formValue, setformValue] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    const open = (e) =>{
        e.target.removeEventListener(e.type, open);
    }
    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault()
        const formData = new FormData()
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        formData.append("name", formValue.name)
        axios.post("http://localhost/lygi.web/public/api/students_show",
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
                setUsers(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                name="email" value={formValue.email} onChange={onChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name"
                                name="name" value={formValue.name} onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                name="password" value={formValue.password} onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                    {users.map((user) => (
                        <Card style={{ width: '18rem' }} key = {user.id}>
                            <Card.Img variant="top" src="http:\\localhost\topicos\project\resources\assets\images\image.png" />
                            <Card.Body>
                                <Card.Title>{user.id}  {user.name}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>

        </Container>
    );
}

export default Example;

