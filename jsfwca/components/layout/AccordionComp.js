import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import css from "../../styles.scss";

export default function AccordionComp(props) {
    return (
        <Accordion>
            <Card className="accordion__body">
                <Accordion.Toggle className="accordion__heading" as={Card.Header} eventKey="0">
                    {props.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className="accordion__text">{props.text1}</div>
                        <div className="accordion__text">{props.text2}</div>
                        <div className="accordion__text">{props.text3}</div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

