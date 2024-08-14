#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testYelp() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.yelp(query);
        console.log("Yelp Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testYelp();

