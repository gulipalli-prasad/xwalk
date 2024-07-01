import utility from "../../utility/utility.js";
import teaser from "../../utility/teaserUtils.js";
import ctaUtils from "../../utility/ctaUtils.js";

export default function decorate(block) {
  // Extract content from the block
  const titleHeading = block.children[0]?.textContent?.trim() || "";
  const titleDescription = block.children[1]?.textContent?.trim() || "";
  const imageSrc = block.children[2]?.getAttribute("data-img-src") || "";
  const textContent = block.children[3]?.textContent?.trim() || "";
  const detailedText = block.children[4]?.textContent?.trim() || "";

  // Construct the HTML structure
  const blockHTML = `
    <div class="card">
      <h2>${titleHeading}</h2>
      <h5>${titleDescription}</h5>
      <div class="fakeimg" style="height:200px; background-image: url('${imageSrc}');">Image</div>
      <p>${textContent}</p>
      <p>${detailedText}</p>
    </div>
  `;

  // Replace the block's content with the constructed HTML
  block.innerHTML = blockHTML;
}

// Call the function to decorate the block
document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".card-component"); // Replace with the actual block class name
  blocks.forEach(decorate);
});
