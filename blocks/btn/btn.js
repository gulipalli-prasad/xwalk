export default function decorate(block) {
  const [
    logoutTextEl,
    popupHeadingEl,
    popupDescEl,
    linkEl,
    yesEl,
    noEl,
    userImageEl,
    crossFormEl,
    infoIconEl,
  ] = block.children;

  const logoutText = logoutTextEl?.textContent?.trim() || "";
  const popupHeading = popupHeadingEl?.textContent?.trim() || "";
  const popupDesc = popupDescEl?.textContent?.trim() || "";
  const link = linkEl?.querySelector("a")?.href || "#";
  const yesText = yesEl?.textContent?.trim() || "";
  const noText = noEl?.textContent?.trim() || "";
  const userImageElement = userImageEl.querySelector("img");
  const userImage = userImageElement?.getAttribute("src")?.trim() || "";
  const crossFormElement = crossFormEl.querySelector("img");
  const crossForm = crossFormElement?.getAttribute("src")?.trim() || "";
  const infoIconElement = infoIconEl.querySelector("img");
  const infoIcon = infoIconElement?.getAttribute("src")?.trim() || "";

  function createProfileCard(data) {
    return `
      <div class="container ">
          <div class="grey-bg">
              <div class="user-information-box">
                  <div class="user-img">
                      <img src="${userImage}" alt="user image">
                  </div>
                  <div class="user-details">
                      <div class="user_bx">
                          <h4 class="user_name" id="user_name">${data.name}</h4>
                          <p class="user_designation" id="user_designation">Relationship Manager</p>
                          <p class="user_addr" id="user_addr">411037, PUNE MAHARASHTRA</p>
                      </div>
                      <div class="user_logout">
                          <a href="javascript:void(0)" id="logoutButton">${logoutText}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  }

  function createModal() {
    return `
      <div class="popUpmain" id="popup" style="display:none;">
        <div class="modal-content">
          <div class="close" id="close-popup">
            <img src="${crossForm}" alt="cross form">
          </div>
          <div class="popupContent blue">
            <h2><img src="${infoIcon}" alt="info icon"> ${popupHeading}</h2>
            <p>${popupDesc}</p>
            <div class="blackButton">
              <button type="button" class="logout_yes" id="yesButton">${yesText}</button>
            </div>
            <div class="blackButton">
              <button type="button" class="logout_no" id="noButton">${noText}</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async function fetchUserData() {
    const apiEndpoint = "https://jsonplaceholder.typicode.com/users/1";
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  function setupEventListeners(logoutButton, modal) {
    logoutButton.addEventListener("click", () => {
      modal.classList.add("fade-in");
      modal.style.display = "flex";
    });

    modal.querySelector("#close-popup").addEventListener("click", () => {
      modal.classList.remove("fade-in");
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });

    const yesButton = modal.querySelector("#yesButton");
    yesButton.addEventListener("click", () => {
      window.location.href = link;
    });

    const noButton = modal.querySelector("#noButton");
    noButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  fetchUserData().then((userData) => {
    if (userData) {
      const profileCardHTML = createProfileCard(userData);
      const modalHTML = createModal();
      block.innerHTML = profileCardHTML + modalHTML;
      const logoutButton = document.getElementById("logoutButton");
      const modal = document.getElementById("popup");
      setupEventListeners(logoutButton, modal);
    }
  });
}
