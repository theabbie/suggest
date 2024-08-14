#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testBrave() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.brave(query);
        console.log("Brave Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testBrave();

