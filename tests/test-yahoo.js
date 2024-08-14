#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testYahoo() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.yahoo(query);
        console.log("Yahoo Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testYahoo();

