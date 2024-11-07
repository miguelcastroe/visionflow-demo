const express = require('express');
const bodyParser = require('body-parser');
const { openai } = require('./openai'); // Assume you have a file for OpenAI configuration

const app = express();
app.use(bodyParser.json());

app.post('/optimize-script', async (req, res) => {
    const { script } = req.body;
    try {
        const optimizedScript = await openai.optimizeScript(script);
        res.json({ optimizedScript });
    } catch (error) {
        res.status(500).send('Error optimizing script');
    }
});

app.post('/generate-storyboard', async (req, res) => {
    const { script } = req.body;
    try {
        const storyboard = await openai.generateStoryboard(script);
        res.json({ storyboard });
    } catch (error) {
        res.status(500).send('Error generating storyboard');
    }
});

app.post('/generate-video', async (req, res) => {
    const { storyboard } = req.body;
    try {
        const video = await openai.generateVideo(storyboard);
        res.json({ video });
    } catch (error) {
        res.status(500).send('Error generating video');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
