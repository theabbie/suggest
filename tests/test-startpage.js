#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testStartPage() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.startpage(query);
        console.log("StartPage Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testStartPage();

