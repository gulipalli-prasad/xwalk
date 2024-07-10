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
  window.location.href = "http://example.com/logout"; // Replace with your logout URL
}

// Create and append the logout button
const button = document.createElement("button");
button.className = "logout-button";
button.textContent = "LOGOUT";
button.onclick = showPopup;
document.body.appendChild(button);

// Create and append the popup HTML
const popupHtml = `
  <div id="logoutPopup" class="popup">
      <div class="popup-header">
          <h2><i class="icon">ℹ️</i> Information</h2>
          <span class="close" onclick="hidePopup()">&times;</span>
      </div>
      <p>Are you sure you want to logout?</p>
      <div class="popup-buttons">
          <button onclick="confirmLogout()">YES</button>
          <button onclick="hidePopup()">NO</button>
      </div>
  </div>
`;
document.body.insertAdjacentHTML("beforeend", popupHtml);

// Include the CSS file dynamically
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "path/to/eds-styles.css"; // Update the path to your actual CSS file
document.head.appendChild(link);
