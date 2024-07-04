export default function decorate(block) {
  function getNavbar() {
    const [
      headingEl,
      descriptionEl,
      navImageEl,
      altTextEl,
      navBackgroundImageEl,
      hrefEl,
    ] = block.children;

    const heading = headingEl?.textContent?.trim() || "";
    const description = descriptionEl?.textContent?.trim() || "";
    const navImage = navImageEl?.getAttribute("src")?.trim() || "";
    const altText = altTextEl?.textContent?.trim() || "";
    const navBackgroundImage =
      navBackgroundImageEl?.getAttribute("src")?.trim() || "";
    const href = hrefEl?.textContent?.trim() || "";

    return {
      heading,
      description,
      navImage,
      altText,
      navBackgroundImage,
      href,
    };
  }

  const customCard = getNavbar(block);

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
