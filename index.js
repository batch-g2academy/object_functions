// OBJECT LITERAL

// 1. DIRECT TO OBJECT LITERAL
// let person = { key: value };
// let person = { firstName: 'Calvin' };

// 2. USING DOT/TITIK (.)
// let namaVariable = {};
// namaVariable.key = value;

// let person = {};
// person.firstName = 'Michele'


// 3. USING SQUARE BRACKET ([])
// let namaVariable = {}
// namaVariable['key'] = value;

let person = {};
person['firstName'] = 'G2Academy';

console.log(person);

// PERBEDAAN DOT DAN SQUARE BRACKET
// 1. untuk key names jika ingin menggunakan spasi, itu tidak bisa kalo menggunakan dot
// 2. jika key names ingin didapatkan dari variabel maka harus menggunakan square bracket

//example no 2
let keys = [ 'firstName', 'lastName', 'email' ];
let key = 'gender';

let students = {};
students[keys[0]] = 'Komaruddin'
students[keys[1]] = 'Komar'
students[keys[2]] = 'komar@mail.com'

students[key] = 'male';

// students.key = 'male';

console.log(students);
console.log(students.gender);
console.log(students['email']);


console.log(Object.keys(students)); //[ 'firstName', 'lastName', 'email', 'gender' ]

console.log("=======EXAMPLE ARRAY OF OBJECT=========");
// ARRAY OF OBJECT || OBJECT OF ARRAY

console.log("==================EX ONE==================");
let peserta = [ 'Mr. Calvin;calvin@mail.com;23', 'Miss Michele;michele@mail.com;21', 'Mr. Komarudin;komarudin@mail.com;24'];
let result = [];

for (let i = 0; i < peserta.length; i++) {
    console.log(peserta[i]); // Mr. Calvin;calvin@mail.com;23 

    let dataParsing = peserta[i].split(';') // ['Mr. Calvin', 'calvin@mail.com', '23']
    let titleAndName = dataParsing[0].split(' ') // [ 'Mr.', 'Calvin']

    let person = { nama: titleAndName[1], age: dataParsing[2], email: dataParsing[1]};

    if (titleAndName[0] === 'Mr.') {
        person['gender'] = 'male';
    } else {
        person['gender'] = 'female';
    }

    result.push(person);
}

console.log(result);

// [
//     { nama: 'Calvin', gender: 'male', age: 23, email: 'calvin@mail.com' },
//     { nama: 'Michele', gender: 'female', age: 21, email: 'michele@mail.com' },
//     { nama: 'Komarudin', gender: 'male', age: 24, email: 'komarudin@mail.com' },
// ]

console.log("==================EX TWO==================");
let drivers = [
    { nama: 'Ali', ratings: [ { customer: 'Bella', rating: 4, totalPembayaran: 10000 }, { customer: 'Cinta', rating: 5, totalPembayaran: 15000 } ] },
    { nama: 'Zaki', ratings: [ { customer: 'Erika', rating: 4, totalPembayaran: 20000 }, {customer: 'Doni', rating: 3.5, totalPembayaran: 45000 }, {customer: 'Fadli', rating: 3, totalPembayaran: 5000 } ] }
]

// console.log(drivers[0]['ratings'][0]['customer']);     
// { customer: 'Bella', rating: 4, totalPembayaran: 10000 }

console.log(drivers.length);

let driversResult = [];
let averageStars = {};

for (let i = 0; i < drivers.length; i++) {
    let customers = drivers[i]['ratings'];

    let total = 0;
    for (let j = 0; j < customers.length; j++) {
        total = total + customers[j]['rating'];
    }
    //ini untuk hasil object 
    averageStars[drivers[i]['nama']] = total/customers.length;

    // ini untuk hasil array of object
    driversResult.push({ nama:  drivers[i]['nama'], ratings:total/customers.length })
}

console.log(averageStars);
// { 
//     Ali: 4.5,
//     Zaki: 3,5
// }

console.log(driversResult);
// [
//     { nama: 'Ali', ratings: 4.5},
//     { nama: 'Zaki', ratings: 3.5}
// ]

// ==========TUGAS=========== 
// output yang diharapkan

// {
//     'Ali': { 'rating': 4.5, 'balance': 6500},
//     'Zaki': { 'rating': 3.5, 'balance': 21000}
// }


console.log("==============FUNCTION===============");

// function namaFunction(...) {

// }

/* Regular Function */
function greeting() {
    console.log("Hello World");
    return 'Halo';
}

let hasilPanggilFunction = greeting();
console.log(hasilPanggilFunction);

function add(angka1, angka2) {
    if (typeof angka1 !== 'number' && angka2!== 'number') {
        return 'Please check your input'
    }
    return angka1 + angka2;
}

let hasilHitung = add('hello', 5);
console.log(hasilHitung);

/* Anonymous Function */
let multiply = function (angka1, angka2) {
    if (typeof angka1 !== 'number' && angka2!== 'number') {
        return 'Please check your input'
    }
    return angka1 * angka2;
} 

console.log(multiply(3, 2));

/* Arrow Function */
let substract = (angka1, angka2) => {
    if (typeof angka1 !== 'number' && angka2!== 'number') {
        return 'Please check your input'
    }
    return angka1 - angka2;
}

console.log(substract(50, 23));


// TUGAS 2
// KERJAKAN dengan 3 metode function (regular, anonymus dan arrow)
function giveTitle(people) {
    // your code here
}

console.log(giveTitle([{ name: 'Riza', age: 23, status: 'single', gender: 'male' }, { name: 'Rhaya', age: 22, status: 'marriage', gender: 'female' }]))
// [ 'Master Riza', 'Mrs. Rhaya' ]

console.log(giveTitle([{ name: 'Rizky', age: 23, status: 'marriage', gender: 'male' }, { name: 'Dewi', age: 32, status: 'single', gender: 'female' }, { name: 'Candice', age: 24, status: 'single', gender: 'female'} ]))
// // [ 'Mr. Rizky', 'Miss Dewi', 'Miss Candice' ]

// console.log((giveTitle())); // Invalid Data