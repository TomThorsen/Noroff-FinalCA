import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/Form";
import PropTypes from "prop-types";
import FormControl from "react-bootstrap/FormControl";

export default function Search({ handleSearch }) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <InputGroup inline className="search">
                <FormControl type="text" placeholder="Search" className="search__field" onChange={event => handleSearch(event)}/>
                <Button variant="outline-success" className="search__button">Search</Button>
            </InputGroup>
        </div>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};