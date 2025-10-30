

const btnAfficherForm = document.getElementById('btn-ajoute-transaction');
const formContainer = document.getElementById('form-container');
const btnFermerForm = document.getElementById('btn-fermer-form');
const formAjouter = document.getElementById('form-ajouter');
const listTransactions = document.getElementById('listTransactions');

const inputDescription = document.getElementById('input-description');
const inputMontant = document.getElementById('input-montant');
const selectType = document.getElementById('select-type');
const inputDate = document.getElementById('input-date');

const TableauTransactions = [];

btnAfficherForm.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
});

btnFermerForm.addEventListener('click', () => {
    formContainer.classList.add('hidden');
});

/** id pour identifier les transaction **/
let i = 1;

/*Fonction pour ajouter les transaction */
formAjouter.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = inputDescription.value;
    const montant = inputMontant.value;
    const type = selectType.value;
    const date = inputDate.value;

    const transaction = {
        id: i,
        description,
        montant,
        type,
        date
    };

    TableauTransactions.push(transaction);

    i++;
    formAjouter.reset();
    formContainer.classList.add('hidden');
});
