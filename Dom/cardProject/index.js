let names = ["Mostafa", "Shawky", "Mariom", "Anas"];
let age = [25, 26, 27, 28];
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

function createCard(names, age) {
  let card = document.createElement("div");
  card.className = "card";
  container.appendChild(card);
  let cardTitle = document.createElement("h1");
  cardTitle.className = "card-title";

  let cardText = document.createElement("p");
  cardText.className = "card-text";

  let cardImage = document.createElement("img");
  cardImage.className = "card-image";
  cardImage.src = "https://picsum.photos/200/300";

  //content
  let head = document.createTextNode(names);
  let text = document.createTextNode(age);
  cardTitle.appendChild(head);
  cardText.appendChild(text);

  //style
  card.style.cssText = "width: 18rem; margin: 20px; display: inline-block;";
  cardTitle.style.cssText =
    "font-size: 30px; font-weight: bold; text-align: center;";
  cardText.style.cssText = "font-size: 20px; text-align: center;";
  cardImage.style.cssText = "width: 100%; height: 200px; object-fit: cover;";

  card.appendChild(cardTitle);
  card.appendChild(cardText);
  card.appendChild(cardImage);
}

for (let i = 0; i < names.length; i++) {
  createCard(names[i], age[i]);
}
