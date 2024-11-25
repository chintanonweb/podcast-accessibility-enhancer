import React, { useState } from 'react';
import axios from 'axios';

function SearchInterface() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/search', { params: { q: query } });
            setResults(response.data);
        } catch (error) {
            console.error('Error searching podcast', error);
        }
    };

    return (
        <div>
            <h2>Search Interface</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search transcript"
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {results.map((result, index) => (
                    <p key={index}>{result}</p>
                ))}
            </div>
        </div>
    );
}

export default SearchInterface;