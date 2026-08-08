/**
 * This script loads htmx and configures it with astro so that it works after hot reloads
 */
import htmx from "htmx.org";
import "htmx-ext-head-support";

if (import.meta.env.DEV === true) {
    // https://htmx.org/docs/#debugging
    htmx.logAll();
}

// https://htmx.org/docs/#view-transitions
htmx.config.globalViewTransitions = true;

// https://docs.astro.build/en/guides/view-transitions/#astroafter-swap
document.addEventListener("astro:after-swap", () => {
    htmx.process(document.body);
});