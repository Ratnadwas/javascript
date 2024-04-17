// CARA MEMBUAT ARRAY DI JS ADA 3

// CARA KE-1

const angka = new Array(1, 3, 5, 7, 9);
console.log(angka);

// CARA KE-2

const angka2 = new Array(5);


// CARA KE-3

const angka3 = [2, 4, 6, 8, 10];
console.log(angka3);

// CARA KE - 4

let angka4 = []

// CARA MENAMPILKAN ISI ARRAY KE - 1

console.log(angka[0]) // 1
console.log(angka[1]) // 3

// CARA MENAMPILKAN ISI ARRAY KE - 2 (seluruh isi array)

for  (let i = 0; i < angka.length; i++) {
    console.log(" Index ke - " + i + " = " + angka [i]);
}

// JIKA MENGGUNAKAN for  (let i = 0; i <= angka.length - 1; i++) {

// CARA MENAMBAHKAN ISI KE DALAM ARRAY

angka2[0] = 5 
angka2[1] = 12
angka2[2] = 17
angka2[3] = 21
angka2[4] = 28

console.log(angka2);


// CARA MENGHAPUS ELEMENT ARRAY KE - 1
// menggunakan undefined

angka3[2] = undefined
angka3[4] = undefined
console.log(angka3)

// CARA MENGHAPUS ELEMENT ARRA KE - 2
// menggunakan delete

delete angka3[0];
delete angka3[1];
delete angka3[3];
console.log(angka3)


