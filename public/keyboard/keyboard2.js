// const Keyboard = {
//     elements: {
//         main: null,
//         keysContainer: null,
//         keys: []
//     },

//     eventHandlers: {
//         oninput: null,
//         onclose: null
//     },

//     properties: {
//         value: "",
//         capsLock: false
//     },

//     init() {
//         // Create main elements
//         this.elements.main = document.createElement("div");
//         this.elements.keysContainer = document.createElement("div");

//         // Setup main elements
//         this.elements.main.classList.add("keyboard", "keyboard--hidden");
//         this.elements.keysContainer.classList.add("keyboard__keys");
//         this.elements.keysContainer.appendChild(this._createKeys());

//         this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

//         // Add to DOM
//         this.elements.main.appendChild(this.elements.keysContainer);
//         document.body.appendChild(this.elements.main);

//         // Automatically use keyboard for elements with .use-keyboard-input
//         document.querySelectorAll(".use-keyboard-input").forEach(element => {
//             element.addEventListener("focus", () => {
//                 this.open(element.value, currentValue => {
//                     element.value = currentValue;
//                 });
//             });
//         });
//     },

//     _createKeys() {
//         const fragment = document.createDocumentFragment();
//         const keyLayout = [
//             "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//             "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//             "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//             "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//             "space"
//         ];

//         // Creates HTML for an icon
//         const createIconHTML = (icon_name) => {
//             return `<i class="material-icons">${icon_name}</i>`;
//         };

//         keyLayout.forEach(key => {
//             const keyElement = document.createElement("button");
//             const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

//             // Add attributes/classes
//             keyElement.setAttribute("type", "button");
//             keyElement.classList.add("keyboard__key");

//             switch (key) {
//                 case "backspace":
//                     keyElement.classList.add("keyboard__key--wide");
//                     keyElement.innerHTML = createIconHTML("backspace");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "caps":
//                     keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
//                     keyElement.innerHTML = createIconHTML("keyboard_capslock");

//                     keyElement.addEventListener("click", () => {
//                         this._toggleCapsLock();
//                         keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
//                     });

//                     break;

//                 case "enter":
//                     keyElement.classList.add("keyboard__key--wide");
//                     keyElement.innerHTML = createIconHTML("keyboard_return");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += "\n";
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "space":
//                     keyElement.classList.add("keyboard__key--extra-wide");
//                     keyElement.innerHTML = createIconHTML("space_bar");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += " ";
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "done":
//                     keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
//                     keyElement.innerHTML = createIconHTML("check_circle");

//                     keyElement.addEventListener("click", () => {
//                         this.close();
//                         this._triggerEvent("onclose");
//                     });

//                     break;

//                 default:
//                     keyElement.textContent = key.toLowerCase();

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
//                         this._triggerEvent("oninput");
//                     });

//                     break;
//             }

//             fragment.appendChild(keyElement);

//             if (insertLineBreak) {
//                 fragment.appendChild(document.createElement("br"));
//             }
//         });

//         return fragment;
//     },

//     _triggerEvent(handlerName) {
//         if (typeof this.eventHandlers[handlerName] == "function") {
//             this.eventHandlers[handlerName](this.properties.value);
//         }
//     },

//     _toggleCapsLock() {
//         this.properties.capsLock = !this.properties.capsLock;

//         for (const key of this.elements.keys) {
//             if (key.childElementCount === 0) {
//                 key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
//             }
//         }
//     },

//     open(initialValue, oninput, onclose) {
//         this.properties.value = initialValue || "";
//         this.eventHandlers.oninput = oninput;
//         this.eventHandlers.onclose = onclose;
//         this.elements.main.classList.remove("keyboard--hidden");
//     },

//     close() {
//         this.properties.value = "";
//         this.eventHandlers.oninput = oninput;
//         this.eventHandlers.onclose = onclose;
//         this.elements.main.classList.add("keyboard--hidden");
//     }
// };

// window.addEventListener("DOMContentLoaded", function () {
//     Keyboard.init();
// });


