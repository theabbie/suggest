#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testEcosia() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.ecosia(query);
        console.log("Ecosia Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testEcosia();

