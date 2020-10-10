import { useTips } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const tips = useTips()

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
    }

    // Add a section, and all of the tip to the DOM
    contentElement.innerHTML += `
        <aside class="tip__list bordered">
            <h3>Martin's Tips</h3>
            ${tipHTMLRepresentations}
        </aside>
    `
}
