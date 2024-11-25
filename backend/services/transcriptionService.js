const { AssemblyAI } = require('assemblyai');
const assemblyai = new AssemblyAI({ apiKey: 'your_api_key' });

const transcribe = async (fileUrl) => {
    const response = await assemblyai.transcribe(fileUrl);
    return response;
};

module.exports = { transcribe };