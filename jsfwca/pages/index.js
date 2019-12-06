import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LayoutLogout from "../components/layout/LayoutLogout";
import Router from 'next/router'
import css from "../styles.scss";


const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be 3 characters minimum")
        .required("Username is required"),
    password: yup
        .string().required('Password is required')
        .min(8, "Password must be 8 characters minimum"),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default function Index() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit(data) {
        console.log("data", data);
        localStorage.setItem('userNameStorage', data.username);
        localStorage.setItem('userPassStorage', data.password);
        console.log('username', localStorage.getItem('userNameStorage'));
        console.log('password', localStorage.getItem('userPassStorage'));
        Router.push('/login')
    }
    return (
        <LayoutLogout>
            <div className="formcontainer">
                <Form className="formcontainer__form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" placeholder="Enter your desired username" ref={register} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="Enter a password, 8 characters minimum" type="password" ref={register} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="passwordConfirm" placeholder="Confirm your password" type="password" ref={register} />
                        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
                    </Form.Group>
                    <div className="formcontainer__formbutton">
                        <Button className="button--color" type="submit">Register</Button>
                    </div>
                </Form>
            </div>
        </LayoutLogout>
    );
}