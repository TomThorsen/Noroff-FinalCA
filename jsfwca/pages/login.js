import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LayoutLogout from "../components/layout/LayoutLogout";
import Router from 'next/router'
import css from "../styles.scss";



const schema = yup.object().shape({
    username: yup
        .string().test('match',
            'Incorrect Username',
            function(username) {
                return username === localStorage.getItem('userNameStorage');
            }),
    password: yup
        .string().test('match',
            'Incorrect Password',
            function(password) {
                return password === localStorage.getItem('userPassStorage');
            }),
});

export default function Index() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit(data) {
        Router.push('/home')
        let loggedIn = true;
    }
    return (
        <LayoutLogout>
            <div className="formcontainer">
                    <Form className="formcontainer__form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" placeholder="Enter your username" ref={register} />
                            {errors.username && <p>{errors.username.message}</p>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" placeholder="Enter your password" type="password" ref={register} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </Form.Group>
                        <div className="formcontainer__formbutton">
                            <Button className="button--color" type="submit">Login</Button>
                        </div>
                    </Form>
            </div>
        </LayoutLogout>
    );
}