// File: decorate.js

// Function to handle form submission and API call
function handleFormSubmission() {
  const form = document.querySelector(".quote-form"); // Assuming class 'quote-form' is used for form styling

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form); // Get form data
    const fname = formData.get("fname");
    const lname = formData.get("lname");

    // Call API with fetched data
    fetchDataFromAPI(fname, lname);
  });
}

// Function to fetch data from API and display response
function fetchDataFromAPI(fname, lname) {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts"; // Test API endpoint

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 201) {
      const json = JSON.parse(xhr.responseText);

      // Assuming response is displayed within a specific AEM component or block
      const responseContainer = document.querySelector(".quote-response"); // Adjust selector as per your component structure
      responseContainer.innerHTML = `
        <p>Form submitted successfully!</p>
        <p>Response ID: ${json.id}</p>
        <p>First Name: ${json.fname}</p>
        <p>Last Name: ${json.lname}</p>`;
    } else {
      console.error("Error:", xhr.status); // Log any error status
    }
  };

  const data = JSON.stringify({
    fname: fname,
    lname: lname,
  });

  xhr.send(data);
}

// Execute form submission handling when the page loads
window.onload = function () {
  handleFormSubmission();
};
