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

    return {
      heading,
      description,
      navImage,
      altText,
      navBackgroundImage,
      href,
    };
  }

  const Navbar = getNavbar(block);

  // Create the HTML structure using template literals
  const NavbarHtml = `
    <div class="block-with-background" style="background-image: url('${Navbar.navBackgroundImage}');">
	    <div class="nav-bar-heading">${Navbar.heading}</div>
	    <div class="description">${Navbar.description}</div>
	    <img src="${Navbar.navImage}" alt="${Navbar.altText}" class="custom-image"/>
       <a href="${Navbar.href}" class="custom-link">Click Here</a>
    </div>
  `;

  // Set the generated HTML to the block
  block.innerHTML = NavbarHtml;
}
