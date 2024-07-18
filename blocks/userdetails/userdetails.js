export default async function decorate(block) {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/users/1";

  try {
    const response = await fetch(apiEndpoint);

    const data = await response.json();

    const profileCard = document.createElement("div");

    profileCard.className = "profile-card";

    const profileImage = document.createElement("div");

    profileImage.className = "profile-image";

    const img = document.createElement("img");

    img.src = "https://via.placeholder.com/100";

    img.alt = "Profile Image";

    profileImage.appendChild(img);

    const profileInfo = document.createElement("div");

    profileInfo.className = "profile-info";

    const name = document.createElement("h2");

    name.textContent = data.name;

    const role = document.createElement("p");

    role.textContent = "Role: " + (data.company.catchPhrase || "Not specified");

    const location = document.createElement("p");

    location.textContent = `${data.address.city}, ${data.address.zipcode}`;

    profileInfo.appendChild(name);

    profileInfo.appendChild(role);

    profileInfo.appendChild(location);

    profileCard.appendChild(profileImage);

    profileCard.appendChild(profileInfo);

    block.appendChild(profileCard);
  } catch (error) {
    console.error("Error fetching profile card data:", error);

    block.textContent = "Error loading profile data";
  }
}
