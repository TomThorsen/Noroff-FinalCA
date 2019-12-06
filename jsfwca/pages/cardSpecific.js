import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../constants/API";
import Link from 'next/link'
import Layout from "../components/layout/Layout";
import CardDetails from "../components/cards/list/CardDetails";

export default function({ url: { query: { id } } }) {
    const apiURL = 'https://api.magicthegathering.io/v1/cards/';
    const idLink = apiURL + id;

    return (
        <Layout>
            <CardDetails id={idLink}/>
        </Layout>
    );
}
