#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testWikipedia() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.wikipedia(query);
        console.log("Wikipedia Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testWikipedia();

