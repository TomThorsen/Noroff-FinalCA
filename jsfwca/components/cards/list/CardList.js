import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import fetchMock from "fetch-mock";
import { BASE_URL } from "../../../constants/API";
import Link from 'next/link';
import mockCards from "../../../constants/cards";

export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchMock.mock(BASE_URL, { cards: mockCards });

        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => setCards(json.cards))
            .catch(error => console.error(error));
    }, []);

    return (
        <Row>
            {cards.map(c => (
                <Col sm={6} md={3} key={c.id}>{c.name}
                        <h4>{c.name}</h4>
                        <img src={c.imageUrl}/>
                    {' '}
                    <Link href={{ pathname: '/cardSpecific', query: {id: c.id} }}>
                        <a>View More</a>
                    </Link>
                    {' '}
                </Col>
            ))}
        </Row>
    );
}
