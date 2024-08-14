#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testAsk() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.ask(query);
        console.log("Ask Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testAsk();

