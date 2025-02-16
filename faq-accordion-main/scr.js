// Get all "Show Answer" buttons
const showAnswerButtons = document.querySelectorAll('.show-answer');

// Add event listeners to each button
showAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the answer drawer associated with this button
        const answerDrawer = button.nextElementSibling;

        // Toggle the "active" class to show/hide the drawer
        answerDrawer.classList.toggle('active');
    });
});