let selfAir = document.querySelector('.self-air').textContent;
let selfWater = document.querySelector('.self-water').textContent;
let selfEarth = document.querySelector('.self-earth').textContent;
let selfFire = document.querySelector('.self-fire').textContent;

let sumOfSelfElements = parseInt(selfAir) + parseInt(selfWater) + parseInt(selfEarth) + parseInt(selfFire);

let selfPercentOfAir = (parseInt(selfAir) * 100) / sumOfSelfElements;
let selfPercentOfEarth = (parseInt(selfEarth) * 100) / sumOfSelfElements;
let selfPercentOfWater = (parseInt(selfWater) * 100) / sumOfSelfElements;
let selfPercentOfFire =  (parseInt(selfFire) * 100) / sumOfSelfElements;

const selfChartData = {
    labels: ['Hava', 'Su', 'Toprak', 'Ateş'],
    data: [parseInt(selfAir), parseInt(selfWater), parseInt(selfEarth), parseInt(selfFire)],
    percentData : [selfPercentOfAir, selfPercentOfEarth, selfPercentOfWater, selfPercentOfFire],
};

const selfChart = document.querySelector('.self-chart');
// const ul = document.querySelector('.elements-stats .details ul');

new Chart(selfChart, {
    type: 'doughnut',
    data: {
        labels: selfChartData.labels,
        datasets: [
            {
               label: '  Element Yüzdesi: ',
               data: selfChartData.percentData,
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

let motherAir = document.querySelector('.mother-air').textContent;
let motherWater = document.querySelector('.mother-water').textContent;
let motherEarth = document.querySelector('.mother-earth').textContent;
let motherFire = document.querySelector('.mother-fire').textContent;

let sumOfMotherElements = parseInt(motherAir) + parseInt(motherWater) + parseInt(motherEarth) + parseInt(motherFire);

let motherPercentOfAir = (parseInt(air) * 100) / sumOfMotherElements;
let motherPercentOfEarth = (parseInt(earth) * 100) / sumOfMotherElements;
let motherPercentOfWater = (parseInt(water) * 100) / sumOfMotherElements;
let motherPercentOfFire =  (parseInt(fire) * 100) / sumOfMotherElements;

const motherChartData = {
    labels: ['Hava', 'Su', 'Toprak', 'Ateş'],
    data: [parseInt(motherAir), parseInt(motherWater), parseInt(motherEarth), parseInt(motherFire)],
    percentData : [motherPercentOfAir, motherPercentOfEarth, motherPercentOfWater, motherPercentOfFire],
};
const motherChart = document.querySelector('.mother-chart');

new Chart(motherChart, {
    type: 'doughnut',
    data: {
        labels: motherChartData.labels,
        datasets: [
            {
               label: '  Element Yüzdesi: ',
               data: motherChartData.percentData,
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

let fatherAir = document.querySelector('.father-air').textContent;
let fatherWater = document.querySelector('.father-water').textContent;
let fatherEarth = document.querySelector('.father-earth').textContent;
let fatherFire = document.querySelector('.father-fire').textContent;

let sumOfFatherElements = parseInt(fatherAir) + parseInt(fatherWater) + parseInt(fatherEarth) + parseInt(fatherFire);

let percentOfFatherAir = (parseInt(fatherAir) * 100) / sumOfFatherElements;
let percentOfFatherEarth = (parseInt(fatherEarth) * 100) / sumOfFatherElements;
let percentOfFatherWater = (parseInt(fatherWater) * 100) / sumOfFatherElements;
let percentOfFatherFire =  (parseInt(fatherFire) * 100) / sumOfFatherElements;

const fatherChartData = {
    labels: ['Hava', 'Su', 'Toprak', 'Ateş'],
    data: [parseInt(fatherAir), parseInt(fatherWater), parseInt(fatherEarth), parseInt(fatherFire)],
    percentData : [percentOfFatherAir, percentOfFatherEarth, percentOfFatherWater, percentOfFatherFire],
};
const fatherChart = document.querySelector('.father-chart');

new Chart(fatherChart, {
    type: 'doughnut',
    data: {
        labels: fatherChartData.labels,
        datasets: [
            {
               label: '  Element Yüzdesi: ',
               data: fatherChartData.percentData,
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