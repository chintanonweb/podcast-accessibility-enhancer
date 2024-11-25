import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsightsPage() {
    const [insights, setInsights] = useState({});

    useEffect(() => {
        // Fetch insights from backend
        axios.get('http://localhost:5000/api/insights/summary')
            .then(res => setInsights(res.data));
    }, []);

    return (
        <div>
            <h2>Insights Page</h2>
            <div>
                <h3>Chapter Summaries</h3>
                {insights.chapters && insights.chapters.map((chapter, index) => (
                    <p key={index}>{chapter}</p>
                ))}
            </div>
            <div>
                <h3>Key Quotes</h3>
                {insights.quotes && insights.quotes.map((quote, index) => (
                    <p key={index}>{quote}</p>
                ))}
            </div>
            <div>
                <h3>Topic Tags</h3>
                {insights.tags && insights.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
        </div>
    );
}

export default InsightsPage;