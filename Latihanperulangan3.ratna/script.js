const anak_ayam = parseInt(prompt("Masukkan jumlah anak ayam:"));
console.log("Anak ayam " + anak_ayam);

for (let r = anak_ayam; r > 0; r--) {
    if (r > 1) {
        console.log("Anak ayam turun " + r + ", mati satu, tinggal " + (r - 1));
    } else {
        console.log("Anak ayam turun 1, mati satu, tinggal induknya");
    }
}

