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

// const labels = ['1 августа', '7 августа', '12 августа', '19 августа'];

// const data = {
//     labels: labels,
//     datasets: [
//         {
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 0.5, 1, 2],
//         },
//     ],
// };

// const config = {
//     type: 'line',
//     data: data,
//     options: {
//         plugins: {
//           legend: {
//             display: false
//           },
//           tooltip: {
//             yAlign: 'bottom',
//             displayColors: false,
//           }
//         }
//       },
// };

// const myChart = new Chart(document.getElementById('myChart'), config);

// const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//         {
//             label: 'Weekly Sales',
//             data: [18, 12, 6, 9, 12, 3, 9],
//             backgroundColor: [
//                 'rgba(255, 26, 104, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(0, 0, 0, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 26, 104, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(0, 0, 0, 1)',
//             ],
//             borderWidth: 1,
//         },
//     ],
// };

// // custom tooltip
// const externalTooltipHandler = (context)

// // config
// const config = {
//     type: 'line',
//     data,
//     options: {
//         plugins: {
//             legend: {
//                 display: false,
//             },

//             tooltip: {
//                 enabled: false,
//                 external: externalTooltipHandler,
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     },
// };

// // render init block
// const myChart = new Chart(document.getElementById('myChart'), config);
