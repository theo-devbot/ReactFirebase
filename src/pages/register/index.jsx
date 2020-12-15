import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useFirebaseApp } from "reactfire";
import logo from '../../assets/img/logo.jpg'
import { Form, Container, Button } from 'react-bootstrap'
import './index.css'

const Register = () => {
    const history = useHistory();
    const firebase = useFirebaseApp();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const register = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then((result) => {
                localStorage.setItem("token", result.user.refreshToken);
                alert("Usuário cadastrado.")
                console.log(result)

                history.push('/tarefas')
            })
    };

    return (
        <div>
            <Container className="form-height">
                <Form className="form-signin" onSubmit={(event) => register(event)}>
                    <div className="text-center">
                        <img src={logo} alt="Nyous" style={{ width: "64px" }} />
                    </div>
                    <br />
                    <small>Informe os dados Abaixo</small>
                    <hr />

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Informe o email desejado"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            placeholder="Informe a senha desejada"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
          </Button>

                    <br />
                    <br />
                    <a href="/login" style={{ marginTop: "30px" }}>
                        Já tenho conta!
          </a>
                </Form>
            </Container>
        </div>
    )
}

export default Register;