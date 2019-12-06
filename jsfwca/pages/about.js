import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import AccordionComp from "../components/layout/AccordionComp";

export default function About() {
    return (
        <Layout>
            <AccordionComp title="DEFEAT YOUR OPPONENT"
                           text1="Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them."
                           text2="Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out."
                           text3="Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells."
            />
        </Layout>
    );
}