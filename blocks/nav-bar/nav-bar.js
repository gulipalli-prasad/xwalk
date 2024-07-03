export default function decorate(block) {
  function getCustomCard() {
    const [headingEl, subHeadingEl, descriptionEl] = block.children;

    const heading = headingEl?.textContent?.trim();
    const subHeading = subHeadingEl?.textContent?.trim();
    const description = descriptionEl?.textContent?.trim();

    return {
      heading,
      subHeading,
      description,
    };
  }

  // Create and append an image
  const image = document.createElement("img");
  image.src = "/content/dam/p-xwalk-site/widen-the-talent-pool.png"; // Replace with your image path
  image.alt = "Custom Image";
  image.classList.add("custom-image"); // Add a class for styling

  // Create and append a link
  const link = document.createElement("a");
  link.href = "https://www.google.com"; // Replace with your desired URL
  link.textContent = "Click Here";
  link.classList.add("custom-link"); // Add a class for styling

  // Set background image for the block
  block.classList.add("block-with-background");

  block.appendChild(image); // Append the image before the link
  block.appendChild(link);
}
