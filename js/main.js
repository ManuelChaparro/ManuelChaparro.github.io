const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if it was saved
if (isDarkMode) {
    body.classList.add('dark-mode');
    if (darkModeToggle) {
        darkModeToggle.textContent = 'Toggle Light Mode';
    }
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Toggle Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = 'Toggle Dark Mode';
        }
    });
}
