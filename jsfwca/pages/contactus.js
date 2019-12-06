import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../components/layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "../styles.scss";

const phoneVal = /\d{3}(\s?|-?|\.?)\d{3}(\s?|-?|\.?)\d{4}/g;

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    firstname: yup
        .string()
        .required("First name is required"),
    lastname: yup
        .string()
        .required("Last name is required"),
    phone: yup
        .string().matches(phoneVal, 'Phone number is not valid, use XXX XXX XXXX, XXX-XXX-XXXX or XXX.XXX.XXXX'),
    textarea: yup
        .string().required('Message is required')
});

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit(data) {
        alert("success");
    }

    return (
        <Layout>
            <Form className="contactform" onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstname" placeholder="Enter your first name" ref={register} />
                        {errors.firstname && <p>{errors.firstname.message}</p>}
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastname" placeholder="Enter your last name" ref={register} />
                        {errors.lastname && <p>{errors.lastname.message}</p>}
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" placeholder="Enter your email" ref={register} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="phone" placeholder="Enter your phonenumber" ref={register} />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="textarea" rows="3" placeholder="Enter your message" ref={register}/>
                    {errors.textarea && <p>{errors.textarea.message}</p>}
                </Form.Group>
                <Button className="button--color" type="submit">Submit</Button>
            </Form>
        </Layout>
    );
}