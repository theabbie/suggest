#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testBing() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.bing(query);
        console.log("Bing Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testBing();

