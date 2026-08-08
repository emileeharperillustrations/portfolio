/**
 * This script handles the sticky title on the main page. The idea is that the title will be
 * centered in the hero sections until the user scrolls down, at which point it will stick to the
 * top of the page.When the user scrolls  back up, it will return to its centered position. I was
 * not able to achieve this effect using only CSS.
 */

function positionTitle() {
    const hero = document.getElementById("hero");
    const title = document.querySelector(
        `#desktop-title[data-sticky-title="true"]`,
    ) as HTMLElement | null;
    if (!hero) return;
    if (!title) return;
    const top = Math.max(
        hero.clientHeight / 2 - title.clientHeight / 2 - window.scrollY,
        0,
    );
    title.style.top = `${top}px`;
}

window.addEventListener("scroll", positionTitle);
window.addEventListener("resize", positionTitle);
document.addEventListener("DOMContentLoaded", () => {
    positionTitle();
});
document.body.addEventListener("htmx:afterSettle", () => {
    positionTitle();
});