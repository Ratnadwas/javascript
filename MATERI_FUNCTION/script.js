// MENGHITUNG VOLUME KUBUS MENGGUNAKAN FUNCTION

const s1 = 8
const s2 = 5 
const s3 = 10
const s4 = 6
const s5 = 7
const s6 = 3

const volumes1 = s1 * s1 * s1 // 512
const volumes2 = s2 * s2 * s2 // 125
const volumes3 = s3 * s3 * s3 // 100
const volumes4 = s4 * s4 * s4 // 236
const volumes5 = s5 * s5 * s5 // 343
const volumes6 = s6 * s6 * s6 // 27

let total = volumes1 + volumes2; // 637
total = volumes3 + volumes4; // 1216
total = volumes5 + volumes6; // 370
console.log(total);

// FUNCTION UNDIFINED

function babe(a, b) {
    console.log(a + " suka " + b);
}

babe( " RATNA " , " NASI GORENG ")

// FUNCTION KALKULATOR SEDERHANA 
/*
function penjumlahan(a, b){
    const c = a + b
    return c;
}
*/

// FUNCTION DEKLARASI

function penjumlahan(a, b){
    return a + b

}
function pengurangan(a, b){
    return a - b

}
function perkalian(a, b){
    return a * b

}

// FUNCTION EKSPRESI
const pembagian = function (a, b){
    return a / b

}

let lanjut

do {

console.log("-- Aplikasi Sederhana Kalkulator --");
console.log(" Silahkan pilih menu dibawah ini : ");
console.log("=====================" );
console.log("1. Penjumalahan ");
console.log("2. Pengurangan ");
console.log("3. Perkalian ");
console.log("4. PEMBAGIAN " );
console.log("=====================" );

const menu = prompt("Pilih Menu : ")
let a,b

switch (menu){
    case "1" :
        a = parseInt(prompt("MASUKAN NILAI A : "));
        b = parseInt(prompt("MASUKAN NILAI B : "));
        console.log(parseInt(penjumlahan(a, b)));
        break;
    
        case "2" :
        a = prompt("MASUKAN NILAI A : ")
        b = prompt("MASUKAN NILAI B : ")
        console.log(parseInt(pengurangan(a, b)));
        break;
    
        case "3" :
        a = prompt("MASUKAN NILAI A : ")
        b = prompt("MASUKAN NILAI B : ")
        console.log(parseInt(perkalian(a, b)));
        break;

    case "4" :
        a = prompt("MASUKAN NILAI A : ")
        b = prompt("MASUKAN NILAI B : ")
        console.log(parseFloat(pembagian(a, b)));
        

    default:
        alert("Menu yang anda pilih tidak tersedia")
        break;
}
 lanjut = prompt( "Mau pilih menu yang lain? (Y/T) ")
} while (lanjut === "Y" || lanjut === "y")

// ARROW FUNCTION

/* const modulus = (a, b) => {
    return a % b
}
*/

const total1 = penjumlahan (9, 5) + penjumlahan (8, 7)
console.log(total1)