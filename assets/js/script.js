// Header dropdown menu
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.querySelector('.dropdown__block');

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('active');
});


// mobile dropdown menu
const mobileButton = document.getElementById('mobileButton');
const logoutBlock = document.querySelector('.logout__block');

mobileButton.addEventListener('click', () => {
    logoutBlock.classList.toggle('active');
});

// select
const select = document.querySelector('select');
const cardInput = document.querySelector('.card__input');
const accountBankInput = document.querySelector('.account__bank');
const onlineWalletInput = document.querySelector('.online__wallet');
const warning = document.querySelector('.pay__warning');

select.addEventListener('change', function () {
    if(this.value === 'card'){
        cardInput.classList.add('active');
        onlineWalletInput.classList.remove('active');
        accountBankInput.classList.remove('active');
        warning.style.display = 'none';

    } else if(this.value === 'account-bank'){
        accountBankInput.classList.add('active');
        cardInput.classList.remove('active');
        onlineWalletInput.classList.remove('active');
        warning.style.display = 'none';

    } else if(this.value === 'online-wallet'){
        onlineWalletInput.classList.add('active');
        accountBankInput.classList.remove('active');
        cardInput.classList.remove('active');
        warning.style.display = 'none';

    } else{
        warning.style.display = 'block';
        onlineWalletInput.classList.remove('active');
        accountBankInput.classList.remove('active');
        cardInput.classList.remove('active');
    }
});