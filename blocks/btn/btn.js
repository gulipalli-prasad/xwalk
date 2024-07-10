export default function decorate(block) {
  function createLogoutButton() {
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutButton";
    logoutButton.className = "blue-button";
    logoutButton.textContent = "LOGOUT";
    return logoutButton;
  }

  function createModal() {
    const modal = document.createElement("div");
    modal.id = "logoutModal";
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Information</h2>
        <p>Are you sure, you want to logout?</p>
        <button id="yesButton" class="blue-button">YES</button>
        <button id="noButton" class="blue-button">NO</button>
      </div>
    `;
    return modal;
  }

  function setupEventListeners(logoutButton, modal) {
    logoutButton.addEventListener("click", () => {
      modal.style.display = "block";
    });

    const yesButton = modal.querySelector("#yesButton");
    const noButton = modal.querySelector("#noButton");
    yesButton.addEventListener("click", () => {
      // Redirect to another page (replace with your desired URL)

      window.location.href = "https://google.com";
    });

    noButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  const logoutButton = createLogoutButton();
  const modal = createModal();
  block.innerHTML = "";
  block.appendChild(logoutButton);
  block.appendChild(modal);

  setupEventListeners(logoutButton, modal);
}
