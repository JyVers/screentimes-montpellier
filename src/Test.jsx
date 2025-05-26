import React, { useState } from "react";

function Test() {
  // Liste des films (on peut imaginer des données dynamiques)
  const movies = [
    {
        "title": "Un parfait inconnu",
        "description": "New York, début des années 60. Au cœur de l’effervescente scène musicale et culturelle de l’époque, un énigmatique jeune homme de 19 ans arrive dans le West Village depuis son Minnesota natal, avec sa guitare et un talent hors normes qui changeront à jamais le cours de la musique américaine. Alors qu’il noue d’intimes relations durant son ascension vers la gloire, il finit par se sentir étouffé par le mouvement folk et, refusant d’être mis dans une case, fait un choix controversé qui aura des répercussions à l’échelle mondiale…",
        "poster": "https://fr.web.img5.acsta.net/r_200_283/img/0b/a6/0ba610c7abe4ed88861e31ff42b3e8ce.jpg",
        "duration": "2h 20",
        "hours": [
            "2025-0-19 18:00 Pathé Comédie",
            "2025-0-19 18:15 Diagonal-Capitole"
        ]
    },
    {
        "title": "Babygirl",
        "description": "Romy, PDG d’une grande entreprise, a tout pour être heureuse : un mari aimant, deux filles épanouies et une carrière réussie. Mais un jour, elle rencontre un jeune stagiaire dans la société qu’elle dirige à New York. Elle entame avec lui une liaison torride, quitte à tout risquer pour réaliser ses fantasmes les plus enfouis…",
        "poster": "https://fr.web.img2.acsta.net/r_200_283/img/0f/3f/0f3f8ece7cfe8d3a8524359c6261475c.jpg",
        "duration": "1h 54",
        "hours": [
            "2025-0-19 14:00 Pathé Comédie",
            "2025-0-19 16:30 Pathé Comédie",
            "2025-0-19 19:00 Pathé Comédie",
            "2025-0-19 21:30 Pathé Comédie",
            "2025-0-19 13:40 Diagonal-Capitole",
            "2025-0-19 16:10 Diagonal-Capitole",
            "2025-0-19 19:35 Diagonal-Capitole"
        ]
    },
    {
        "title": "Pas de vagues",
        "description": "Julien est professeur au collège. Jeune et volontaire, il essaie de créer du lien avec sa classe en prenant sous son aile quelques élèves, dont la timide Leslie.Ce traitement de faveur est mal perçu par certains camarades qui prêtent au professeur d'autres intentions. Julien est accusé de harcèlement.La rumeur se propage. Le professeur et son élève se retrouvent pris chacun dans un engrenage.Mais devant un collège qui risque de s'embraser, un seul mot d'ordre : pas de vagues...",
        "poster": "https://fr.web.img6.acsta.net/r_200_283/pictures/24/02/13/10/33/0660848.jpg",
        "duration": "1h 32",
        "hours": [
            "2025-0-19 11:00 Pathé Comédie"
        ]
    },
    {
        "title": "Un p’tit truc en plus",
        "description": "Pour échapper à la police, un fils et son père en cavale sont contraints de trouver refuge dans une colonie de vacances pour jeunes adultes en situation de handicap, se faisant passer pour un pensionnaire et son éducateur spécialisé. Le début des emmerdes et d’une formidable expérience humaine qui va les changer à jamais.",
        "poster": "https://fr.web.img6.acsta.net/r_200_283/pictures/24/03/01/11/14/2965930.jpg",
        "duration": "1h 39",
        "hours": [
            "2025-0-19 13:00 Pathé Comédie"
        ]
    },
    {
        "title": "L'Amour au présent",
        "description": "Almut et Tobias voient leur vie à jamais bouleversée lorsqu'une rencontre accidentelle les réunit. Une romance profondément émouvante sur les instants qui nous changent, et ceux qui nous construisent.",
        "poster": "https://fr.web.img6.acsta.net/r_200_283/img/c6/7d/c67d718699bb1158eace4179794b6861.jpg",
        "duration": "1h 48",
        "hours": [
            "2025-0-19 13:10 Pathé Comédie",
            "2025-0-19 15:40 Pathé Comédie",
            "2025-0-19 18:30 Pathé Comédie"
        ]
    },
    {
        "title": "La Chambre d’à côté",
        "description": "Ingrid et Martha, amies de longue date, ont débuté leur carrière au sein du même magazine. Lorsqu’Ingrid devient romancière à succès et Martha, reporter de guerre, leurs chemins se séparent. Mais des années plus tard, leurs routes se recroisent dans des circonstances troublantes…",
        "poster": "https://fr.web.img6.acsta.net/r_200_283/img/9d/53/9d53ba520423b0b6dc500e615cf8d09e.jpg",
        "duration": "1h 47",
        "hours": [
            "2025-0-19 13:15 Pathé Comédie",
            "2025-0-19 15:30 Pathé Comédie",
            "2025-0-19 17:45 Pathé Comédie",
            "2025-0-19 20:00 Pathé Comédie",
            "2025-0-19 22:15 Pathé Comédie",
            "2025-0-19 13:40 Diagonal-Capitole",
            "2025-0-19 16:00 Diagonal-Capitole",
            "2025-0-19 21:00 Diagonal-Capitole"
        ]
    },
    {
        "title": "Sonic 3 - le film",
        "description": "Sonic, Knuckles et Tails se retrouvent face à un nouvel adversaire, Shadow, mystérieux et puissant ennemi aux pouvoirs inédits. Dépassée sur tous les plans, la Team Sonic va devoir former une alliance improbable pour tenter d’arrêter Shadow et protéger notre planète.",
        "poster": "https://fr.web.img4.acsta.net/r_200_283/img/85/e7/85e77c51c172da4aec13679210295a11.jpg",
        "duration": "1h 49",
        "hours": [
            "2025-0-19 13:15 Pathé Comédie",
            "2025-0-19 18:00 Pathé Comédie"
        ]
    },
    {
        "title": "Mufasa : Le Roi Lion",
        "description": "Rafiki raconte à la jeune lionne Kiara - la fille de Simba et Nala – la légende de Mufasa. Il est aidé en cela par Timon et Pumbaa. Relatée sous forme de flashbacks, l'histoire de Mufasa est celle d’un lionceau orphelin qui, un jour, fait la connaissance du sympathique Taka, héritier d'une lignée royale.",
        "poster": "https://fr.web.img2.acsta.net/r_200_283/img/f5/f2/f5f2447c4246e42eb3e69040605d7cf1.jpg",
        "duration": "1h 58",
        "hours": [
            "2025-0-19 13:45 Pathé Comédie",
            "2025-0-19 16:15 Pathé Comédie",
            "2025-0-19 18:45 Pathé Comédie",
            "2025-0-19 21:30 Pathé Comédie"
        ]
    },
    {
        "title": "Vaiana 2",
        "description": "Après avoir reçu une invitation inattendue de ses ancêtres, Vaiana entreprend un périple qui la conduira jusqu’aux eaux dangereuses situées aux confins des mers des îles du Pacifique. Elle y vivra des péripéties comme jamais vécues auparavant.",
        "poster": "https://fr.web.img6.acsta.net/r_200_283/img/9e/c9/9ec9a076d8516b78e1923dd76806f13e.jpg",
        "duration": "1h 40",
        "hours": [
            "2025-0-19 14:00 Pathé Comédie",
            "2025-0-19 16:15 Pathé Comédie"
        ]
    },
    {
        "title": "Dune : Deuxième Partie",
        "description": "Dans DUNE : DEUXIÈME PARTIE, Paul Atreides s’unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Hanté par de sombres prémonitions, il se trouve confronté au plus grand des dilemmes : choisir entre l’amour de sa vie et le destin de l’univers.",
        "poster": "https://fr.web.img4.acsta.net/r_200_283/pictures/24/01/26/10/18/5392835.jpg",
        "duration": "2h 46",
        "hours": [
            "2025-0-19 14:00 Pathé Comédie"
        ]
    }
  ]

  // État pour suivre la visibilité des films
  const [visibleMovies, setVisibleMovies] = useState(
    movies.map(() => true) // Initialiser tous les films comme visibles
  );

  console.log(visibleMovies)
  // Gestion du changement d'une checkbox
  const handleCheckboxChange = (index) => {
    const updatedVisibility = [...visibleMovies];
    updatedVisibility[index] = !updatedVisibility[index]; // Inverser la visibilité
    setVisibleMovies(updatedVisibility);
  };

  return (
    <div>
      {/* Section des checkboxes */}
      <div>
        {movies.map((movie, index) => (
          <div key={movie.id}>
            <label>
              <input
                type="checkbox"
                checked={visibleMovies[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              {movie.title}
            </label>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="card"
            style={{
              width: "200px",
              height: "150px",
              margin: "10px",
              backgroundColor: "lightblue",
              display: visibleMovies[index] ? "block" : "none", // Masquer ou afficher
              textAlign: "center",
              lineHeight: "150px",
            }}
          >
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
