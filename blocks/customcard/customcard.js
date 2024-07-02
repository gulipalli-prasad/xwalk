export default function decorate(block) {
  // Function to extract content from the block
  function getCustomCard() {
    const [
      titleHeadingEl,
      titleDescriptionEl,
      imageSourceEl,
      textContentEl,
      detailedTextEl,
    ] = block.children;

    const titleHeading = titleHeadingEl?.textContent?.trim() || "";
    const titleDescription = titleDescriptionEl?.textContent?.trim() || "";
    const imageSource = imageSourceEl?.textContent?.trim() || "Image";
    const textContent = textContentEl?.textContent?.trim() || "Some text..";
    const detailedText = detailedTextEl?.textContent?.trim() || "";

    return {
      titleHeading,
      titleDescription,
      imageSource,
      textContent,
      detailedText,
    };
  }

  // Get content from the block
  const customCardContent = getCustomCard();

  // Construct the card HTML
  const customCardHtml = `
    <div class="card">
      ${
        customCardContent.titleHeading
          ? `<h2>${customCardContent.titleHeading}</h2>`
          : ""
      }
      ${
        customCardContent.titleDescription
          ? `<h5>${customCardContent.titleDescription}</h5>`
          : ""
      }
      <div class="fakeimg">${customCardContent.imageSource}</div>
      ${
        customCardContent.textContent
          ? `<p>${customCardContent.textContent}</p>`
          : ""
      }
      ${
        customCardContent.detailedText
          ? `<p>${customCardContent.detailedText}</p>`
          : ""
      }
    </div>`;

  // Replace the block's HTML with the constructed card HTML
  block.innerHTML = customCardHtml;
}

// Initialize the decoration on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".customcard"); // Replace with the actual block class name
  blocks.forEach(decorate);
});
