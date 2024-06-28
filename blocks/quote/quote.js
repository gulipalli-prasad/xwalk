// File: decorate.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.createElement("form");
  form.id = "myForm";

  const fnameLabel = document.createElement("label");
  fnameLabel.setAttribute("for", "fname");
  fnameLabel.textContent = "First name:";
  form.appendChild(fnameLabel);

  const fnameInput = document.createElement("input");
  fnameInput.type = "text";
  fnameInput.id = "fname";
  fnameInput.name = "fname";
  fnameInput.required = true;
  form.appendChild(fnameInput);

  form.appendChild(document.createElement("br"));

  const lnameLabel = document.createElement("label");
  lnameLabel.setAttribute("for", "lname");
  lnameLabel.textContent = "Last name:";
  form.appendChild(lnameLabel);

  const lnameInput = document.createElement("input");
  lnameInput.type = "text";
  lnameInput.id = "lname";
  lnameInput.name = "lname";
  lnameInput.required = true;
  form.appendChild(lnameInput);

  form.appendChild(document.createElement("br"));

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";
  form.appendChild(submitBtn);

  const responseDiv = document.createElement("div");
  responseDiv.id = "response";
  document.body.appendChild(form);
  document.body.appendChild(responseDiv);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/posts"; // Test API endpoint

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        const json = JSON.parse(xhr.responseText);

        const responseContent = `
          <p>Form submitted successfully!</p>
          <p>Response ID: ${json.id}</p>
          <p>First Name: ${json.fname}</p>
          <p>Last Name: ${json.lname}</p>
        `;

        responseDiv.innerHTML = responseContent;
      }
    };

    const fname = fnameInput.value;
    const lname = lnameInput.value;

    const data = JSON.stringify({
      fname: fname,
      lname: lname,
    });

    xhr.send(data);
  });
});
