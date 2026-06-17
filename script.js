const toggleButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('.site-header');

if (toggleButton && nav) {
    toggleButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header') && nav.classList.contains('is-open')) {
            nav.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
}

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });
}
