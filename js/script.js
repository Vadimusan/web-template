const btn = document.querySelector('.theme-switcher')

const darkTheme = document.querySelector('.theme-switcher-dark')
const lightTheme = document.querySelector('.theme-switcher-light')

const theme = document.documentElement;
const currentTheme = localStorage.getItem('theme')

function setTheme(name) {
    theme.setAttribute('data-theme', name)
    localStorage.setItem('theme', name)
}

if (currentTheme) {
    theme.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        darkTheme.classList.add('theme-switcher-active')
    } else {
        lightTheme.classList.add('theme-switcher-active')
    }
} else {
    setTheme('dark')
    darkTheme.classList.add('theme-switcher-active')
}

btn.addEventListener('click', (event) => {
    event.preventDefault()

    if (theme.getAttribute('data-theme') === 'light') {
        setTheme('dark')
        darkTheme.classList.add('theme-switcher-active')

        if (lightTheme.classList.contains('theme-switcher-active')) {
            lightTheme.classList.remove('theme-switcher-active')
        }
    } else {
        setTheme('light')
        lightTheme.classList.add('theme-switcher-active')

        if (darkTheme.classList.contains('theme-switcher-active')) {
            darkTheme.classList.remove('theme-switcher-active')
        }
    }
})
