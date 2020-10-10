/**
 *  Fish which renders individual fish objects as HTML
 */
export const Tip = (tip) => {
    return `
        <section class="tip card">
            <div class="tip__desc">${tip.description}</div>
        </section>
    `
}