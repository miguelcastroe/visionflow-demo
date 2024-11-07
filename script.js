async function optimizeScript() {
    const script = document.getElementById('script-input').value;
    const response = await fetch('/optimize-script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ script })
    });
    const data = await response.json();
    document.getElementById('optimized-script').innerText = data.optimizedScript;
    goToStep('pre-visualization');
}

async function generateStoryboard() {
    const script = document.getElementById('optimized-script').innerText;
    const response = await fetch('/generate-storyboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ script })
    });
    const data = await response.json();
    // Display storyboard images
    goToStep('feedback-loop');
}

async function generateVideo() {
    const storyboard = {}; // Get storyboard data
    const response = await fetch('/generate-video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ storyboard })
    });
    const data = await response.json();
    // Display video
    goToStep('final-output');
}

function goToStep(stepId) {
    document.querySelectorAll("section").forEach(section => section.style.display = "none");
    document.getElementById(stepId).style.display = "block";
}
