function toggleTheme() {
            const themeStyle = document.getElementById('theme-style');
            if (themeStyle.getAttribute('href') === 'style.css') {
                themeStyle.setAttribute('href', 'dark.css'); // Link to dark mode stylesheet
            } else {
                themeStyle.setAttribute('href', 'style.css'); // Link back to the default stylesheet
            }
        }