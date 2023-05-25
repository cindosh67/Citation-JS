let citation = document.querySelector("#citation");
let auteur = document.querySelector("#auteur");
let nouveau = document.querySelector("#nouveau");

let dernier = 0;
let nombreAleatoire = 0;
let btn = document.querySelector(".lightsaber");

let citations = [
  [
    "Je ne me tournerai jamais vers le cote obscur. Vous avez echoue, Votre Altesse. Je suis un Jedi, comme mon pere avant moi.",
    "Luke Skywalker",
  ],
  ["Il y a toujours un plus gros poisson.", "Qui Gon Jinn"],
  [
    "Vous ne pouvez pas arreter le changement, pas plus que vous ne pouvez empecher les soleils de se coucher.",
    "Shmi Skywalker",
  ],
  ["D’apres mon experience, la chance n’existe pas.", "Obi Wan"],
  ["C’est un nouveau jour, un nouveau depart.", "Ahsoka Tano"],
  ["Je sais courir sans que tu me tiennes la main!", "Rey"],
  ["La peur est le chemin vers le cote obscur.", "Yoda"],
  ["Soyez conscient de vos pensees Anakin. Ils vous trahiront.", "Obi Wan"],
  ["Un jour, je serai le Jedi le plus puissant de tous les temps.", "Anakin"],
  ["Vous avez vos moments. Pas beaucoup, mais vous en avez.", "Princesse Leia"],
  ["Nous allons redoubler d’efforts!", "Moff Jerjerrod"],
  [
    "La peur est le chemin vers le cote obscur. La peur mene a la colere, la colere mene a la haine, la haine mene a la souffrance. Je sens beaucoup de peur en toi.",
    "Yoda",
  ],
  [
    "Si vous m’abattez, je deviendrai plus puissant que vous ne pouvez l’imaginer.",
    "Obi Wan",
  ],
  ["Entrainez-vous a abandonner tout ce que vous craignez de perdre.", "Yoda"],
];

function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

nouveau.addEventListener("click", () => {
  do {
    nombreAleatoire = genererNombreEntier(citations.length);
  } while (nombreAleatoire == dernier);

  citation.textContent = citations[nombreAleatoire][0];
  auteur.textContent = citations[nombreAleatoire][1];

  console.log(nombreAleatoire, btn);

  // btn.classList.toggle("active");
});
