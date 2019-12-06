import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import css from "../../../styles.scss";

export default function CardDetails(props) {

    const [result, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(props.id)
            .then(result => result.json())
            .then(res => setCards(res))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    } else if (!loading && result.card === undefined) {
        return (
            <>
                <h2>Invalid Card URL</h2>
            </>
        );
    } else if (!loading)
        return (
                <row className="cardspec">
                    <Col className="cardspec__column">
                        <img src={result.card.imageUrl}/>
                    </Col>
                    <Col md="auto" className="cardspec__column">
                        <h2>{result.card.name}</h2>
                        <div><b>About: </b>{result.card.text}</div>
                        <div><b>Rarity: </b>{result.card.rarity}</div>
                        <div><b>Color: </b>{result.card.colors}</div>
                    </Col>
                </row>
        );
}
