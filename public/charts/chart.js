let air = document.querySelector('.self-air').textContent;
let water = document.querySelector('.self-water').textContent;
let earth = document.querySelector('.self-earth').textContent;
let fire = document.querySelector('.self-fire').textContent;

let sumOfElements = parseInt(air) + parseInt(water) + parseInt(earth) + parseInt(fire);

let percentOfAir = (parseInt(air) * 100) / sumOfElements;
let percentOfEarth = (parseInt(earth) * 100) / sumOfElements;
let percentOfWater = (parseInt(water) * 100) / sumOfElements;
let percentOfFire =  (parseInt(fire) * 100) / sumOfElements;

const chartData = {
    labels: ['Hava', 'Su', 'Toprak', 'Ateş'],
    data: [parseInt(air), parseInt(water), parseInt(earth), parseInt(fire)],
    percentData : [percentOfAir, percentOfWater, percentOfEarth, percentOfFire],
};

const selfChart = document.querySelector('.self-chart');
const ul = document.querySelector('.elements-stats .details ul');

new Chart(selfChart, {
    type: 'doughnut',
    data: {
        labels: chartData.labels,
        datasets: [
            {
               label: '  %: ',
               data: chartData.percentData,
               backgroundColor: [
                'rgb(224, 255, 254)',
                'rgb(28, 163, 236)',
                'rgb(128, 96, 67)',
                'rgb(196, 66, 63)'
                ],
            }
        ]
    },

    options: {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

// const populateUl = () => {
//     chartData.labels.forEach(l, i => {
//         let li = document.createElement('li');
//         li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`
//         ul.appendChild(li);
//     });
// }

let air2 = document.querySelector('.mother-air').textContent;
let water2 = document.querySelector('.mother-water').textContent;
let earth2 = document.querySelector('.mother-earth').textContent;
let fire2 = document.querySelector('.mother-fire').textContent;

let sumOfElements2 = parseInt(air2) + parseInt(water2) + parseInt(earth2) + parseInt(fire2);

let percentOfAir2 = (parseInt(air2) * 100) / sumOfElements2;
let percentOfEarth2 = (parseInt(earth2) * 100) / sumOfElements2;
let percentOfWater2 = (parseInt(water2) * 100) / sumOfElements2;
let percentOfFire2 =  (parseInt(fire2) * 100) / sumOfElements2;

const chartData2 = {
    labels: ['Hava', 'Su', 'Toprak', 'Ateş'],
    data: [parseInt(air2), parseInt(water2), parseInt(earth2), parseInt(fire2)],
    percentData : [percentOfAir2, percentOfWater2, percentOfEarth2, percentOfFire2],
};

const motherChart = document.querySelector('.mother-chart');

new Chart(motherChart, {
    type: 'doughnut',
    data: {
        labels: chartData2.labels,
        datasets: [
            {
               label: '  Element Yüzdesi: ',
               data: chartData2.percentData,
               backgroundColor: [
                'rgb(224, 255, 254)',
                'rgb(28, 163, 236)',
                'rgb(128, 96, 67)',
                'rgb(196, 66, 63)'
                ],
            }
        ]
    },

    options: {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

let air22 = document.querySelector('.father-air').textContent;
let water22 = document.querySelector('.father-water').textContent;
let earth22 = document.querySelector('.father-earth').textContent;
let fire22 = document.querySelector('.father-fire').textContent;

let sumOfElements22 = parseInt(air22) + parseInt(water22) + parseInt(earth22) + parseInt(fire22);

let percentOfAir22 = (parseInt(air22) * 100) / sumOfElements22;
let percentOfEarth22 = (parseInt(earth22) * 100) / sumOfElements22;
let percentOfWater22 = (parseInt(water22) * 100) / sumOfElements22;
let percentOfFire22 =  (parseInt(fire22) * 100) / sumOfElements22;

const chartData22 = {
    labels: ['Hava', 'Su', 'Toprak', 'Ateş'],
    data: [parseInt(air22), parseInt(water22), parseInt(earth22), parseInt(fire22)],
    percentData : [percentOfAir22, percentOfWater22, percentOfEarth22, percentOfFire22],
};

const fatherChart = document.querySelector('.father-chart');

new Chart(fatherChart, {
    type: 'doughnut',
    data: {
        labels: chartData22.labels,
        datasets: [
            {
               label: '  Element Yüzdesi: ',
               data: chartData22.percentData,
               backgroundColor: [
                'rgb(224, 255, 254)',
                'rgb(28, 163, 236)',
                'rgb(128, 96, 67)',
                'rgb(196, 66, 63)'
                ],
            }
        ]
    },

    options: {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});