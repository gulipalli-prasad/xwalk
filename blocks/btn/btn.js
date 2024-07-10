export default function decorate(block) {
  function getPopupData() {
    const [logoutTextEl, popupHeadingEl, popupDescEl, hrefEl, yesEl, noEl] =
      block.children;

    const logoutText = logoutTextEl?.textContent?.trim() || "";
    const popupHeading = popupHeadingEl?.textContent?.trim() || "";
    const popupDesc = popupDescEl?.textContent?.trim() || "";
    const href = hrefEl?.querySelector("a")?.href || "";
    const yes = yesEl?.textContent?.trim() || "";
    const no = noEl?.textContent?.trim() || "";

    return {
      logoutText,
      popupHeading,
      popupDesc,
      href,
      yes,
      no,
    };
  }

  const popupData = getPopupData();

  // Function to show the popup
  function showPopup() {
    document.getElementById("logoutPopup").style.display = "block";
  }

  // Function to hide the popup
  function hidePopup() {
    document.getElementById("logoutPopup").style.display = "none";
  }

  // Function to confirm logout and redirect
  function confirmLogout() {
    window.location.href = popupData.href; // Use the dynamic logout URL
  }

  // Create and append the logout button
  const button = document.createElement("button");
  button.className = "logout-button";
  button.textContent = popupData.logoutText || "LOGOUT"; // Use the dynamic logout text
  button.onclick = showPopup;
  block.appendChild(button);

  // Create and append the popup HTML
  const popupHtml = `
    <div id="logoutPopup" class="popup">
        <div class="popup-header">
            <h2><i class="icon">ℹ️</i> ${popupData.popupHeading}</h2>
            <span class="close" onclick="hidePopup()">&times;</span>
        </div>
        <p>${popupData.popupDesc}</p>
        <div class="popup-buttons">
            <button onclick="confirmLogout()">${popupData.yes}</button>
            <button onclick="hidePopup()">${popupData.no}</button>
        </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", popupHtml);

  // Include the CSS file dynamically
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "path/to/eds-styles.css"; // Update the path to your actual CSS file
  document.head.appendChild(link);
}
