# EventPizzas

## Parcours d'etude : delegation d'evenements et `this`

Les exemples ci-dessous suivent une progression : partir d'un gestionnaire de clic delegue, comprendre un bug lie a la cible du clic, le corriger avec `closest`, puis 🥷🏼 etudier le comportement de `this` dans les fonctions classiques et flechees.

### 1. 👩🏼‍🎓Comprendre la delegation

Ouvrir [delegation.html](delegation.html). Un seul gestionnaire `click` est attache au conteneur des boutons. L'evenement remonte depuis le bouton jusqu'au conteneur (propagation), qui utilise ensuite `event.target` pour identifier la pizza selectionnee.

### 2. 💥Observer le bug avec un element imbrique

Ouvrir [delegationBug.html](delegationBug.html), puis cliquer directement sur le texte colore a l'interieur d'un bouton. Dans ce cas, `event.target` est le `span`, et non le bouton : ses donnees `data-pizza` sont donc absentes et la selection echoue.

### 3. 👨🏿‍🎓Retrouver le bouton avec `closest`

Ouvrir [delegationFixed.html](delegationFixed.html). L'appel `event.target.closest('button')` remonte depuis l'element clique jusqu'au bouton correspondant. Le test `if (button)` protege aussi les clics qui ne proviennent pas d'un bouton.

### 4. 🥷🏼Comprendre `this` dans un gestionnaire classique

Comparer [this.html](this.html) et [thisAddEvent.html](thisAddEvent.html). Dans ces deux exemples, une fonction classique sert de gestionnaire et `this` designe le bouton qui a recu le clic. Le second exemple utilise explicitement `addEventListener`.

### 5. Voir pourquoi la fonction flechee pose probleme ici

Ouvrir [thisArrow.html](thisArrow.html). Une fonction flechee ne definit pas son propre `this` : elle capture celui du contexte exterieur. Ici, `this` n'est donc pas le bouton et `this.dataset.pizza` ne fonctionne pas comme attendu. Pour recuperer le bouton dans un gestionnaire fleche, utiliser plutot l'objet evenement, par exemple `event.currentTarget`.

### 6. 👑Etude avancee : creer un helper de delegation

Terminer par [delegat.html](delegat.html). Le helper `$delegate` combine la delegation, `closest` et `handler.call(...)` pour invoquer le gestionnaire avec l'element correspondant comme valeur de `this`. Comparer `event.target` (element precisement clique) avec `this` (bouton retenu par le helper) pour bien distinguer les deux roles.
