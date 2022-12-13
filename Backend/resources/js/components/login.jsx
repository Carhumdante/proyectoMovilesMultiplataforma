import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';

function Login() {
    const [formValue, setformValue] = useState({
        email: '',
        password: '',
    })

    const open = (e) => {
        e.target.removeEventListener(e.type, open);
    }

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const [show, setShow] = useState(false);
    const [errorR, setErrorR] = useState(false);
    const [tkn, setTkn] = useState({});

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault()
        const formData = new FormData()
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        axios.post("http://localhost/lygi.web/public/api/login",
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
                setTkn(response.data)
            }
        }).catch(error => {
            setErrorR(true)
            console.log(error)
        })

        const tknData = new FormData()
        tknData.append("token",tkn.token)
        axios.post("http://localhost/lygi.web/public/api/cookie_set",
            tknData,
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

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={formValue.password} onChange={onChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Alert show={show} variant="success">
                        <Alert.Heading>Congratulations!!!</Alert.Heading>
                        <p>
                            The you'r logged!
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me!
                            </Button>
                        </div>
                    </Alert>
                    <Alert show={errorR} variant="warning">
                        <Alert.Heading>Sorry :C</Alert.Heading>
                        <p>
                            The credential is incorrect!
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setErrorR(false)} variant="outline-success">
                                Try again!
                            </Button>
                        </div>
                    </Alert>
                </Form>
            </Container>
        </>
    );
}
export default Login;
