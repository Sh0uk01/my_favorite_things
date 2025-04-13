function toggleVisibility(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
