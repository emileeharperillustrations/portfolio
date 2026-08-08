/**
 * This script handles expanding and collapsing the nav chips when scrolling up and down the page
 */

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
window.addEventListener("scroll", (event) => {
    const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

    // ignore micro scrolls
    if (Math.abs(currentScrollTop - lastScrollTop) < 100) {
        return;
    }

    const navChips = document.querySelectorAll(".nav-chip");

    if (currentScrollTop > lastScrollTop) {
        // scroll down
        navChips.forEach((chip) => {
            chip.setAttribute("data-expanded", "false");
        });
    } else if (currentScrollTop < lastScrollTop) {
        // scroll up
        navChips.forEach((chip) => {
            chip.setAttribute("data-expanded", "true");
        });
    }

    lastScrollTop = currentScrollTop;
});