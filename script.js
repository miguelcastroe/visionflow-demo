function goToStep(stepId) {
    // Hide all sections
    document.querySelectorAll("section").forEach(section => section.style.display = "none");

    // Show the selected section
    document.getElementById(stepId).style.display = "block";
}
