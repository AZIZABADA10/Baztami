/* Ajouter un transaction   */

let ajouterTransaction = document.getElementById('btn-ajoute-transaction');
let FormAjouter = document.getElementById('FormAjouter');

let FermerFormulaure = document.getElementById('fermerFormAjouter');
let listTransactions = document.getElementById('list-transactions');


/* la creation de liste pour stoke les transaction */

let transactions = [];

/* Afficher la formulaire d'ajoute */
ajouterTransaction.addEventListener('click',function(){
    FormAjouter.classList.remove('hidden');
})

/* Fermer la formulaire d'ajoute */
FermerFormulaure.addEventListener('click',function(){
    FormAjouter.classList.add('hidden');
})

/* fonction pour ajouter une transaction */
function AjouterTransaction () {

}

