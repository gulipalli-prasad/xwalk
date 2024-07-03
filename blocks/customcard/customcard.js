import utility from "../../utility/utility.js";
import teaser from "../../utility/teaserUtils.js";
import ctaUtils from "../../utility/ctaUtils.js";

export default function decorate(block) {
  function getCustomCard() {
    const [
      titleHeadingEl,
      titleDescriptionEl,
      imageSourceEl,
      textContentEl,
      detailedTextEl,
    ] = block.children;

    const image = imageSourceEl?.querySelector("picture");
    if (image) {
      const img = image.querySelector("img");
      img.removeAttribute("width");
      img.removeAttribute("height");
      const alt = "image";
      img.setAttribute("alt", alt);
    }

    const titleHeading = titleHeadingEl?.textContent?.trim();
    const titleDescription = titleDescriptionEl?.textContent?.trim();
    const textContent = textContentEl?.textContent?.trim();
    const detailedText = detailedTextEl?.textContent?.trim();

    return {
      image,
      titleHeading,
      titleDescription,
      textContent,
      detailedText,
    };
  }

  const customCard = getCustomCard(block);

  const customCardHtml = utility.sanitizeHtml(`
    <div class="custom-container">
      ${customCard.image ? customCard.image.outerHTML : ""}
      <div class="custom-heading">
        ${customCard.titleHeading ? `<h2>${customCard.titleHeading}</h2>` : ""}
        ${
          customCard.titleDescription
            ? `<p>${customCard.titleDescription}</p>`
            : ""
        }
        ${customCard.textContent ? `<p>${customCard.textContent}</p>` : ""}
        ${customCard.detailedText ? `<p>${customCard.detailedText}</p>` : ""}
      </div>
    </div>
  `);

  block.innerHTML = customCardHtml;
}
