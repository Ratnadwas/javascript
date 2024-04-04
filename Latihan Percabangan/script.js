// If statement

const total_belanja = 120000


if (total_belanja > 100000){
    
    console.log("Selamat Anda Mendapatkan Hadiah! ")
}

console.log("Terima kasih sudah berbelanja! ")




// If ... else statement

const Total_belanja = prompt("Masukan Total Belanja Kamu YA: ")


if (total_belanja > 100000){
    console.log("Selamat Anda Mendapatkan Piring Cantik! ")
} else {
    console.log("Mohon Maaf Anda Belum Mendapatkan Hadiah! ")
}

console.log("Terima Kasih Sudah Berbelanja")


// Login

const password2 = "uhuy"

if (password2 === "legendoffaang"){
    console.log("Silahkan Masuk, Faang! ")
} else {
    console.log("Mohon Maaf Kamu Belum Bisa Masuk Nih")
}

// If .... else If .... else statement

const nilai = prompt("Masukan Nilai Anda: ")

if (nilai >=80 ){
    console.log("NSelamat Nilai Anda Berpredikat Baik")
} else if (nilai >=60 ){
    console.log("Nilai Kamu Berpredikat Cukup Baik")
} else if (nilai >=50 ){
    console.log("Nilai Kamu Berpredikat BURUK nih")
} else{
    console.log("Kamu Harus Semangat Belajar Lagi YA, SEMANGAT! ")
}


// Switch Statement

const warna1 = " jingga"
let pesan = "";

switch (warna1) {
    case 'merah':
        pesan = "Anda Memilih Warna Merah"
        break;
    case 'biru':
        pesan = "Anda Memilih Warna Biru"
        break;
    case 'orange':
        pesan = "Anda Memilih Waena Orange"
        break;
    default:
        pesan = "Warna Yang Anda Pilih Tidak Ada Nih"
        break;
}
console.log(pesan)
