# EventPizzas

## Parcours d'etude : delegation d'evenements

Les exemples ci-dessous suivent une progression : partir d'un gestionnaire de clic delegue, comprendre un bug lie a la cible du clic, puis le corriger avec `closest`.

### 1. 👩🏼‍🎓Comprendre la delegation

Ouvrir [delegation.html](delegation.html). Un seul gestionnaire `click` est attache au conteneur des boutons. L'evenement remonte depuis le bouton jusqu'au conteneur (propagation), qui utilise ensuite `event.target` pour identifier la pizza selectionnee. Les blocs de details portent l'attribut HTML `hidden` au depart ; JavaScript le passe a `false` pour afficher la pizza choisie et a `true` pour masquer les autres. Le CSS reste reserve a la presentation.

Une variante avec Bootstrap 5.3.8 est disponible dans [delegation/index.html](delegation/index.html). Elle charge la feuille de style depuis un CDN pour la mise en page et les boutons ; aucun script Bootstrap n'est necessaire dans cette page. La logique de delegation reste dans [delegation/app.mjs](delegation/app.mjs). Comme la page utilise un module JavaScript, ouvrez-la depuis un serveur local (par exemple l'extension Live Server de VS Code), et non directement depuis `file://`. La page d'accueil [index.html](index.html) charge aussi Bootstrap 5.3.8, avec son bundle JavaScript.

### 2. 💥Observer le bug avec un element imbrique

Ouvrir [delegationBug.html](delegationBug.html), puis cliquer directement sur le texte colore a l'interieur d'un bouton. Dans ce cas, `event.target` est le `span`, et non le bouton : ses donnees `data-pizza` sont donc absentes et la selection echoue.

### 3. 👨🏿‍🎓Retrouver le bouton avec `closest`

Ouvrir [delegationFixed.html](delegationFixed.html). L'appel `event.target.closest('button')` remonte depuis l'element clique jusqu'au bouton correspondant. Le test `if (button)` protege aussi les clics qui ne proviennent pas d'un bouton.

### 4. 👑Etude avancee : creer un helper de delegation

Terminer ce parcours par [delegat.html](delegat.html). Le helper `$delegate` combine la delegation, `closest` et `handler.call(...)` pour invoquer le gestionnaire avec le bouton correspondant comme contexte d'execution. Comparer `event.target` (element precisement clique) avec l'element bouton retenu par le helper pour comprendre le resultat.

## Pour aller plus loin : `this`

Les exemples consacres a `this` sont mis a part dans le dossier [this/](this/), pour ne pas interrompre le cours de base sur la delegation. Comparer [this/this.html](this/this.html) et [this/thisAddEvent.html](this/thisAddEvent.html) : dans un gestionnaire classique, `this` designe le bouton qui a recu le clic. Dans [this/thisArrow.html](this/thisArrow.html), la fonction flechee capture le `this` du contexte exterieur ; pour acceder au bouton, on peut utiliser `event.currentTarget`.
