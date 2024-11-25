import React, { useState } from 'react';
import axios from 'axios';

function LandingPage() {
    const [podcastUrl, setPodcastUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/upload', { url: podcastUrl });
            // Redirect to Transcription Dashboard
            window.location.href = '/transcription';
        } catch (error) {
            console.error('Error uploading podcast', error);
        }
    };

    return (
        <div>
            <h1>Podcast Accessibility Enhancer</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={podcastUrl}
                    onChange={(e) => setPodcastUrl(e.target.value)}
                    placeholder="Enter podcast URL"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LandingPage;