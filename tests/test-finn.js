#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testFinn() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.finn(query);
        console.log("Finn Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testFinn();

