#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testQwant() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.qwant(query);
        console.log("Qwant Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testQwant();

