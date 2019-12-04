import React from "react";
import PropTypes from "prop-types";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import axios from "axios";

import CardList from "../components/cards/list/CardList";

export default function Home() {
    return (
        <Layout>
            <CardList/>
        </Layout>
    );
}
