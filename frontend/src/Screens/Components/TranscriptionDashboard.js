import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

function TranscriptionDashboard() {
    const [transcript, setTranscript] = useState('');

    useEffect(() => {
        const socket = io('http://localhost:5000');
        socket.on('transcription', (data) => {
            setTranscript(data);
        });
        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <h2>Transcription Dashboard</h2>
            <div>{transcript}</div>
        </div>
    );
}

export default TranscriptionDashboard;