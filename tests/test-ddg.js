#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testDuckDuckGo() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.ddg(query);
        console.log("DuckDuckGo Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testDuckDuckGo();

