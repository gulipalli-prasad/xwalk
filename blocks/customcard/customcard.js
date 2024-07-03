export default function decorate(block) {
  function getCustomCard() {
    const [
      titleHeadingEl,
      titleDescriptionEl,
      imageSourceEl,
      textContentEl,
      detailedTextEl,
    ] = block.children;

    // const image = imageSourceEl?.querySelector("picture");
    // if (image) {
    //   const img = image.querySelector("img");
    //   img.removeAttribute("width");
    //   img.removeAttribute("height");
    //   const alt = "image";
    //   img.setAttribute("alt", alt);
    // }

    const titleHeading = titleHeadingEl?.textContent?.trim();
    const titleDescription = titleDescriptionEl?.textContent?.trim();
    const textContent = textContentEl?.textContent?.trim();
    const detailedText = detailedTextEl?.textContent?.trim();
    const imageSource = imageSourceEl?.textContent?.trim();

    return {
      titleHeading,
      titleDescription,
      textContent,
      detailedText,
      imageSource,
    };
  }

  const customCard = getCustomCard(block);

  // Create the form elements
  const responseDiv = document.createElement("div");
  responseDiv.className = "card";

  const title = document.createElement("h2");
  title.textContent = customCard.titleHeading;
  responseDiv.appendChild(title);

  const description = document.createElement("h5");
  description.textContent = `${titleDescription}`;
  responseDiv.appendChild(description);

  const imageDiv = document.createElement("div");
  imageDiv.className = "faking";
  imageDiv.textContent = customCard.imageSource;
  imageDiv.style.height = "200px";
  responseDiv.appendChild(imageDiv);

  const paragraphText = document.createElement("p");
  paragraphText.textContent = customCard.textContent;
  responseDiv.appendChild(paragraphText);

  const paragraphDescription = document.createElement("p");
  paragraphDescription.textContent = customCard.detailedText;
  responseDiv.appendChild(paragraphDescription);

  // Add the form to the block
  block.appendChild(responseDiv);
}
