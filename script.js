let subject = ['html', 'css', 'math', 'js'];
let students = [
    {
        name: 'latsu',
        lastname: 'blabla',
        scores: [67, 68, 25, 46]
    },
    {
        name: 'jeko',
        lastname: 'jkhjk',
        scores: [67, 22, 56, 46]
    },
    {
        name: 'zura',
        lastname: 'shkfjhkj',
        scores: [62, 88, 25, 12]
    },
    {
        name: 'lololo',
        lastname: 'jkhkdsjh',
        scores: [10, 67, 97, 46]
    },
];


let avg =[0, 0, 0, 0];
for (let i = 0; i < students.length; i++) { //students[i]
    for(let j = 0; j < subject.length; j++){ //students[i].scores
        avg[j] += students[i].scores[j];
    }
}

for(let i = 0; i < avg.length; i++){
    avg[i] /= subject.length;
}

let container = document.getElementById('container');
let thead = document.querySelector('#container thead tr');
let tbody = document.querySelector('#container tbody');
let submit = document.querySelector('.submitinfo');


let tmp = '';
for(let i = 0; i < subject.length; i++){
    tmp += `<th>${subject[i]}</th>`;
}
thead.innerHTML += tmp;

function userInfo(){
        tmp = '';
    for(let i = 0; i < students.length; i++){
        tmp += `<tr>
                <td>${students[i].name}</td>
                <td>${students[i]['lastname']}</td>
                `;
        for(let j = 0; j < subject.length; j++){
            tmp += `<td class="${avg[j] > students[i].scores[j] ? 'red' : 'green'}">${students[i].scores[j]}</td>`;
        } 
        tmp += `</tr>`;
    }

    tbody.innerHTML += tmp;
}

userInfo();

let nname = document.getElementById('nname');
let nlastname = document.getElementById('nlastname');
let hgrade = document.getElementById('hgrade');
let cgrade = document.getElementById('cgrade');
let mgrade = document.getElementById('mgrade');
let jgrade = document.getElementById('jgrade');

function grade() {
    let blabla = Number(hgrade.value);
    let baba = Number(cgrade.value);
    let chacha = Number(mgrade.value);
    let gragra = Number(jgrade.value);
    students.push({name:nname.value, 
        lastname:nlastname.value, 
        scores:[blabla, baba, chacha, gragra]});
}

submit.addEventListener('click', grade); 

tmp = '<tr>' + 
        '<td colspan="2">Average</td>';

for(let i = 0; i < avg.length; i++){
    tmp += `<td>${avg[i]}</td>`;
}

tmp += '</tr>';

tbody.innerHTML += tmp;





