const jumlah_elemen = parseInt(prompt("Masukkan berapa elemen array yang kamu inginkan"));
console.log("Elemen array yang kamu masukkan " + jumlah_elemen);

let angka = [];
for (let a = 0; a < jumlah_elemen; a++) {
    angka[a] = parseInt(prompt("Masukkan nilai ke " + (a + 1) + " : "));
}

function hitung_hasil(angka) {
    let total = 0;
    for (let a = 0; a < angka.length; a++) {
        total = total + angka[a];
    }
    return total;
}

function hitung_ratarata(angka) {
    let rata_rata = hitung_hasil(angka);
    return rata_rata / angka.length;
}

let total = hitung_hasil(angka);
let rata_rata = hitung_ratarata(angka);

console.log(angka);
console.log("JUMLAH KESELURUHAN ELEMEN ARRAY ADALAH : " + total);
console.log("RATA - RATA JUMLAH DARI ELEMEN ARRAY ADALAH : " + rata_rata);
