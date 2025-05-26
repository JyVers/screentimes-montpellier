import { useState } from 'react'

import {Cards} from './components/Cards.jsx'
import {Checkboxes} from './components/Checkboxes.jsx'
import {Movie} from './components/Movie.jsx'
import {Test} from './components/Test.jsx'
import {CinemaTimeline} from './components/Timeline.jsx'

import axios from 'axios'
import larrow from './img/l-arrow.svg'
import rarrow from './img/r-arrow.svg'

/*const movies = await axios.get(`http://localhost:8000/movies`)
   .then(res => {
     return res.data
})*/

const movies = [
  {
    "title": "Queer",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/c7/ab/c7ab387810a54ca7b21c6aa7c1af53ca.jpg",
    "description": "Dans le Mexico des années 50, Lee, un américain, mène une vie désabusée au sein d'une communauté d’expatriés. L'arrivée du jeune Allerton va bouleverser l’existence de Lee, et faire renaitre en lui des sentiments oubliés.",
    "duration": "2h16",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "16:20",
            "13:30",
            "19:10",
            "21:40"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:35",
            "15:30",
            "20:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "19:10",
            "10:45",
            "13:30",
            "16:20",
            "21:40"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:30",
            "15:40",
            "20:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:10",
            "16:00",
            "18:50",
            "21:30"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:30",
            "15:30",
            "20:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "19:10",
            "13:30",
            "16:20",
            "21:40"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:30",
            "15:30",
            "20:15"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "16:00",
            "20:00"
          ]
        }
      ]
    }
  },
  {
    "title": "The Brutalist",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/22/ab/22ab82f07f1f92122491ae6c19210277.jpg",
    "description": "L'histoire, sur près de trente ans, d'un architecte juif né en Hongrie, László Toth. Revenu d'un camp de concentration, il émigre avec sa femme, Erzsébet, après la fin de la Seconde Guerre mondiale aux Etats-Unis pour connaître son \" rêve américain \".",
    "duration": "3h34",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "13:15",
            "17:30",
            "20:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "16:45",
            "20:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "14:00",
            "18:20",
            "20:10"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "13:15",
            "17:20",
            "20:00"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "17:30"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "13:15",
            "17:30",
            "20:10"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "19:15"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "19:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Captain America: Brave New World",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/92/55/9255d9aeb17004f6a622cc47e573777e.jpg",
    "description": "Peu après avoir fait la connaissance du nouveau président des Etats-Unis Thaddeus Ross, Sam Wilson se retrouve plongé au coeur d'un gigantesque incident international. Dans une lutte acharnée contre la montre, il se retrouve contraint de découvrir la raison de cet infâme complot avant que le véritable cerveau de l’opération ne mette bientôt le monde entier à feu et à sang…",
    "duration": "1h58",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:15",
            "15:50",
            "18:20",
            "21:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:10",
            "14:00",
            "15:50",
            "16:15",
            "16:45",
            "18:30",
            "19:00",
            "19:30",
            "21:15",
            "21:45",
            "22:15"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:40",
            "17:40",
            "11:10",
            "16:20"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "11:00",
            "14:00",
            "15:50",
            "16:15",
            "16:45",
            "18:30",
            "19:00",
            "19:30",
            "21:00",
            "21:15",
            "21:45",
            "22:15",
            "13:10"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "13:00",
            "15:30",
            "18:00",
            "21:30"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:10",
            "14:00",
            "15:50",
            "16:15",
            "16:45",
            "17:45",
            "18:30",
            "19:00",
            "19:30",
            "20:30",
            "21:15",
            "21:45",
            "22:15",
            "10:30"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:15",
            "15:50",
            "18:20",
            "21:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "11:00",
            "13:10",
            "14:00",
            "15:50",
            "16:15",
            "16:45",
            "17:45",
            "19:00",
            "19:30",
            "20:30",
            "21:15",
            "21:45",
            "22:15",
            "18:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Paddington au Pérou",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/3d/88/3d888f3f864049f77bc99b83f246312d.jpg",
    "description": "Alors que Paddington rend visite à sa tante Lucy bien-aimée, qui réside désormais à la Maison des ours retraités au Pérou, la famille Brown et notre ours préféré plongent dans un voyage inattendu et plein de mystères.",
    "duration": "1h45",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:15",
            "15:30",
            "17:45"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:30",
            "14:00",
            "15:30",
            "18:00",
            "20:15"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:15",
            "15:30"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "11:00",
            "13:30",
            "14:00",
            "15:30",
            "18:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:00",
            "15:20",
            "17:45"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "14:00",
            "15:15"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "15:30"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "14:00",
            "15:15"
          ]
        }
      ]
    }
  },
  {
    "title": "God Save the Tuche",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/e1/22/e12277d75be8466492265681d0327c11.jpg",
    "description": "Les Tuche mènent à nouveau une vie paisible à Bouzolles. Mais lorsque le petit-fils de Jeff et Cathy est sélectionné pour un stage de football à Londres, c’est l’occasion rêvée pour toute la famille d’aller découvrir l’Angleterre et de rencontrer la famille royale. Entre chocs culturels et maladresses, les Tuche se retrouvent plongés au cœur de la royauté anglaise, qui n’est pas près d’oublier leur séjour !",
    "duration": "1h35",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:15",
            "15:30",
            "17:40",
            "20:00",
            "22:10"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:15",
            "15:30",
            "17:40",
            "20:00",
            "22:10"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "14:15",
            "15:30",
            "17:45",
            "20:00",
            "22:15"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:00",
            "15:10"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:15",
            "15:30",
            "17:45",
            "20:00",
            "22:15"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:15",
            "15:30",
            "17:40",
            "20:00",
            "22:10"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:15",
            "15:30",
            "17:45",
            "20:00",
            "22:15"
          ]
        }
      ]
    }
  },
  {
    "title": "Bridget Jones : folle de lui",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/a9/28/a9285e78d0a6d8ea9451c6e7efffcbd3.jpg",
    "description": "Bridget Jones a cinquante-deux ans et deux enfants. Après le décès de Mark Darcy, avec qui elle a vécu dix ans de bonheur, elle est à nouveau en quête de l'homme idéal. Mais ce n'est pas si facile de se remettre sur le marché du célibat.",
    "duration": "2h04",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:40",
            "16:20",
            "19:00",
            "21:45"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:45",
            "16:30",
            "19:15",
            "22:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "11:00",
            "16:20",
            "19:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "16:30",
            "19:15",
            "22:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "19:00",
            "21:45"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "16:30",
            "19:15",
            "22:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "16:30",
            "19:15",
            "22:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Mercato",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/6d/d2/6dd27c0509edb48b13cc65d51915a1fe.jpg",
    "description": "Mercato nous plonge dans les coulisses du football d’aujourd’hui, industrie planétaire où les intérêts se chiffrent en milliards. Driss, agent de joueurs, a sept jours pour sauver sa peau avant la fin du mercato...",
    "duration": "1h59",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:45",
            "16:30",
            "19:10",
            "21:40"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:45",
            "21:40"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "16:30",
            "19:10",
            "21:40"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:45",
            "16:30",
            "19:10",
            "21:40"
          ]
        }
      ]
    }
  },
  {
    "title": "Companion",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/4f/fe/4ffee73796c73bcc7b7f695ef6a18f61.jpg",
    "description": "Josh et Iris semblent incarner le couple parfait. Mais lors d’un week-end entre amis qui vire au drame, un secret bien gardé fait tout basculer…",
    "duration": "1h37",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "22:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "22:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "22:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Jouer avec le feu",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/02/c2/02c28607beda37fdf319f91f48c08e71.jpg",
    "description": "Pierre élève seul ses deux fils. Louis, le cadet, réussit ses études et avance facilement dans la vie. Fus, l’aîné, part à la dérive. Fasciné par la violence et les rapports de force, il se rapproche de groupes d’extrême-droite, à l’opposé des valeurs de son père. Pierre assiste impuissant à l’emprise de ces fréquentations sur son fils. Peu à peu, l’amour cède place à l’incompréhension…",
    "duration": "1h58",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "11:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "19:10"
          ]
        },
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "19:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:20"
          ]
        },
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "13:55"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "17:40"
          ]
        },
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "17:35"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "16:35"
          ]
        }
      ]
    }
  },
  {
    "title": "From Ground Zero",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/94/c8/94c8a609c2d1f4f228a47f9df75af41c.jpg",
    "description": "Anthologie de 22 courts métrages réalisés à Gaza depuis la guerre actuelle.",
    "duration": "1h52",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:05"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:15"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:40"
          ]
        }
      ]
    }
  },
  {
    "title": "La Pie voleuse",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/42/c6/42c6f777895d0e99eaf4ff97b45f9216.jpg",
    "description": "Maria n’est plus toute jeune et aide des personnes plus âgées qu’elle. Tirant le diable par la queue, elle ne se résout pas à sa précaire condition et, par-ci par-là, vole quelques euros à tous ces braves gens dont elle s’occupe avec une dévotion extrême… et qui, pour cela, l’adorent… Pourtant une plainte pour abus de faiblesse conduira Maria en garde à vue…",
    "duration": "1h41",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "11:20"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "15:35"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "13:40"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "16:10"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:45"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "16:40"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Babygirl",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/0f/3f/0f3f8ece7cfe8d3a8524359c6261475c.jpg",
    "description": "Romy, PDG d’une grande entreprise, a tout pour être heureuse : un mari aimant, deux filles épanouies et une carrière réussie. Mais un jour, elle rencontre un jeune stagiaire dans la société qu’elle dirige à New York. Elle entame avec lui une liaison torride, quitte à tout risquer pour réaliser ses fantasmes les plus enfouis…",
    "duration": "1h54",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "13:15"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:05"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:05"
          ]
        }
      ]
    }
  },
  {
    "title": "La Chambre d’à côté",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/9d/53/9d53ba520423b0b6dc500e615cf8d09e.jpg",
    "description": "Ingrid et Martha, amies de longue date, ont débuté leur carrière au sein du même magazine. Lorsqu’Ingrid devient romancière à succès et Martha, reporter de guerre, leurs chemins se séparent. Mais des années plus tard, leurs routes se recroisent dans des circonstances troublantes…",
    "duration": "1h47",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "13:15"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:50"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:20"
          ]
        }
      ]
    }
  },
  {
    "title": "Emilia Pérez",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/bf/98/bf982c02ee39e172a259a3face755554.jpg",
    "description": "Surqualifiée et surexploitée, Rita use de ses talents d’avocate au service d’un gros cabinet plus enclin à blanchir des criminels qu’à servir la justice. Mais une porte de sortie inespérée s’ouvre à elle, aider le chef de cartel Manitas à se retirer des affaires et réaliser le plan qu’il peaufine en secret depuis des années : devenir enfin la femme qu’il a toujours rêvé d’être.",
    "duration": "2h10",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "13:20"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "19:15"
          ]
        },
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "19:50"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:15"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:35"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:50"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "12:10"
          ]
        }
      ]
    }
  },
  {
    "title": "Une guitare à la mer",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/02/5c/025c1bfd6e252d0c456cfc9fcb6ca9f9.jpg",
    "description": "Programme de 3 courts métrages d'animation. C’est l’histoire d’une fouine qui voudrait vivre comme elle l’entend, d’un garçon qui rencontre un tout petit monstre par une nuit de pleine lune, et d’une famille de capybaras et d’un poussin qui n’auraient jamais dû se rencontrer.",
    "duration": "0h56",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "15:20"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "15:40"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "16:40"
          ]
        }
      ]
    }
  },
  {
    "title": "Beurk !",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/e1/8e/e18ea4348d909aae2054e8850fc3709a.jpg",
    "description": "Programme de 5 courts-métrages d’animation.",
    "duration": "0h45",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "15:25"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "15:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Young Hearts",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/eb/fc/ebfc1e74ee0d37f041cf6daeafb1b7b0.jpg",
    "description": "Elias, 14 ans, vit dans un petit village de Flandre. Lorsque Alexander, son nouveau voisin du même âge venant de Bruxelles, emménage en face de chez lui, Elias réalise qu’il est en train de tomber amoureux pour la première fois. Il devra alors faire face au chaos intérieur provoqué par ses sentiments naissants afin de vivre pleinement son histoire avec Alexander et de la révéler à tous.",
    "duration": "1h37",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "15:50"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "15:40"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "17:50"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "12:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Le Miroir aux alouettes",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/ce/16/ce16989c015485f7307594a9e5181efb.jpg",
    "description": "1942. Dans un village slovaque, Tono, menuisier sans histoire, loin des idées fascistes, accepte de son beau-frère, chef de la milice locale, la gérance d'une mercerie, appartenant à une dame Juive, Madame Lautmannová. Âgée et presque sourde, elle ignore tout des nouvelles lois raciales : elle le prend pour un assistant. Une complicité inattendue naît bientôt entre ces deux êtres que tout oppose…",
    "duration": "2h07",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:25"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:45"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:15"
          ]
        }
      ]
    }
  },
  {
    "title": "Maria",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/9f/3b/9f3b22aa6ece5208b801528245041e81.jpg",
    "description": "La vie de la plus grande chanteuse d’opéra du monde, Maria Callas, lors de ses derniers jours, en 1977, à Paris.",
    "duration": "2h03",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:30"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:20"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "15:55"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:20"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "13:15"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:40"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "13:15"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "12:05"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:30"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:00"
          ]
        },
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Mon gâteau préféré",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/2a/29/2a297c63dfe1f721eafea530bdffde5c.jpg",
    "description": "Mahin a 70 ans et vit seule à Téhéran. Bravant tous les interdits, elle décide de réveiller sa vie amoureuse et provoque une rencontre avec Faramarz, chauffeur de taxi. Leur soirée sera inoubliable.",
    "duration": "1h36",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "15:15"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "12:05"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "21:05"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:15"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:40"
          ]
        }
      ]
    }
  },
  {
    "title": "La Mer au loin",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/29/0e/290eec4ec9e8708e7b1b03af3a452163.jpg",
    "description": "Nour, 27 ans, a émigré clandestinement à Marseille. Avec ses amis, il vit de petits trafics et mène une vie marginale et festive… Mais sa rencontre avec Serge, un flic charismatique et imprévisible, et sa femme Noémie, va bouleverser son existence. De 1990 à 2000, Nour aime, vieillit et se raccroche à ses rêves.",
    "duration": "1h57",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:30"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "13:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "17:55"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:30"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:50"
          ]
        }
      ]
    }
  },
  {
    "title": "Je suis toujours là",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/f1/a8/f1a878b912b2e9a130fc3263e521b0a2.jpg",
    "description": "Rio, 1971, sous la dictature militaire. Rubens, père de famille, est arrêté par des hommes du régime et disparait sans laisser de traces. Sa femme Eunice et ses cinq enfants mèneront alors un combat acharné pour la recherche de la vérité...",
    "duration": "2h15",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:50"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:05"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:30"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "17:40"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "12:05"
          ]
        }
      ]
    }
  },
  {
    "title": "Un parfait inconnu",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/7b/09/7b09c04859a7716e5fc78882f2f4b530.jpg",
    "description": "New York, 1961. Alors que la scène musicale est en pleine effervescence et que la société est en proie à des bouleversements culturels, un énigmatique jeune homme de 19 ans débarque du Minnesota avec sa guitare et son talent hors normes qui changeront à jamais le cours de la musique américaine.",
    "duration": "2h20",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "16:00",
            "21:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "17:10"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:40"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "18:25"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "14:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Bonjour l’asile",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/e1/dc/e1dcf7edfcb78368c6a6103d19d91842.jpg",
    "description": "Jeanne quitte quelques jours le stress de la vie urbaine pour aller voir sa grande amie Elisa, récemment installée à la campagne. Au cœur des bois voisins, un château abandonné devenu tiers-lieu, foisonne d’initiatives collectives. Elisa aimerait s'y investir, mais entre biberons et couches lavables, elle n'en a pas le temps. Jeanne, en militante des villes, n'y voit aucun intérêt. Quant à Amaury, promoteur en hôtellerie de luxe, le château, lui, il veut l'acheter. Tous trois convergent malgré eux vers ce lieu d’entraide et de subversion... Mais combien de temps cet asile d’aujourd’hui pourra-t-il résister à ce monde de fou ?",
    "duration": "1h47",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:40",
            "19:30"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "14:00",
            "19:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "15:30",
            "19:30"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "14:00",
            "19:40"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:35"
          ]
        }
      ]
    }
  },
  {
    "title": "L’Énigme Velázquez",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/4b/2c/4b2c163864f89f251c119f737775d6e4.jpg",
    "description": "Diego Velázquez, peintre des rois et des humbles, maître du hors-champ et des mises en abyme, se trouve au cœur d’un voyage cinématographique défiant les conventions.",
    "duration": "1h30",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:40",
            "18:10"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:50",
            "17:35"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:45",
            "19:45"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "17:45"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:50"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:45"
          ]
        }
      ]
    }
  },
  {
    "title": "A Real Pain",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/e2/fe/e2fef695bb16493195f32c606ceaf275.jpg",
    "description": "Deux cousins aux caractères diamétralement opposés - David et Benji - se retrouvent à l’occasion d’un voyage en Pologne afin d’honorer la mémoire de leur grand-mère bien-aimée.",
    "duration": "1h29",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:40",
            "16:10",
            "19:40"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:50",
            "16:00",
            "19:50"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "15:30",
            "19:15",
            "13:15",
            "21:20"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:40",
            "16:00",
            "19:40"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:15",
            "13:15",
            "17:45",
            "21:30",
            "15:30",
            "19:15"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:40",
            "16:00",
            "20:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:15",
            "15:30",
            "19:15",
            "11:15",
            "17:45",
            "21:20"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:45",
            "15:40",
            "21:15"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:50",
            "15:40",
            "21:15"
          ]
        }
      ]
    }
  },
  {
    "title": "Yōkai - le monde des esprits",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/b5/c1/b5c15f866989b190741047a03abafecc.jpg",
    "description": "Une célèbre chanteuse s’envole au Japon pour un dernier concert à guichet fermé. Lorsque le concert prend fin, sa vie sur terre s’arrête aussi. Une nouvelle vie inattendue s’offre alors à elle : un au-delà dans lequel l’un de ses plus grands fans l’attend.",
    "duration": "1h34",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:45",
            "19:45"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:45",
            "19:45"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:45",
            "17:45"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:45",
            "17:50"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:45"
          ]
        }
      ]
    }
  },
  {
    "title": "À bicyclette !",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/9c/f8/9cf8cf27a2706be4849760190dddd37b.jpg",
    "description": "De l’Atlantique à la mer Noire, Mathias embarque son meilleur ami Philippe dans un road trip à bicyclette. Ensemble ils vont refaire le voyage que Youri, son fils, avait entrepris avant de disparaitre tragiquement. Une épopée qu’ils traverseront avec tendresse, humour et émotion.",
    "duration": "1h29",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "14:00",
            "15:45",
            "19:35"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "14:00",
            "15:45",
            "18:10"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "15:45",
            "17:45",
            "19:45"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "14:00",
            "15:45",
            "19:35"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "15:45",
            "17:45",
            "19:45"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "15:45",
            "19:30"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "15:45",
            "17:45",
            "19:45"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:45",
            "18:30"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:35",
            "17:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Cronos",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/6e/04/6e04ef107e2accfeac422d42b78ddbd5.jpg",
    "description": "Au XVIème siècle, un alchimiste invente un étrange mécanisme permettant d’accéder à la vie éternelle. Lorsqu'un vieil antiquaire découvre l’horloge de Cronos, elle lui injecte un puissant venin qui lui redonne force et jeunesse, mais le rend dépendant au sang humain.",
    "duration": "1h33",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "21:20"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "17:50"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "21:30"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "21:15"
          ]
        }
      ]
    }
  },
  {
    "title": "La Pampa",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/e8/eb/e8ebe822aceda3fc71ca06da2d73fa95.jpg",
    "description": "Willy et Jojo, deux ados inséparables, passent leur temps à chasser l’ennui dans un petit village au cœur de la France. Ils se sont fait une promesse : ils partiront bientôt pour la ville. Mais Jojo cache un secret. Et quand tout le village le découvre, les rêves et les familles des deux amis volent en éclat.",
    "duration": "1h43",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:35"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:50"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "12:00"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "21:05"
          ]
        }
      ]
    }
  },
  {
    "title": "Prima la vita",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/a8/c8/a8c89e4ef25dafa5e73b341033e79fe6.jpg",
    "description": "Un père et sa fille habitent les mondes de l’enfance. Il lui parle avec respect et sérieux, comme à une grande personne, il l’entraine dans des univers magiques débordants de vie et d’humanité. Il est le grand cinéaste de l’enfance et travaille sur Pinocchio. Un jour, la petite fille devient une jeune femme et l’enchantement disparait. Elle comprend que la rupture avec l’enfance est inéluctable et a le sentiment qu’elle ne sera plus jamais à la hauteur de son père. Alors elle commence à lui mentir et se laisse aller, jusqu’au bord du gouffre. Le père ne fera pas semblant de ne pas voir. Il sera là pour elle, tout le temps qu’il faut.",
    "duration": "1h50",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:45"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:30"
          ]
        }
      ]
    }
  },
  {
    "title": "September & July",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/6e/15/6e15f23ef2b1c085e494afa0dbdf35b5.jpg",
    "description": "Les sœurs July et September sont inséparables. Leur dynamique particulière est une préoccupation pour leur mère célibataire, Sheela. Après un événement mystérieux, elles se réfugient toutes les trois dans une maison de campagne, mais tout a changé…",
    "duration": "1h40",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:50"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:35"
          ]
        }
      ]
    }
  },
  {
    "title": "L’Attachement",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/83/a4/83a423a22c4438f3ecae29e227b2f6a9.jpg",
    "description": "Sandra, quinquagénaire farouchement indépendante, partage soudainement et malgré elle l’intimité de son voisin de palier et de ses deux enfants. Contre toute attente, elle s’attache peu à peu à cette famille d’adoption.",
    "duration": "1h45",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "15:40",
            "21:15"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "15:40",
            "21:15"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "13:30",
            "16:00",
            "18:30",
            "21:00"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "15:40",
            "21:15"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "13:30",
            "16:00",
            "18:30",
            "21:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "15:40",
            "19:35"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "13:30",
            "16:00",
            "18:30",
            "21:00"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:35",
            "18:00"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:45",
            "17:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Hola Frida",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/b8/8a/b88af4a1cfcf0df8e8a53cb6ce25055b.jpg",
    "description": "C’est l’histoire d’une petite fille différente. Son monde, c’est Coyoacan au Mexique. Pétillante, vibrante, tout l’intéresse. Et lorsque les épreuves se présentent, elle leur fait face grâce à un imaginaire débordant. Cette petite fille s’appelle Frida Kahlo !",
    "duration": "1h22",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "14:15"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "16:15"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "15:50"
          ]
        }
      ]
    }
  },
  {
    "title": "Géniales !",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/ee/3b/ee3bfa8fa11ad1213889420794df5d24.jpg",
    "description": "Le programme GÉNIALES ! regroupe 4 courts métrages dans lesquels les héroïnes vont user de leur intelligence et créativité pour améliorer la vie de ceux ou celles qu’elles aiment. Quatre films qui donnent aux filles le pouvoir de changer les choses !",
    "duration": "0h52",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "16:15"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:15"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "16:10"
          ]
        }
      ]
    }
  },
  {
    "title": "La Vie devant moi",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/af/10/af1099ea1c5bf399ba4587afd4683474.jpg",
    "description": "En 1942, Tauba, une adolescente pleine d’énergie, échappe de justesse avec ses parents à la rafle du Vel d’Hiv. Un couple, les Dinanceau, leur propose de les cacher provisoirement dans un minuscule débarras de leur immeuble, sous les toits de Paris, le temps que les choses se calment. Malheureusement, ce qui devait être temporaire s’éternise, et la famille s’enfonce dans le silence et l’immobilité. Mais Tauba est une battante, et rien ne l’empêchera de bousculer son destin.",
    "duration": "1h31",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:00",
            "15:10",
            "17:15",
            "19:30"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:00",
            "15:10",
            "17:15",
            "19:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:00",
            "15:10",
            "17:15",
            "19:30"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:00",
            "15:10",
            "17:15",
            "19:30"
          ]
        }
      ]
    }
  },
  {
    "title": "L’Attaque des titans : La dernière attaque",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/85/87/8587ee48e2e8f521fd4afbf7894715e5.jpg",
    "description": "monstrueuses nommées \"titans\". Mais ce siècle de paix vole en éclats lorsqu'une attaque soudaine ravage une cité entière, privant de sa mère le jeune Eren Jäger, un garçon qui jure de se venger des titans. Plusieurs années après son enrôlement dans le bataillon d’exploration, Eren fait face à un adversaire redoutable et en retire un pouvoir unique qui lui révèle une vérité insoupçonnée sur le monde qu'il pensait connaître.",
    "duration": "2h25",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VO",
          "hours": [
            "18:00",
            "21:00"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VO",
          "hours": [
            "18:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Avec ou sans enfants ?",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/d5/75/d575de80bd018c40b94bd5221ea5b71b.jpg",
    "description": "Quand Pio et Anaïs annoncent leur mariage à leurs amis, c’est clair : ce sera SANS enfants. Trois jours de fête et de Prosecco en perspective ! Mais quand leur bande de potes débarque AVEC les enfants, pensant pouvoir les cacher aux mariés, les catastrophes vont (très) vite arriver…",
    "duration": "1h26",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:30",
            "21:35"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:15",
            "21:35"
          ]
        }
      ]
    }
  },
  {
    "title": "Mufasa : Le Roi Lion",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/f5/f2/f5f2447c4246e42eb3e69040605d7cf1.jpg",
    "description": "Rafiki raconte à la jeune lionne Kiara - la fille de Simba et Nala – la légende de Mufasa. Il est aidé en cela par Timon et Pumbaa. Relatée sous forme de flashbacks, l'histoire de Mufasa est celle d’un lionceau orphelin qui, un jour, fait la connaissance du sympathique Taka, héritier d'une lignée royale.",
    "duration": "1h58",
    "reservations": {
      "Sat Mar 01 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "14:00",
            "16:40",
            "19:15",
            "21:50"
          ]
        }
      ],
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "10:45"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "14:00",
            "16:40",
            "19:15",
            "21:50"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "17:25"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Padmaavat",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/ca/a1/caa1c7eaf31bdbbaa96bc9e1fdce6c7f.jpg",
    "description": "En 1303 dans l'Inde médiévale. Padmaavat est une histoire d'honneur, de courage et d'obsession. La reine Padmavati est connue pour sa beauté exceptionnelle ainsi que pour son sens aigu de la justice. Elle est l'épouse de Maharawal Ratan Singh et la fierté de Chittor, un royaume prospère du nord- ouest de l'Inde. La légende de sa beauté atteint Allaudin Khilji, le sultan régnant de l'Hindoustan.",
    "duration": "2h44",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "15:00"
          ]
        }
      ]
    }
  },
  {
    "title": "En fanfare",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/64/74/647422e028e4ec2074828047f69efa08.jpg",
    "description": "Thibaut est un chef d’orchestre de renommée internationale qui parcourt le monde. Lorsqu’il apprend qu’il a été adopté, il découvre l’existence d’un frère, Jimmy, employé de cantine scolaire et qui joue du trombone dans une fanfare du nord de la France. En apparence tout les sépare, sauf l’amour de la musique. Détectant les capacités musicales exceptionnelles de son frère, Thibaut se donne pour mission de réparer l’injustice du destin. Jimmy se prend alors à rêver d’une autre vie…",
    "duration": "1h44",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "13:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "12:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "17:45"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "13:40"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "17:45"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "14:40"
          ]
        }
      ]
    }
  },
  {
    "title": "Mulholland Drive",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/pictures/21/12/08/16/03/5133751.jpg",
    "description": "Un violent accident de voiture sur la route de Mulholland Drive sauve une femme de ses poursuivants. Hagarde, la belle s’enfonce dans la nature et se réfugie dans une demeure inoccupée. Le lendemain, Betty Elms débarque à l’aéroport de Los Angeles. Actrice, elle compte bien devenir une star, et sa tante, partie sur un tournage, lui prête son appartement. Dans la salle de bains, Betty découvre avec surprise l’accidentée, terrée et terrifiée. Prise de compassion pour l’infortunée, qui se révèle amnésique, elle décide de l’héberger tout en l’aidant à retrouver peu à peu des bribes de son passé. Leurs seuls indices résident dans un sac rempli d’argent et une mystérieuse clé bleue...",
    "duration": "2h26",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Le Festin chinois",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/a6/e0/a6e0410b1332cfee39f98369279c7743.jpg",
    "description": "Afin de pouvoir émigrer au Canada, un jeune mafieux hong-kongais doit obtenir un diplome de cuisinier. C'est ainsi qu'il atterrit dans un grand restaurant qui s'apprête à disputer un grand tournoi culinaire.",
    "duration": "1h40",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "19:15"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "11:50"
          ]
        }
      ]
    }
  },
  {
    "title": "Les Fabuleuses au cinéma ! #3",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/commons/v9/common/empty/empty_portrait.png",
    "description": "Une conférence de Nora Bouazzouni + projection du court-métrage Les dents du bonheur de Joséphine Darcy Hopkins",
    "duration": "2h00",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Le Dernier souffle",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/76/8e/768e7594c9922642594f3a897e72f788.jpg",
    "description": "Dans un dialogue amical et passionné, le docteur Augustin Masset et l’écrivain Fabrice Toussaint se confrontent pour l’un à la fin de vie de ses patients et pour l’autre à sa propre fatalité. Emportés par un tourbillon de visites et de rencontres, tous deux démarrent un voyage sensible entre rires et larmes : une aventure humaine au cœur de notre vie à tous.",
    "duration": "1h39",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:45"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Quatre nuits d'un rêveur",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/c5/7b/c57bc7bf87e45648d421d860f1df445f.jpg",
    "description": "Une nuit, à Paris, Jacques sauve Marthe d’un saut tragique du Pont-Neuf. Alors qu’ils se livrent l’un à l’autre, ils décident de se revoir. Durant quatre soirées, Jacques réalise qu’il tombe profondément amoureux. Mais qu’en est-il des sentiments de Marthe à l’égard de Jacques ?",
    "duration": "1h23",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "12:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "12:00"
          ]
        }
      ]
    }
  },
  {
    "title": "La Fabrique du mensonge",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/e4/0f/e40f69d322e69177488af33002db9a83.png",
    "description": "A l’aube de la Seconde Guerre mondiale, Joseph Goebbels est devenu l’éminence grise d'Hitler. Convaincu que la domination du Reich passe par des méthodes de manipulation radicalement nouvelles, le ministre de la Propagande contrôle les médias et électrise les foules.",
    "duration": "2h04",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:35"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:35"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Un ours dans le jura",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/17/5f/175fbcee8f625ac212b06378b2d34435.jpg",
    "description": "Michel et Cathy forment un couple usé par le temps et les difficultés financières. Un jour, Michel, pour éviter un ours sur la route, heurte une voiture et tue les deux occupants. Dans le coffre, ils trouvent 2 millions en billets usagés...",
    "duration": "1h53",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "16:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30",
            "13:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Daffy et Porky sauvent le monde",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/cc/e6/cce60e5926b977c7266cd461a63f3c79.jpg",
    "description": "L’un des plus grands duos comiques de l’Histoire, Daffy Duck et Porky Pig, fait son grand retour au cinéma dans une nouvelle comédie déjantée.",
    "duration": "1h31",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:30"
          ]
        }
      ]
    }
  },
  {
    "title": "The Monkey",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/8b/3b/8b3b6371a88786a39562d87473a5f563.jpg",
    "description": "Lorsque Bill et Hal, des jumeaux, trouvent dans le grenier un vieux jouet ayant appartenu à leur père, une série de morts atroces commence à se produire autour d'eux...",
    "duration": "1h38",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:30",
            "15:45",
            "18:00",
            "20:15",
            "22:30"
          ]
        }
      ],
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:30",
            "15:45",
            "20:15",
            "22:30",
            "18:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "13:30",
            "15:45",
            "18:00",
            "20:15",
            "22:30",
            "10:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Sonic 3 - le film",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/85/e7/85e77c51c172da4aec13679210295a11.jpg",
    "description": "Sonic, Knuckles et Tails se retrouvent face à un nouvel adversaire, Shadow, mystérieux et puissant ennemi aux pouvoirs inédits. Dépassée sur tous les plans, la Team Sonic va devoir former une alliance improbable pour tenter d’arrêter Shadow et protéger notre planète.",
    "duration": "1h49",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:45",
            "13:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Vaiana 2",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/9e/c9/9ec9a076d8516b78e1923dd76806f13e.jpg",
    "description": "Après avoir reçu une invitation inattendue de ses ancêtres, Vaiana entreprend un périple qui la conduira jusqu’aux eaux dangereuses situées aux confins des mers des îles du Pacifique. Elle y vivra des péripéties comme jamais vécues auparavant.",
    "duration": "1h40",
    "reservations": {
      "Sun Mar 02 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "15:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Mickey 17",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/a5/5e/a55e6a3b1771606323178493aae5e262.jpg",
    "description": "Héros malgré lui, Mickey Barnes se tue à la tâche… littéralement ! Car c’est ce qu’exige de lui son entreprise : mourir régulièrement pour gagner sa vie.",
    "duration": "2h17",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "20:00"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VO",
          "hours": [
            "20:00"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:30",
            "15:30",
            "20:15"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:30",
            "15:15",
            "20:20"
          ]
        }
      ]
    }
  },
  {
    "title": "Dis-moi juste que tu m'aimes",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/42/cd/42cdd3681d50bd26b297b68445a68dfc.jpg",
    "description": "Au bout de quinze ans de mariage, une crise met à l’épreuve l’union de Julien et Marie. Dans le couple, cette dernière a toujours été celle qui aimait le plus, aussi, au moment où Anaëlle, le grand amour de jeunesse de son mari Julien, réapparait dans le paysage, Marie panique. Perdue dans une spirale infernale de jalousie et d’autodépréciation, Marie se laisse entraîner dans une aventure avec Thomas, son nouveau supérieur hiérarchique. Celui-ci va se révéler aussi manipulateur que dangereux, jusqu’à faire basculer leur liaison dans le fait-divers.",
    "duration": "1h51",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:20",
            "15:50"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "16:15",
            "19:00",
            "21:30"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VF",
          "hours": [
            "13:20",
            "15:50",
            "18:20"
          ]
        },
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "11:00",
            "13:45",
            "16:15",
            "19:00",
            "21:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Midsommar",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/pictures/19/06/21/16/39/3513823.jpg",
    "description": "Dani et Christian sont sur le point de se séparer quand la famille de Dani est touchée par une tragédie. Attristé par le deuil de la jeune femme, Christian ne peut se résoudre à la laisser seule et l’emmène avec lui et ses amis à un festival estival qui n’a lieu qu'une fois tous les 90 ans et se déroule dans un village suédois isolé.",
    "duration": "2h27",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "21:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Eraserhead",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/pictures/17/05/04/15/15/200444.jpg",
    "description": "Un homme est abandonné par son amie qui lui laisse la charge d'un enfant prématuré, fruit de leur union. Il s'enfonce dans un univers fantasmatique pour fuir cette cruelle réalité.",
    "duration": "1h29",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:10"
          ]
        }
      ]
    }
  },
  {
    "title": "When the Light Breaks",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/a5/24/a52455d6bcecae5b68caf31d51c07127.jpg",
    "description": "Le jour se lève sur une longue journée d’été en Islande. D’un coucher de soleil à l’autre, Una une jeune étudiante en art, rencontre l’amour, l’amitié, le chagrin et la beauté.",
    "duration": "1h22",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "12:00",
            "18:00"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:40",
            "16:00"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Brian Jones et les Rolling Stones",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/f3/d7/f3d7c0e50c3cb0b4011e00bbe2f98ef5.jpg",
    "description": "Qui se souvient vraiment de Brian Jones ? Pourtant, il est le visionnaire à l'origine des Rolling Stones. À travers des interviews exclusives de proches, des membres du groupe et grâce à des archives rares et inédites, ce documentaire retrace l'incroyable parcours de ce musicien de génie. Célébrant son rôle fondamental dans la naissance et le succès des Rolling Stones, le film plonge au cœur des tensions internes qui ont conduit à son éviction tragique, révélant une histoire fascinante et bouleversante sur l'ascension du plus grand groupe de rock de tous les temps.",
    "duration": "1h38",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:50"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:50"
          ]
        }
      ]
    }
  },
  {
    "title": "5 septembre",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/2b/3e/2b3e43141e574772c3773807af69ae36.jpg",
    "description": "Le film se déroule lors des Jeux Olympiques de Munich de 1972 où l’équipe de télévision américaine se voit contrainte d’interrompre subitement la diffusion des compétitions, pour couvrir la prise d’otage en direct d’athlètes israéliens. Un évènement suivi à l'époque par environ un milliard de personnes dans le monde entier. Au cœur de l'histoire, l’ambitieux jeune producteur Geoff veut faire ses preuves auprès de Roone Arledge, son patron et légendaire directeur de télévision. Avec sa collègue et interprète allemande Marianne, son mentor Marvin Bader, Geoff va se retrouver confronté aux dilemmes de l’information en continu et de la moralité.",
    "duration": "1h35",
    "reservations": {
      "Mon Mar 03 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:35",
            "13:15",
            "20:15"
          ]
        }
      ],
      "Tue Mar 04 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VF",
          "hours": [
            "10:35",
            "13:15",
            "20:15",
            "22:20"
          ]
        }
      ]
    }
  },
  {
    "title": "Lost Highway",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/pictures/22/10/27/16/38/1152463.jpg",
    "description": "Un bunker chic et silencieux assis sur les collines de Los Angeles. Un couple – Fred, saxophoniste dépressif et Renée – reçoit une cassette vidéo de la façade de leur maison. Puis une seconde, filmée depuis leur chambre, où on les voit dormir. Puis une dernière, qui suggère, dans un déferlement de sang, que Fred aurait assassiné Renée.\n",
    "duration": "2h15",
    "reservations": {
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "13:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Vingt dieux",
    "poster": "https://fr.web.img3.acsta.net/r_200_283/img/7e/0c/7e0c02a6ff88b09f1f75bf6aa1117975.jpg",
    "description": "Totone, 18 ans, passe le plus clair de son temps à boire des bières et écumer les bals du Jura avec sa bande de potes. Mais la réalité le rattrape : il doit s’occuper de sa petite sœur de 7 ans et trouver un moyen de gagner sa vie. Il se met alors en tête de fabriquer le meilleur comté de la région, celui avec lequel il remporterait la médaille d'or du concours agricole et 30 000 euros.",
    "duration": "1h30",
    "reservations": {
      "Tue Mar 04 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "18:40"
          ]
        }
      ]
    }
  },
  {
    "title": "Personne n'y comprend rien",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/c1/7b/c17bfd4b1cab665f23352d13cfe2238d.jpg",
    "description": " « Personne n'y comprend rien », se rassure Nicolas Sarkozy au sujet de ses liens avec le colonel Kadhafi. Voici le film qui va enfin vous permettre de tout comprendre à l’un des scandales les plus retentissants de la Ve République.",
    "duration": "1h43",
    "reservations": {
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Le Mohican",
    "poster": "https://fr.web.img4.acsta.net/r_200_283/img/72/ab/72abbc296e18a1e605ff6a891832fa9a.jpg",
    "description": "En plein cœur de l’été, Joseph, l’un des derniers bergers du littoral corse, voit son terrain convoité par le milieu pour un projet immobilier. Il refuse de céder. Cela signerait la fin d’un monde. Quand il tue accidentellement l’homme venu l’intimider, il est forcé de prendre la fuite et devient la proie d’une traque sans répit du sud au nord de l’île. Portée par sa nièce Vannina, la légende de Joseph, incarnant une résistance réputée impossible, grandit au fil des jours et se propage dans toute la Corse…",
    "duration": "1h27",
    "reservations": {
      "Tue Mar 04 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "11:35"
          ]
        }
      ],
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "14:05"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VF",
          "hours": [
            "17:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Sailor et Lula",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/medias/nmedia/18/35/51/06/18747736.jpg",
    "description": "Sailor et Lula, deux jeunes amoureux, fuient Marietta, la mère de la jeune fille qui s'oppose à leur amour, ainsi que toute une série de personnages dangereux et mystérieux qui les menacent. L'amour triomphera-t-il de la violence qui les entoure ?",
    "duration": "2h05",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "12:20"
          ]
        }
      ]
    }
  },
  {
    "title": "Les Damnés",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/c5/5c/c55cf4231cc174326af07af4ff377546.jpg",
    "description": "Hiver 1862. Pendant la guerre de Sécession, l’armée des Etats-Unis envoie à l'Ouest une compagnie de volontaires pour effectuer une patrouille dans des régions inexplorées. Alors que leur mission change de cap, ils questionnent le sens de leur engagement.",
    "duration": "1h29",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "17:30"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "16:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Cloud Atlas",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/medias/nmedia/18/92/29/61/20471737.jpg",
    "description": "À travers une histoire qui se déroule sur cinq siècles dans plusieurs espaces temps, des êtres se croisent et se retrouvent d’une vie à l’autre, naissant et renaissant successivement…",
    "duration": "2h45",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:00"
          ]
        }
      ]
    }
  },
  {
    "title": "Les Filles du Nil",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/8e/73/8e73f4b7caf1c2fdaf7dfa06e6e3e0a2.jpg",
    "description": "Dans un village du sud de l'Égypte, une bande de jeunes filles se rebelle en formant une troupe de théâtre de rue. Elles défient leurs familles coptes et les habitants de la région avec leurs performances audacieuses.",
    "duration": "1h42",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "11:40",
            "17:35"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Black Dog",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/img/99/6c/996ca51e260f2071f314f5fa150611e1.jpg",
    "description": "Lang revient dans sa ville natale aux portes du désert de Gobi. Alors qu’il travaille pour la patrouille locale chargée de débarrasser la ville des chiens errants, il se lie d’amitié avec l’un d’entre eux. Une rencontre qui va marquer un nouveau départ pour ces deux âmes solitaires. ",
    "duration": "1h50",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:35",
            "19:30"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "13:35",
            "17:25"
          ]
        }
      ]
    }
  },
  {
    "title": "Dans la cuisine des Nguyen",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/55/c3/55c3f4c7926a506aac1793733656d204.jpg",
    "description": "Yvonne Nguyen, jeune femme d’origine vietnamienne, rêve d’une carrière dans la comédie musicale au grand dam de sa mère qui préférerait la voir reprendre son restaurant en banlieue.",
    "duration": "1h39",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "19:40"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:50",
            "19:40"
          ]
        }
      ]
    }
  },
  {
    "title": "Anna",
    "poster": "https://fr.web.img5.acsta.net/r_200_283/img/af/74/af74b1298a7e93a40b4e4c24908fbb07.jpg",
    "description": "Anna, trentenaire solitaire, élève ses chèvres dans une partie sauvage et préservée de la Sardaigne. Mais son exploitation est menacée le jour où un vaste projet de complexe touristique commence à s’installer sur ses terres.",
    "duration": "1h58",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "14:00"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VO",
          "hours": [
            "15:50"
          ]
        }
      ]
    }
  },
  {
    "title": "Le Système Victoria",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/img/e3/28/e328eca42d0a8d22649001a4df7d44f5.jpg",
    "description": "Directeur de travaux, David est à la tête du chantier d’une grosse tour en construction à La Défense. Retards insurmontables, pressions incessantes et surmenage des équipes : il ne vit que dans l’urgence. Lorsqu’il croise le chemin de Victoria, ambitieuse DRH d’une multinationale, il est immédiatement séduit par son audace et sa liberté. Entre relation passionnelle et enjeux professionnels, David va se retrouver pris au piège d’un système qui le dépasse.",
    "duration": "1h41",
    "reservations": {
      "Wed Mar 05 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "15:35",
            "19:30"
          ]
        }
      ],
      "Thu Mar 06 2025": [
        {
          "cinema": "Diagonal-Capitole",
          "langue": "VF",
          "hours": [
            "13:40",
            "19:30"
          ]
        }
      ]
    }
  },
  {
    "title": "Le Lac aux oies sauvages",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/pictures/19/11/25/17/01/2832184.jpg",
    "description": "Un chef de gang dont la tête est mise à prix s'allie à une prostituée pour toucher la récompense de sa capture et mettre son épouse à l'abri de besoin.",
    "duration": "1h50",
    "reservations": {
      "Thu Mar 06 2025": [
        {
          "cinema": "Pathé Comédie",
          "langue": "VO",
          "hours": [
            "19:45"
          ]
        }
      ]
    }
  },
  {
    "title": "Blue Velvet",
    "poster": "https://fr.web.img2.acsta.net/r_200_283/pictures/20/02/28/09/16/1963135.jpg",
    "description": "Il se passe quelque chose d’étrange derrière les palissades blanches de Lumberton, Caroline du Nord. Après avoir fait la découverte d’une oreille humaine coupée dans un champ, Jeffrey Beaumont, un étudiant attiré par le mystère, est bien déterminé à enquêter. Avec l’aide de sa petite amie, Jeffrey pénètre dans l’univers sombre et dangereux de Dorothy Vallens, une chanteuse de boîte de nuit mystérieusement unie à Frank, un gangster sadique, autour d’une histoire de kidnapping.",
    "duration": "2h00",
    "reservations": {
      "Thu Mar 06 2025": [
        {
          "cinema": "Utopia",
          "langue": "VO",
          "hours": [
            "20:50"
          ]
        }
      ]
    }
  },
  {
    "title": "Parasite",
    "poster": "https://fr.web.img6.acsta.net/r_200_283/pictures/20/02/12/13/58/3992754.jpg",
    "description": "Toute la famille de Ki-taek est au chômage, et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable...",
    "duration": "2h12",
    "reservations": {
      "Thu Mar 06 2025": [
        {
          "cinema": "Pathé Montpellier Odysseum - IMAX",
          "langue": "VO",
          "hours": [
            "19:30"
          ]
        }
      ]
    }
  }
]

