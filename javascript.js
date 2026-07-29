// Seleciona o botão e o ícone
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Alterna o tema ao clicar
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        // Volta para escuro
        document.documentElement.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        // Ativa tema claro
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});