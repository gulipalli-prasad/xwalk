export default function decorate(block) {
  // <div class="card">
  //       <h2>TITLE HEADING</h2>
  //       <h5>Title description, Dec 7, 2017</h5>
  //       <div class="fakeimg" style="height:200px;">Image</div>
  //       <p>Some text..</p>
  //       <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  //     </div>

  const firstDiv = document.createElement("div");
  firstDiv.setAttribute("class", "card");

  const heading = document.createElement("h2");
  heading.textContent = "TITLE HEADING";
  firstDiv.appendChild(heading);

  const description = document.createElement("h2");
  description.textContent = "TITLE HEADING";
  firstDiv.appendChild(description);

  const secondDiv = document.createElement("div");
  secondDiv.setAttribute("class", "card");
  firstDiv.appendChild(secondDiv);
}
