// script.js
// 2.1 DOM-Elemente für den Rezept-Generator abrufen
// Wir speichern Referenzen auf unsere HTML-Elemente in JavaScript-Variablen.
// document.getElementById('ID') gibt das Element mit der angegebenen ID zurück.
const generateRecipeBtn = document.getElementById('generateRecipeBtn'); // Der "Rezept generieren" Button
const recipeList = document.getElementById('recipeList');             // Die <ul>-Liste für die Zutaten
const recipeTitle = document.getElementById('recipeTitle');           // Der <h3>-Titel für den Rezeptnamen
const messageDiv = document.getElementById('message');               // Das <div> für Statusmeldungen

console.log("DOM-Elemente erfolgreich abgerufen.");

console.log("DOM-Script geladen!");

// Schritt 1: Zugriff auf das Body-Element
// document.getElementsByTagName("body") gibt eine HTMLCollection (ähnlich einem Array) zurück.
// [0] wählt das erste (und einzige) Body-Element aus.
let bodyElement = document.getElementsByTagName("body")[0];

// Schritt 2: Den inneren HTML-Inhalt des Body-Elements in der Konsole ausgeben.
// innerHTML enthält den gesamten HTML-Code innerhalb des Elements.
console.log("Inhalt des Body-Elements:", bodyElement.innerHTML);

// Beispiel: Den inneren HTML-Inhalt des Body-Elements ändern.
// ACHTUNG: Dies überschreibt den gesamten bestehenden Inhalt des Body-Elements!
// bodyElement.innerHTML = "<p>Dieser Inhalt wurde von JavaScript ersetzt!</p>";
// console.log("Neuer Body-Inhalt nach innerHTML-Änderung:", bodyElement.innerHTML);

// Alle Elemente auf der Seite finden
let allElements = document.getElementsByTagName("*");
console.log("Anzahl aller Elemente auf der Seite:", allElements.length);

// Ein spezifisches Element nach seinem Tag-Namen und ID finden und ändern
for (let element of allElements) {
  if (element.id === "content_first") {
    // Ändert den Inhalt des ersten Inhaltsbereichs
    element.innerHTML = "<p>Dieser Inhalt wurde mit `getElementsByTagName` gefunden und aktualisiert!</p>";
    break; // Da IDs eindeutig sein sollten, können wir die Schleife abbrechen
  }
}

// Alle Elemente mit der Klasse "content" finden
let contentElements = document.getElementsByClassName("content");
console.log("Anzahl der Elemente mit Klasse 'content':", contentElements.length);

// Den Inhalt des zweiten Inhaltsbereichs ändern
for (let element of contentElements) {
  if (element.id === "content_second") {
    element.innerHTML = "<p>Der Inhalt des zweiten Bereichs wurde mit `getElementsByClassName` aktualisiert!</p>";
    break;
  }
}

// Das Element mit der ID "message" direkt auswählen
let messageDiv = document.getElementById("message");

// Den Inhalt des Nachrichtendivs ändern
if (messageDiv) { // Immer prüfen, ob das Element existiert, bevor darauf zugegriffen wird
  messageDiv.innerHTML = "<p>Nachrichtendiv-Inhalt wurde mit `getElementById` aktualisiert.</p>";
}

// Das erste Element mit der ID "content_first" und einem Kind-p-Element finden
// Selektoren für IDs beginnen mit '#'
let firstContentParagraph = document.querySelector("#content_first p");
if (firstContentParagraph) {
  firstContentParagraph.textContent = "Der erste Absatz des ersten Bereichs, mit `querySelector` geändert!";
}

// Alle Elemente mit der Klasse "content" finden
// Selektoren für Klassen beginnen mit '.'
let allContentDivs = document.querySelectorAll(".content");
console.log("Alle Content-Divs (via querySelectorAll):", allContentDivs.length);

// Ein spezifisches Kind-Element mit einer Pseudoklasse finden (z.B. den zweiten Absatz)
// Beispiel: Angenommen, 'content_third' hätte mehrere Paragraphen
// document.querySelector("#content_third p:nth-child(2)").textContent = "Dies ist der zweite Paragraph im dritten Bereich.";


// Funktion zum Zufälligen Anzeigen eines Inhaltsbereichs beim Laden
function showRandomContentSection() {
  const contentSections = document.querySelectorAll(".content");

  // Zuerst alle Bereiche ausblenden (CSS display: none ist in index.html definiert)
  contentSections.forEach(section => {
    section.style.display = "none";
  });

  // Zufällig einen Index auswählen (0, 1 oder 2)
  const randomIndex = Math.floor(Math.random() * contentSections.length);

  // Den zufällig ausgewählten Bereich anzeigen
  if (contentSections[randomIndex]) {
    contentSections[randomIndex].style.display = "block";
    console.log(`Zufällig angezeigt: ${contentSections[randomIndex].id}`);
  }
}

// Funktion beim Laden der Seite aufrufen
showRandomContentSection();

// Beispiel für setAttribute und removeAttribute (hier nicht im Hauptfluss verwendet, da CSS besser ist)
// Let's modify the message div's custom attribute and then remove it
if (messageDiv) {
    messageDiv.setAttribute("data-status", "active");
    console.log("Data-Status von messageDiv:", messageDiv.getAttribute("data-status"));
    // setTimeout(() => {
    //     messageDiv.removeAttribute("data-status");
    //     console.log("Data-Status von messageDiv nach Entfernung:", messageDiv.getAttribute("data-status"));
    // }, 2000);
}


