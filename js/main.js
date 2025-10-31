
/* Déclaration de variables et récupération des element html via le DOM */
const btnAfficherForm = document.getElementById('btn-ajoute-transaction');
const formContainer = document.getElementById('form-container');
const btnFermerForm = document.getElementById('btn-fermer-form');
const formAjouter = document.getElementById('form-ajouter');
const listTransactions = document.getElementById('listTransactions');

/** Récupération des donnée des formululaire d'ajoute  */
const inputDescription = document.getElementById('input-description');
const inputMontant = document.getElementById('input-montant');
const selectType = document.getElementById('select-type');
const inputDate = document.getElementById('input-date');

/** Tableau des transaction */
let TableauTransactions = [];

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
    afficherTransactions();
    formAjouter.reset();
    formContainer.classList.add('hidden');
});



const modalSupprimer = document.getElementById('modal-supprimer');
const btnConfirmationSupprission = document.getElementById('btn-confirmer-suppression');
const btnAnnuler = document.getElementById('btn-annuler-suppression');

let idASupprimer = null;
let indexASupprimer = null;

/** Fonction pour afficher les transactions **/
function afficherTransactions() {

    listTransactions.innerHTML = '';
    // Pour chaque transaction, on crée une carte
    TableauTransactions.forEach((t) => {
        const card = document.createElement('div');

        card.innerHTML = `
            <div class="${t.type === 'revenu' ? ' bg-green-500 hover:bg-green-900' : ' bg-red-500 hover:bg-red-900'} m-4 rounded-xl py-2 px-4 border border-gray-200">
                <p class="font-bold text-white text-lg mb-1">${t.description}</p>
                <p class="font-semibold text-white text-xl mb-2">${t.type === 'revenu' ? '+' : '-'} ${t.montant} DH </p>
                    <div class="flex items-center gap-2 text-gray-200">
                        <i class='bx bx-calendar-alt text-lg'></i>
                        <span class="text-sm">${t.date}</span>
                        <div class="flex gap-3 ml-4">
                            <button id="btn-modifier-${t.id}">
                                <i class='bx bx-edit text-white text-lg'></i>
                            </button>
                            <button id="btn-supprimer-${t.id}">
                                <i class='bx bx-trash text-white text-lg'></i>
                            </button>
                        </div>
                    </div>
            </div>
        `;

        listTransactions.appendChild(card);
        const btn_Supprimer = card.querySelector(`#btn-supprimer-${t.id}`);
        btn_Supprimer.addEventListener('click', function () {
            idASupprimer = t.id;
            modalSupprimer.classList.remove('hidden')
        });
    });
}





btnAnnuler.addEventListener('click', function () {
    idASupprimer = null;
    modalSupprimer.classList.add('hidden');
});

btnConfirmationSupprission.addEventListener('click', function () {
    if (idASupprimer !== null) {
         indexASupprimer  = TableauTransactions.findIndex(t => t.id === idASupprimer);
    }

    if (indexASupprimer !== -1) {
        TableauTransactions.splice(indexASupprimer , 1);
    }
    afficherTransactions();
    idASupprimer = null;
    modalSupprimer.classList.add('hidden');
});

