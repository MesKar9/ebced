import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/result', (req, res) => {
    let personLetters = req.body['selfName'];
    let motherLetters = req.body['motherName'];
    let fatherLetters = req.body['fatherName'];

    personLetters = elementCalculator(personLetters);
    motherLetters = elementCalculator(motherLetters);
    fatherLetters = elementCalculator(fatherLetters);

    res.render('result.ejs', {personLetters: personLetters,
                                motherLetters: motherLetters,
                                fatherLetters, fatherLetters});
});


app.listen(port, () => {
    console.log(`Server running on ${port}.`)
});

const arabicLetters = ['ا', 'ب', 'ج', 'د', 'ه', 'و', 
'ز', 'ح', 'ط', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 
'ﻉ', 'ف', 'ص', 'ق', 'ر', 'ﺵ', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ', 'ﻍ'];

const ebced = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 
    40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 
    700, 800, 900, 1000]

const elements = ['Ateş', 'Toprak', 'Su', 'Hava', 'Ateş', 'Toprak', 'Su', 
'Hava', 'Ateş', 'Toprak', 'Su', 'Hava', 'Ateş', 'Toprak', 'Su', 'Hava', 
'Ateş', 'Toprak', 'Su', 'Hava', 'Ateş', 'Toprak', 'Su', 'Hava', 'Ateş', 
'Toprak', 'Su', 'Hava']

function elementCalculator(letters){
    let ebcedSum = 0;
    let airElement = 0;
    let waterElement = 0;
    let earthElement = 0;
    let fireElement = 0;

    for(let i = 0; i < letters.length; i++){ 
        let letterIndex = arabicLetters.indexOf(letters[i]);
        ebcedSum += ebced[letterIndex];
        if (elements[letterIndex] === 'Ateş'){
            fireElement += 1;
        } else if (elements[letterIndex] === 'Toprak'){
            earthElement += 1;
        } else if (elements[letterIndex] === 'Su'){
            waterElement += 1;
        } else if (elements[letterIndex] === 'Hava'){
            airElement += 1;
        }
    }

    let elementList = [fireElement, earthElement, waterElement, airElement, ebcedSum];
    return elementList;
}