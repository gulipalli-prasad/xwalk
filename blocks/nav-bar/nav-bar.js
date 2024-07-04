export default function decorate(block) {
  function getNavbar() {
    const [
      headingEl,
      descriptionEl,
      navImageEl,
      altTextEl,
      navBackgroundImageEl,
      hrefEl,
      ctaLinkEl,
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

    const href = hrefEl?.textContent?.trim() || "";
    const ctaLink = ctaLinkEl?.textContent?.trim() || "";

    return {
      heading,
      description,
      navImage,
      altText,
      navBackgroundImage,
      href,
      ctaLink,
    };
  }

  const Navbar = getNavbar(block);

  // Create the HTML structure using template literals
  const NavbarHtml = `
    <div class="block-with-background" style="background-image: url('${Navbar.navBackgroundImage}');">
	    <div class="nav-bar-heading">${Navbar.heading}</div>
	    <div class="description">${Navbar.description}</div>
	    <img src="${Navbar.navImage}" alt="${Navbar.altText}" class="custom-image"/>
       <a href="${Navbar.href}" class="custom-link">${Navbar.ctaLink}</a>
    </div>
  `;

  // Set the generated HTML to the block
  block.innerHTML = NavbarHtml;

  // Add necessary classes
  // const headingElement = block.querySelector(".nav-bar-heading");
  // const linkElement = block.querySelector(".custom-link");

  // if (headingElement) headingElement.classList.add("nav-bar-heading");
  // if (linkElement) linkElement.classList.add("custom-link");
}
