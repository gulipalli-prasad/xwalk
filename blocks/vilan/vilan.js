export default function decorate(block) {
  // <div class="card">
  //       <h2>TITLE HEADING</h2>
  //       <h5>Title description, Dec 7, 2017</h5>
  //       <div class="fakeimg" style="height:200px;">Image</div>
  //       <p>Some text..</p>
  //       <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  //     </div>

  // Create the outer div with class "card"
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  // Create the h2 element and set its text content
  const titleHeading = document.createElement("h2");
  titleHeading.textContent = "TITLE HEADING";

  // Create the h5 element and set its text content
  const titleDescription = document.createElement("h5");
  titleDescription.textContent = "Title description, Dec 7, 2017";

  // Create the div for the image with class "fakeimg" and set its style
  const fakeImg = document.createElement("div");
  fakeImg.className = "fakeimg";
  fakeImg.style.height = "200px";
  fakeImg.textContent = "Image";

  // Create the first paragraph and set its text content
  const firstParagraph = document.createElement("p");
  firstParagraph.textContent = "Some text..";

  // Create the second paragraph and set its text content
  const secondParagraph = document.createElement("p");
  secondParagraph.textContent =
    "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

  // Append all the created elements to the cardDiv
  cardDiv.appendChild(titleHeading);
  cardDiv.appendChild(titleDescription);
  cardDiv.appendChild(fakeImg);
  cardDiv.appendChild(firstParagraph);
  cardDiv.appendChild(secondParagraph);

  // Append the cardDiv to the body or any other desired parent element
  block.appendChild(cardDiv);
}