// Funktion zum Hervorheben eines Inhaltsbereichs
function highlightContent(idToHighlight) {
  // 1. Alle vorhandenen Hervorhebungen entfernen
  document.querySelectorAll(".content").forEach(element => {
    element.classList.remove('highlight');
  });

  // 2. Die "highlight"-Klasse zum ausgewählten Element hinzufügen
  const selectedElement = document.getElementById(idToHighlight);
  if (selectedElement) {
    selectedElement.classList.add('highlight');
  }
}

// Beim Laden der Seite einen zufälligen Bereich hervorheben
const highlightIndex = Math.floor(Math.random() * 3);
const highlightIds = ["content_first", "content_second", "content_third"];
highlightContent(highlightIds[highlightIndex]);


// 2.1 DOM-Elemente für den Rezept-Generator abrufen
const generateRecipeBtn = document.getElementById('generateRecipeBtn');
const recipeList = document.getElementById('recipeList');
const recipeTitle = document.getElementById('recipeTitle');
const messageDiv = document.getElementById('message');

console.log("DOM-Elemente erfolgreich abgerufen.");

// 2.2 Beispiel-Array von Rezepten
const recipes = [
  {
    name: "Sommerlicher Salat",
    ingredients: [
      "200g gemischter Salat",
      "100g Kirschtomaten",
      "1 Gurke",
      "50g Feta-Käse",
      "2 EL Olivenöl",
      "1 EL Balsamico-Essig",
      "Salz, Pfeffer"
    ]
  },
  {
    name: "Pasta Pesto",
    ingredients: [
      "250g Spaghetti",
      "100g Basilikumpesto",
      "50g Parmesan",
      "Knoblauchzehe",
      "Pinienkerne",
      "Olivenöl"
    ]
  },
  {
    name: "Gemüse-Curry",
    ingredients: [
      "1 Zwiebel",
      "2 Karotten",
      "1 Zucchini",
      "200g Kichererbsen",
      "400ml Kokosmilch",
      "2 EL Currypulver",
      "Reis als Beilage"
    ]
  },
  {
    name: "Schoko-Muffins",
    ingredients: [
      "150g Mehl",
      "100g Zucker",
      "2 EL Kakao",
      "1 TL Backpulver",
      "1 Prise Salz",
      "1 Ei",
      "100ml Milch",
      "50g geschmolzene Butter",
      "50g Schokostückchen"
    ]
  },
  {
    name: "Frucht-Smoothie",
    ingredients: [
      "1 Banane",
      "100g Beeren (gefroren)",
      "150ml Mandelmilch",
      "1 EL Chiasamen",
      "Optional: Honig zum Süßen"
    ]
  }
];
console.log("Rezeptdaten geladen. Anzahl der Rezepte:", recipes.length);

// 2.3 Hauptfunktion zum Generieren eines zufälligen Rezepts
function generateRandomRecipe() {
  // 2.5 Bestehende Zutatenliste leeren
  recipeList.innerHTML = '';

  // 2.4.1 Zufällig einen Index auswählen
  const randomIndex = Math.floor(Math.random() * recipes.length);

  // 2.4.2 Das Rezept am zufälligen Index auswählen
  const selectedRecipe = recipes[randomIndex];

  console.log("Zufälliges Rezept ausgewählt:", selectedRecipe.name);

  // 2.6 Rezeptnamen im H3-Tag aktualisieren
  recipeTitle.textContent = `Zutaten für: ${selectedRecipe.name}`;
  console.log(`Titel aktualisiert zu: "Zutaten für: ${selectedRecipe.name}"`);

  // 2.7 Zutaten dynamisch zur Liste hinzufügen
  selectedRecipe.ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;

    // 2.8 Bedingte Style-Manipulation: Bestimmte Zutaten hervorheben
    if (ingredient.toLowerCase().includes("öl") ||
        ingredient.toLowerCase().includes("butter") ||
        ingredient.toLowerCase().includes("milch")) {
      listItem.classList.add('highlight-ingredient');
      console.log(`Zutat hervorgehoben: ${ingredient}`);
    }

    recipeList.appendChild(listItem);
    console.log(`Zutat hinzugefügt: ${ingredient}`);
  });

  // 2.9 Nachricht anzeigen, dass ein neues Rezept generiert wurde
  if (messageDiv) {
    messageDiv.innerHTML = `<p>Neues Rezept "<b>${selectedRecipe.name}</b>" generiert!</p>`;
    messageDiv.style.backgroundColor = '#e1f5fe'; // Hellblau
    messageDiv.style.borderColor = '#42a5f5'; // Blau
    console.log(`Statusmeldung: Rezept "${selectedRecipe.name}" generiert.`);
  }
}

// 2.10 Event Listener für den "Rezept generieren"-Button
generateRecipeBtn.addEventListener('click', generateRandomRecipe);
console.log("Event Listener für Button hinzugefügt.");

// 2.11 Initiales Rezept beim Laden der Seite generieren
generateRandomRecipe();
console.log("Initiales Rezept generiert beim Laden der Seite.");