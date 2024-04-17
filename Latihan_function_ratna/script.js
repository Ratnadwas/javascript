function persegi(s1, s2){
    return s1 * s2

}
function persegi_panjang(p, l){
    return  p * l

}
function lingkaran(jari_jari){
    return 3.14 * (jari_jari * jari_jari)

}

// FUNCTION EKSPRESI
const segitiga = function (alas, tinggi){
    return ( alas * tinggi ) 

}

let lanjut

do {

console.log("-- Mencari Luas --");
console.log(" Silahkan pilih menu dibawah ini : ");
console.log("=====================" );
console.log("1. Persegi ");
console.log("2. Persegi Panjang ");
console.log("3. Lingkaran ");
console.log("4. Segitiga " );
console.log("=====================" );

const menu = prompt("Pilih Menu : ")
let a,b

switch (menu){
    case "1" :
        s1 = prompt("MASUKAN NILAI s1 : ");
        s2 = prompt("MASUKAN NILAI s2 : ");
        console.log(parseInt(persegi(s1, s2)));
        break;
    
        case "2" :
        p = prompt("MASUKAN NILAI p : ")
        l = prompt("MASUKAN NILAI l : ")
        console.log(parseInt(persegi_panjang(p, l)));
        break;
    
        case "3" :
        jari_jari= prompt("MASUKAN NILAI jari_jari : ")
        console.log(parseFloat(lingkaran(jari_jari)));
        break;

    case "4" :
        alas = prompt("MASUKAN NILAI alas : ")
        tinggi = prompt("MASUKAN NILAI tinggi : ")
        console.log(parseFloat(segitiga(alas, tinggi)));
        

    default:
        alert("Menu yang anda pilih tidak tersedia")
        break;
}
 lanjut = prompt( "Mau pilih menu yang lain? (Y/T) ")
} while (lanjut === "Y" || lanjut === "y")