const toggoleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggoleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark === 'dark' ? 'rgba(255 255 255 / 50%)' : 'rgba(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark === 'dark' ? 'Dark Mode' : 'light Mode';
    isDark === 'dark' ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark === 'dark' ? imageMode('dark') : imageMode('light');
}

function switchThemeIf(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggoleDarkLightMode(theme);
}

function switchTheme(event) {
    event.target.checked ? switchThemeIf('dark') : switchThemeIf('light');
}

toggoleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
 
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggoleSwitch.checked = true;
        toggoleDarkLightMode('dark');
    }
}