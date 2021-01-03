/*
Exercice : questions de quiz
*/

// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
let questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "Combien font 9*8 ?",
        reponse: "9*8 = 72"
    },
    {
        enonce: "Quelle est la capitale de la France ?",
        reponse: "La capitale de la France est Paris"
    },
    {
        enonce: "Quelle est la capitale de l'Allemagne ?",
        reponse: "La capitale de l'Allemagne est Berlin"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "Combien font 7*5 ?",
        reponse: "7*5 = 35"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

let i = 1; // Permet de numéroter les questions

questions.forEach(function (question) {
    // Titre de la question
    var titreElt = document.createElement("strong");
    titreElt.textContent = "Question " + i + " : ";

    // Enoncé de la question (dans une balise <i>)
    var texteEnonceElt = document.createElement("i");
    texteEnonceElt.textContent = question.enonce;

    // Enoncé de la question
    var enonceElt = document.createElement("div");
    enonceElt.appendChild(titreElt);
    enonceElt.appendChild(texteEnonceElt);

    // La zone de réponse contient initialement un bouton
    var zoneReponseElt = document.createElement("div");
    var boutonElt = document.createElement("button");
    boutonElt.classList = "bouton";
    boutonElt.textContent = "Afficher la réponse";
    zoneReponseElt.appendChild(boutonElt);

    let blancElt = document.createElement("br");
    zoneReponseElt.appendChild(blancElt);
    

    boutonElt.addEventListener("click", function () {
        // Remplacement du bouton par la réponse à la question
        var reponseElt = document.createElement("div");
        reponseElt.textContent = question.reponse;
        zoneReponseElt.innerHTML = "";
        zoneReponseElt.appendChild(reponseElt);
    });

    // La question regroupe l'énoncé et la zone de réponse
    var questionElt = document.createElement("p");
    questionElt.appendChild(enonceElt);
    questionElt.appendChild(zoneReponseElt);
    document.getElementById("contenu").appendChild(questionElt);

    i++;
});