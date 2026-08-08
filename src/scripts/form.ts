(window as any).showSubmitButton = function () {
    const submitButton = document.getElementById("contact-form-submit");
    const hcaptcha = document.getElementById("h-captcha");
    if (!submitButton) return;
    if (!hcaptcha) return;

    submitButton.style.display = "block";
    hcaptcha.style.display = "none";
};
(window as any).hideSubmitButton = function () {
    const submitButton = document.getElementById("contact-form-submit");
    const hcaptcha = document.getElementById("h-captcha");

    if (!submitButton) return;
    if (!hcaptcha) return;
    submitButton.style.display = "none";
    hcaptcha.style.display = "block";
};

function init() {
    (window as any).hideSubmitButton();
    document.getElementById("contact-form")?.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event: Event) {
    const form = document.getElementById("contact-form")
    if (!form) return;
    const hCaptcha = (form.querySelector('textarea[name=h-captcha-response]') as HTMLTextAreaElement | null)?.value;

    if (!hCaptcha) {
        event.preventDefault();
        alert("Please fill out captcha field")
        return
    }
}

document.addEventListener("DOMContentLoaded", init)
document.body.addEventListener("htmx:afterSettle", () => {
    (window as any).hcaptcha.render('h-captcha', // string: ID of target div to render into
        {
            sitekey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2',
            theme: 'dark',
            callback: 'showSubmitButton'
        });

    init();
});