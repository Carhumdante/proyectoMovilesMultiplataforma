import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';

function Register() {
    const [formValue, setformValue] = useState({
        email: '',
        password: '',
        name: ''
    })

    const open = (e) => {
        e.target.removeEventListener(e.type, open);
    }

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault()
        const formData = new FormData()
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        formData.append("name", formValue.name)
        axios.post("http://localhost/lygi.web/public/api/register",
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

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="name" value={formValue.name} onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={formValue.password} onChange={onChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <Alert show={show} variant="success">
                        <Alert.Heading>Congratulations!!!</Alert.Heading>
                        <p>
                        The user has been registered!
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me!
                            </Button>
                        </div>
                    </Alert>
                </Form>
            </Container>

        </>
    );
}

export default Register;