// console.log(movies)

function  App(){

  const [visibleMovies, setVisibleMovies] = useState(movies.map((_, index) => index < 3))
  const handleMovieVisibility = (index) => {
    const visibleMoviesCopy = [...visibleMovies]
    visibleMoviesCopy[index] = !visibleMovies[index]
    setVisibleMovies(visibleMoviesCopy)
  }
  
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const handleSelectedMovie = (index) => { setSelectedMovie(movies[index]) }

  const [timelineMovies, setTimelineMovies] = useState([])
  const handleTimelineMovies = (newMovie) => {
    setTimelineMovies(prevMovies => {
        const exists = prevMovies.some(movie => 
            movie.content === newMovie.content &&
            movie.start === newMovie.start &&
            movie.end === newMovie.end
        );

        return exists 
            ? prevMovies.filter(movie => 
                !(movie.content === newMovie.content && 
                  movie.start === newMovie.start && 
                  movie.end === newMovie.end)
              ) 
            : [...prevMovies, newMovie];
    });
  };


  // Code principal affiché sur la page
  return <>
  <main>
    <div className="cards">
      <Cards movies={movies} visibleMovies={visibleMovies} handleSelectedMovie={handleSelectedMovie} handleTimelineMovies={handleTimelineMovies}></Cards>
    </div>
    <Movie movie={selectedMovie} handleTimelineMovies={handleTimelineMovies}></Movie>
    <CinemaTimeline timelineMovies={timelineMovies} setTimelineMovies={setTimelineMovies}></CinemaTimeline>
  </main>
  <aside>
    <h3 className="title">Films</h3>
    <div className="checkboxes">
      <Checkboxes movies={movies} visibleMovies={visibleMovies} handleMovieVisibility={handleMovieVisibility}></Checkboxes>
    </div>
  </aside>
  </>
}

