export default function decorate(block) {
  function getNavbar() {
    const [
      headingEl,
      descriptionEl,
      navImageEl,
      altTextEl,
      navBackgroundImageEl,
      ctaLinkEl,
      ctaTextEl,
    ] = block.children;

    console.log("my image value is++++", navImageEl);

    const heading = headingEl?.textContent?.trim() || "";
    const description = descriptionEl?.textContent?.trim() || "";

    const navImgElement = navImageEl.querySelector("img");
    const navImage = navImgElement?.getAttribute("src")?.trim() || "";

    const altText = altTextEl?.textContent?.trim() || "";

    const navBgImgElement = navBackgroundImageEl.querySelector("img");
    const navBackgroundImage =
      navBgImgElement?.getAttribute("src")?.trim() || "";

    //  const ctaLink = ctaLinkEl?.textContent?.trim() || "";
    //  const ctaText = ctaTextEl?.textContent?.trim() || "";

    const cta = ctaLinkEl
      ? {
          href: ctaLinkEl.querySelector("a")?.href || "#",
          title: ctaLinkEl.querySelector("a")?.title || "",

          textContent: ctaTextEl?.textContent?.trim() || "",
        }
      : null;

    return {
      heading,
      description,
      navImage,
      altText,
      navBackgroundImage,
      cta,
    };
  }

  const navBar = getNavbar(block);

  // Create the HTML structure using template literals
  const navBarHtml = `
    <div class="block-with-background" style="background-image: url('${
      navBar.navBackgroundImage
    }');">
	    <div class="nav-bar-heading">${navBar.heading}</div>
	    <div class="description">${navBar.description}</div>
	    <img src="${navBar.navImage}" alt="${navBar.altText}" class="custom-image"/>
      
        <a href="${navBar.cta?.href || "#"}" title="${
    navBar.cta?.title || ""
  }" class="custom-link">
          <p>${navBar.cta?.textContent}</p>
        </a>
    </div>
  `;

  // Set the generated HTML to the block
  block.innerHTML = navBarHtml;

  // Add necessary classes
  // const headingElement = block.querySelector(".nav-bar-heading");
  // const linkElement = block.querySelector(".custom-link");

  // if (headingElement) headingElement.classList.add("nav-bar-heading");
  // if (linkElement) linkElement.classList.add("custom-link");
}
