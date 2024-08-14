#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testAndroid() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.android(query);
        console.log("Android Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testAndroid();

