import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../../constants/API";
import Search from "./Search";
import Link from 'next/link';
import css from "../../../styles.scss";

export default function CardList() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setCards(json.cards)
                setFilteredCards(json.cards);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = cards.filter(function(card) {
            const lowerCaseName = card.name.toLowerCase();
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        setFilteredCards(filteredArray);
    };

    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <>
                <Search handleSearch={filterCards} />
                <Row>
                    {filteredCards.map(c => (
                        <Col sm={6} md={3} key={c.id} className="gamecard">
                            <div className="gamecard__container">
                                <h4 className="gamecard__header">{c.name}</h4>
                                {(c.imageUrl != undefined) ? (
                                    <img src={c.imageUrl} className="gamecard__image"/>
                                ) : (
                                    <div className="gamecard__imageerror">NO IMAGE</div>
                                )}
                                {' '}
                                <Link href={{ pathname: '/cardSpecific', query: {id: c.id} }}>
                                    <a>
                                        <div className="gamecard__button">
                                            <div className="gamecard__buttontext">View More</div>
                                        </div>
                                    </a>
                                </Link>
                                {' '}
                            </div>
                        </Col>
                    ))}
                </Row>
            </>
        );
    }
}
