import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../components/layout/Layout";
import Router from 'next/router'

const userNameStorage = localStorage.getItem('userNameStorage');
const userPassStorage = localStorage.getItem('userPassStorage');

console.log('Username', userNameStorage);
console.log('Password', userPassStorage);

const schema = yup.object().shape({
    username: yup
        .string().test('match',
            'Incorrect Username',
            function(username) {
                return username === userNameStorage;
            }),
    password: yup
        .string().test('match',
            'Incorrect Password',
            function(password) {
                return password === userPassStorage;
            }),
});

export default function Index() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit(data) {
        Router.push('/about')
    }
    return (
        <Layout>
            <Form onSubmit={handleSubmit(onSubmit)}>
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

                <Button type="submit">Login</Button>
            </Form>
        </Layout>
    );
}