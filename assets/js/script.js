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

// Mobile dropdown for Rubros
document.querySelectorAll('[data-dropdown-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
            const navItem = trigger.closest('.nav-item');
            const isExpanded = navItem.classList.toggle('is-expanded');
            trigger.setAttribute('aria-expanded', String(isExpanded));
        }
    });
});

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    }, { passive: true });
}
