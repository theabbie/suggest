#! /usr/bin/env node

const Suggest = require('../index'); // Adjust the path accordingly

async function testDogPile() {
    const query = "example"; // Replace with your test query
    try {
        const suggestions = await Suggest.dogpile(query);
        console.log("DogPile Suggestions:", suggestions);
    } catch (error) {
        console.error("Error fetching suggestions:", error);
    }
}

testDogPile();

