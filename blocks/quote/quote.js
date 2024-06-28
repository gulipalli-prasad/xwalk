// File: decorate.js
export default function decorate(block, fname, lname) {
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

  const data = JSON.stringify({
    fname: fname,
    lname: lname,
  });

  xhr.send(data);
}

// Example usage in the same file
const blockElement = document.getElementById("block-id"); // Replace with your actual block element
const fname = "John"; // Replace with the actual first name value
const lname = "Doe"; // Replace with the actual last name value

decorate(blockElement, fname, lname);
