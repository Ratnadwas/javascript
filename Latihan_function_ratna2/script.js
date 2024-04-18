function kubus(sisi){
    return sisi * sisi * sisi

}
function balok(p, l, t){
    return  p * l * t

}
function tabung(jari2, tinggi ){
    return 3.14 * (jari2 * jari2) * tinggi

}

// FUNCTION EKSPRESI
const bola = function (r2){
    return ( 4 / 3 ) * 3.14 * r2 * r2 * r2 

}

const kerucut = function (r3, tg) {
    return (3.14 * (r3 * r3 * tg)) / 3
}

let lanjut

do {

console.log("-- Mennghitung Volume --");
console.log(" Silahkan pilih menu dibawah ini : ");
console.log("==============================" );
console.log("1. Kubus ");
console.log("2. Balok ");
console.log("3. Tabung ");
console.log("4. Bola " );
console.log("5. Kerucut " );
console.log("===============================" );

const menu = prompt("Pilih Menu : ")
let a, b

switch (menu){
    case "1" :
        sisi = prompt("MASUKAN NILAI sisi : ");
        console.log(" Hasil dari volume kubus : " + parseInt(kubus(sisi)));
        break;
    
        case "2" :
        p = prompt("MASUKAN NILAI Panjang : ")
        l = prompt("MASUKAN NILAI Lebar : ")
        t = prompt("MASUKAN NILAI Tinggi : ")
        console.log(" Hasil dari volume balok " + parseInt(balok(p, l, t)));
        break;
    
        case "3" :
        jari2= prompt("MASUKAN NILAI jari - jari tabung : ")
        tinggi= prompt("MASUKAN NILAI tinggi tabung : ")
        console.log(" Hasil dari volume tabung " + parseFloat(tabung(jari2, tinggi)));
        break;

    case "4" :
        r2 = prompt("MASUKAN NILAI jari - jari bola : ")
        console.log(" Hasil dari volume bola : " + parseFloat(bola(r2)));
        break;
        
    case "5" :
        r3 = prompt("MASUKAN NILAI jari - jari kerucut : ")
        tg = prompt("MASUKAN NILAI tinggi kerucut : ")
        console.log("Hasil dari volume kerucut : " + parseFloat(kerucut(r3, tg)));
        break;
        

    default:
        alert("Menu yang anda pilih tidak tersedia")
        break;
}
 lanjut = prompt( "Mau pilih menu yang lain? (Y/T) ")
} while (lanjut === "Y" || lanjut === "y")