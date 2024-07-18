export default async function decorate(block) {
  function getUserDetails() {
    const [userImageEl, userNameEl, userRoleEl, userAddressEl] = block.children;

    const userImgElement = userImageEl.querySelector("img");
    const userImage = userImgElement?.getAttribute("src")?.trim() || "";
    const userName = userNameEl?.textContent?.trim() || "";
    const userRole = userRoleEl?.textContent?.trim() || "";
    const userAddress = userAddressEl?.textContent?.trim() || "";

    return {
      userImage,
      userName,
      userRole,
      userAddress,
    };
  }

  const userdetails = getUserDetails(block);

  const userdetailsHtml = `
    <div class="profile-card">
        <div class="profile-image">
            <img src="${userdetails.userImage}" alt="Profile Image">
        </div>
        <div class="profile-info">
            <h2>${userdetails.userName}</h2>
            <p>${userdetails.userRole}</p>
            <p>${userdetails.userAddress}</p>
        </div>
    </div>
`;

  block.innerHTML = userdetailsHtml;
}
