````markdown
# Beztami - Tableau de bord des transactions

**Beztami** est une application web simple et intuitive permettant de gérer vos revenus, vos dépenses et votre solde en temps réel.  
Elle offre une interface moderne construite avec **Tailwind CSS** et **JavaScript**, tout en assurant l’accessibilité et la compatibilité sur tous les appareils.

---

## Fonctionnalités principales

- Calcul automatique du solde (revenus - dépenses) affiché en temps réel.  
- Ajout, modification et suppression de transactions.  
- Sauvegarde locale via LocalStorage pour une persistance des données après rechargement.  
- Interface responsive adaptée aux écrans mobiles et ordinateurs.  

---

## Technologies utilisées

| Technologie | Utilisation |
|--------------|-------------|
| **HTML5** | Structure sémantique du tableau de bord |
| **Tailwind CSS** | Mise en page et design responsive |
| **JavaScript** | Logique de calcul, interactions et gestion du stockage local |
| **Boxicons** | Icônes d’interface |
| **LocalStorage API** | Persistance des données côté navigateur |

---

## Installation et utilisation

### 1. Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/beztami.git
cd beztami
````

### 2. Ouvrir dans le navigateur

Ouvrez simplement le fichier suivant :

```bash
index.html
```

Aucune installation supplémentaire n’est requise.

---

## Fonctionnement du tableau de bord

1. Cliquez sur **“Ajouter une transaction”**.
2. Remplissez les champs requis :

   * Description
   * Montant
   * Type (revenu ou dépense)
   * Date
3. Le solde et les totaux se mettent à jour instantanément.
4. Les transactions sont automatiquement enregistrées dans le **LocalStorage**.

---

## Accessibilité

* Labels associés à chaque champ de formulaire.
* Navigation au clavier possible (Tabulation, Entrée, Échap).
* Contrastes de couleurs conformes aux bonnes pratiques d’accessibilité.
* Titres et éléments compatibles avec les lecteurs d’écran.

---

## Améliorations futures

* Export des transactions au format CSV ou PDF.
* Ajout d’un mode sombre automatique.

---

## Auteur

Créé par : **ABADA AZIZ**

> “Gérer son argent, c’est aussi gérer sa tranquillité.”

---

## Aperçu

![Aperçu du tableau de bord](./assets/Rondu_Final/tableauDeBord.png)

```

---