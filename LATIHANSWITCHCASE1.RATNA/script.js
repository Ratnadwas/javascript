console.log(" MENU KALKULATOR SEDERHANA")
console.log(" 1. PENGURANGAN ")
console.log(" 2. PENJUMLAHAN ")
console.log(" 3. PEMBAGIAN ")
console.log(" 4. PERKALIAN ")
console.log(" 5. KELUAR ")

let angka1;
let angka2;
let operasi = prompt("Masukan operasi");

if (operasi < 4){
    angka1 = parseInt(prompt("Masukan angka pertama yang ingin kamu hitung"));
    angka2 = parseInt(prompt("Masukan angka kedua yang ingin kamu hitung"));
    console.log(" ANGKA PERTAMA " + angka1 )
    console.log(" ANGKA KEDUA " + angka2 )
}



let hasil = "";
switch (operasi) {
  case "1":
    hasil = angka1 - angka2;
    console.log ("Hasil dari " + angka1 + " - " + angka2 + " adalah " +   hasil )
    break;
  case "2":
    hasil = angka1 + angka2;
    console.log ("Hasil dari " + angka1 + " + " + angka2 + " adalah " +   hasil )
    break;
  case "3":
    hasil = angka1 * angka2;
    console.log ("Hasil dari " + angka1 + " * " + angka2 + " adalah " +   hasil )
    break;
  case "4":
    hasil = angka1 / angka2;
    console.log ("Hasil dari " + angka1 + " / " + angka2 + " adalah " +   hasil )
    break;
 
    default:
    console.log("KELUAR PROGRAM ------ TERIMA KASIH")
    break;
}



