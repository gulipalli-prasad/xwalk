// File: decorate.js

export default function decorate(block) {
  const quoteWrapper = block.children[0]; // Assuming block has one child for quote content

  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts"; // Test API endpoint

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      // Status 201 indicates successful creation
      const json = JSON.parse(xhr.responseText);

      const blockquote = document.createElement("blockquote");
      blockquote.innerHTML = `
        <p>Form submitted successfully!</p>
        <p>Response ID: ${json.id}</p>
        <p>First Name: ${json.fname}</p>
        <p>Last Name: ${json.lname}</p>`;

      quoteWrapper.replaceChildren(blockquote);
    }
  };

  const formData = getFormData(); // Function to retrieve form data dynamically

  const data = JSON.stringify(formData);

  xhr.send(data);
}

function getFormData() {
  // Simulate retrieving form data dynamically from AEM or user input
  const fname = "John"; // Replace with actual method to retrieve first name
  const lname = "Doe"; // Replace with actual method to retrieve last name

  return {
    fname: fname,
    lname: lname,
  };
}
