# EventPizzas

## Parcours : délégation d'événements

La page [index.html](index.html) rassemble les démonstrations dans l'ordre de difficulté. Les premières étapes expliquent la délégation, puis montrent un problème de cible et sa correction avec `closest()`.

### 1. Délégation simple

Ouvrir [delegation.html](delegation.html). Un seul gestionnaire `click` est installé sur le conteneur des boutons. L'événement remonte depuis le bouton jusqu'au conteneur, qui lit `event.target.dataset.pizza` pour afficher la bonne pizza.

### 2. Observer le problème

Ouvrir [delegationBug.html](delegationBug.html), puis cliquer sur le texte coloré à l'intérieur d'un bouton. `event.target` désigne le `span`, qui ne porte pas `data-pizza` : la sélection échoue.

### 3. Retrouver le bouton

Ouvrir [delegationFixed.html](delegationFixed.html). `event.target.closest('button')` remonte jusqu'au bouton depuis son contenu, puis permet de lire son identifiant de pizza.

### 4. Version avec Bootstrap et module JavaScript

La page [delegation/index.html](delegation/index.html) reprend la démonstration avec Bootstrap. La logique se trouve dans [delegation/app.mjs](delegation/app.mjs). Comme elle utilise un module JavaScript, ouvrez-la depuis un serveur local (par exemple Live Server dans VS Code), et non directement depuis `file://`.

### 5. Helper de délégation

Ouvrir [delegat.html](delegat.html). Le helper `$delegate` combine délégation et `closest()` ; il appelle le gestionnaire avec le bouton correspondant comme contexte `this`.

## Pour aller plus loin : `this` (niveau avancé)

Ces trois exemples sont regroupés à la fin, à part du parcours principal.

- [this/this.html](this/this.html) : `this` dans un gestionnaire affecté avec `onclick`.
- [this/thisAddEvent.html](this/thisAddEvent.html) : `this` dans une fonction classique passée à `addEventListener()`.
- [this/thisArrow.html](this/thisArrow.html) : une fonction fléchée ne définit pas son propre `this` et capture celui du contexte extérieur.
