import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchMock from "fetch-mock";
import { BASE_URL } from "../constants/API";
import Link from 'next/link'
import Layout from "../components/layout/Layout";




export default function({ url: { query: { id } } }) {
const idLink = "https://api.magicthegathering.io/v1/cards/" + id;


return (
    <Layout>
        <p>Welcome to About! { idLink }</p>
    </Layout>
);
}
