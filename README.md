# Podcast Accessibility Enhancer

This project aims to enhance the accessibility of podcasts by providing real-time transcription, instant chapter summaries, key insights, searchable transcripts, and automatic hashtag generation.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Transcription**: Transcribe podcasts in real-time.
- **Instant Chapter Summaries**: Generate chapter summaries automatically.
- **Key Insights and Quotes**: Extract key insights and quotes.
- **Searchable Transcript**: Provide a searchable transcript with timestamps.
- **Automatic Hashtags and Topic Tags**: Generate hashtags and topic tags automatically.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher)
- MongoDB
- Redis
- AssemblyAI API Key

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/chintanonweb/podcast-accessibility-enhancer.git
   cd podcast-accessibility-enhancer
   ```

2. **Install Dependencies**

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   MONGO_URI=your_mongodb_connection_string
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   ASSEMBLYAI_API_KEY=your_assemblyai_api_key
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the Application**

   - **Backend**:

     ```bash
     cd backend
     npm start
     ```

   - **Frontend**:

     ```bash
     cd frontend
     npm start
     ```

## Usage

1. **Landing Page**:
   - Enter the podcast URL or upload a podcast file.
   - Click "Submit" to initiate the transcription process.

2. **Transcription Dashboard**:
   - View the real-time transcription of the podcast.
   - Navigate through the transcript using timestamps.

3. **Insights Page**:
   - View chapter summaries, key quotes, and topic tags.

4. **Search Interface**:
   - Search the full transcript of the podcast.
   - Filter results by timestamp or speaker.

## Folder Structure

```
backend/
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   └── Podcast.js
├── routes/
│   ├── upload.js
│   ├── process.js
│   ├── insights.js
│   └── search.js
├── services/
│   ├── transcriptionService.js
│   ├── analysisService.js
│   └── searchService.js
├── utils/
│   └── cache.js
├── server.js
└── package.json

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LandingPage.js
│   │   ├── TranscriptionDashboard.js
│   │   ├── InsightsPage.js
│   │   └── SearchInterface.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Environment Variables

Ensure you have the following environment variables set in your `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
JWT_SECRET=your_jwt_secret_key
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### .env Configuration

Create a `.env` file in the `backend` directory with the following content:

```env
MONGO_URI=your_mongodb_connection_string
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
JWT_SECRET=your_jwt_secret_key
```