/*
const months = {
  0: 'Janvier',
  1: 'Février'
}

// "2025-0-19 18:00 Pathé Comédie" => Format Date de JS (year, month, day)
function createDate(date){
  let split_date = date.split(' ')[0].split('-')
  let format_date = new Date(split_date[0], split_date[1], split_date[2])

  return format_date
}

// createDate("2025-0-19 18:00 Pathé Comédie") => "19 Janvier 2025"
function getDay(date){
  let day = date.getDate()
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  
  return `${day} ${month} ${year}`
}

// Tableau de réservations + date => Tableau de réservations filtré selon la date 
function getReservationsByDay(reservations, day){
  let filtered_reservations = []
  for (let date of reservations){
    if (createDate(date).getTime() == day.getTime()){
      console.log(createDate(date).getTime(), day.getTime(), createDate(date).getTime() == day.getTime())
      filtered_reservations.push(date)
    }
  }
  console.log(reservations, day, filtered_reservations)
  return filtered_reservations
}

// "2025-0-19 18:00 Pathé Comédie" => "18h00 - Pathé Comédie"
function getReservation(date){
  let cinema = date.split(' ').slice(2).join(' ')
  let time = date.split(' ')[1].split(':')

  return `${time[0]}h${time[1]} - ${cinema}`
}

function Cards({movies, visibleMovies}){
  const day = new Date(2025,0,19)
  // Partie principale de <Cards>
  return movies.map((movie, index) => {
    const [date, setNewDate] = useState(new Date(2025,0,25))
    const incrementDate = () => {setNewDate(new Date(date.getTime() + 86400*1000*1))}
    const decrementDate = () => {setNewDate(new Date(date.getTime() + 86400*1000*-1))}

    if (visibleMovies[index]){
    return  <div key={movie.title} className="card">
              <div className="card-main">
                <div className="card-poster">
                  <img className="card__poster" src={movie.poster} alt="poster" />
                </div>
                <div className="card-infos">
                  <h3 className="card__title">{movie.title}</h3>
                  <h5 className="card__duration">{movie.duration}</h5>
                  <p className="card__description">{movie.description}</p>
                </div>
              </div>
              {<div className="card-dates">
                <div className="card-date">
                  <img src={larrow} onClick={decrementDate} alt=""/>
                  <h3 className="card__date">{getDay(date)}</h3>
                  <img src={rarrow} onClick={incrementDate}alt=""/>
                </div>
                <div className="card__hours">
                  {
                    getReservationsByDay(movie.hours, date).map((hour) => {return <p key={`${movie.title} ${hour}`}className="card__hour">{getReservation(hour)}</p>})
                  }
                </div>
              </div>}
            </div>
  }})
}

function Checkboxes({movies, visibleMovies, handleCheckboxChange}){
  return <>
  {movies.map((movie, index) => 
    <label key={movie.title} htmlFor={index}>
      <input type="checkbox" onChange={() => handleCheckboxChange(index)} name="" id={index} checked={visibleMovies[index]}/>
      <span class="checkbox"></span>
      {movie.title}
    </label>
  )}
  </>
}
*/

export default App
