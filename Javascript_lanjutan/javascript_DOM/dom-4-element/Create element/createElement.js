let content = document.getElementById("id-content");

// Create h1
let createTitle = document.createElement("h1");
createTitle.textContent = "Created an  h1 element";
content.appendChild(createTitle);

// Create a paragraph
let createParagraph = document.createElement("p");
createParagraph.textContent = "This is a paragraph that just created";
content.append(createParagraph);
