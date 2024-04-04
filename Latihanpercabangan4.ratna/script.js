const nama = prompt("Kenalan dulu yu, nama kamu siapa? ");
let golongan = prompt("Masukan Golongan Kamu");
let jam_kerja = prompt("Masukan Jam Kerja Kamu");

let gaji_perjam;
switch (golongan) {
  case "A":
    gaji_perjam = 6000;
    break;
  case "B":
    gaji_perjam = 7000;
    break;
  case "C":
    gaji_perjam = 8000;
    break;
  case "D":
    gaji_perjam = 10000;
    break;
  default:
}

let total_gaji_perminggu = jam_kerja * gaji_perjam

let uang_lembur;


if (jam_kerja > 48) {
  uang_lembur = (jam_kerja - 48) * 5000;
} 
let total_gaji = total_gaji_perminggu + uang_lembur

console.log("Nama : "+nama+"\n Golongan : "+golongan+"\n Jam Kerja : "+jam_kerja)
console.log(nama+ " Menerima gaji sebesar "+total_gaji+" perminggu")
