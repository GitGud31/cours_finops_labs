// Import necessary modules
const { TextAnalyticsClient, AzureKeyCredential } = require('@azure/ai-text-analytics');
require('dotenv').config();

// Retrieve API credentials from environment variables
const apiKey = process.env.TEXT_ANALYTICS_API_KEY;
const endpoint = process.env.TEXT_ANALYTICS_ENDPOINT;

// Initialize Text Analytics Client
const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

// Function to analyze sentiment
async function analyzeSentiment(text) {
    const documents = [text];

    const results = await textAnalyticsClient.analyzeSentiment(documents);

    results.forEach(document => {
        console.log(`Document Sentiment: ${document.sentiment}`);
        console.log(`Positive Score: ${document.confidenceScores.positive.toFixed(2)}`);
        console.log(`Neutral Score: ${document.confidenceScores.neutral.toFixed(2)}`);
        console.log(`Negative Score: ${document.confidenceScores.negative.toFixed(2)}`);
    });
}

// Example text to analyze
const sampleText = "I love programming! It's so exciting and fun.";

// Analyze sentiment of the example text
analyzeSentiment(sampleText).catch(err => {
    console.error("Error analyzing sentiment:", err);
});
