#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testGoogle() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.google(query);
        console.log("Google Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testGoogle();

