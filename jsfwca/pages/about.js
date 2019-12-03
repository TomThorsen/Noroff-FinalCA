import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout/Layout";

export default function About() {
    return (
        <Layout>
            <Head title="About" />

            <Link href="/">
                <a>Home</a>
            </Link>
        </Layout>
    );
}