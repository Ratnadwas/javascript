let a = parseInt(prompt("Masukan nominal pertama yang ingin kamu jumlahkan"))


let jumlah = 0
for (let i = 1; i <= a; i++){
    jumlah += i;
}

console.log("Jumlah nilai deret antara 1 sampai " + a + " adalah = " + jumlah)


/*
// Ver 2

let n = prompt ("Masuka niai n")
let jumlah1  = 0
let i = 1;
while (i <= n){
    jumlah1 = jumlah1 + i;
    i++
}
console.log("Hasil perjumlaham deret 1 sampai dengan " + n + "adalah")
*/


