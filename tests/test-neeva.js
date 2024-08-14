#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testNeeva() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.neeva(query);
        console.log("Neeva Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testNeeva();

