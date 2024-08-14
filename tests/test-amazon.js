#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testAmazon() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.amazon(query);
        console.log("Amazon Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testAmazon();

