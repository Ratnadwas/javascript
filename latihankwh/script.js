let kwh = parseInt(prompt("Masukan jumlah kwh: "))
console.log("Total pemakaian kamu : " + kwh)
let perkwh = 1500
console.log("Biaya sebelum diskon" + perkwh * kwh)
let biaya = ""


if (kwh <= 40 ){
    biaya=kwh-(kwh*0.3)
    console.log("Maka kamu dapat diskon 30%")
    
} else if (kwh > 40 ){
    biaya=perkwh
    console.log("Kamu belum dapet diskon nih, kurangi penggunaan listriknya ya! ")

} 

console.log("Yang harus kamu bayar ="+ biaya)