let total_belanja = prompt("Masukan Total Belanja Kamu Ya: ")
console.log("Total belanja kamu : " + total_belanja)
let bayar =""


if (total_belanja <=100000 ){
    bayar=total_belanja
    console.log("Kamu belum dapet diskon nih, yuk belanja lagi! ")
    
} else if (total_belanja >=100000 && total_belanja <500000 ){
    bayar=total_belanja-(total_belanja*0.1)
    console.log("Makaz kamu dapet diskon 10%")
    
   
} else if (total_belanja >=510000 && total_belanja <1000000 ){
    bayar=total_belanja-(total_belanja*0.2)
    console.log("Maka kamu mendapatkan diskon 20%")

} else if (total_belanja >=1000000){
   bayar=total_belanja-(total_belanja*0.3)
   console.log("Maka kamu dapet diskon 30%")
} 

console.log("Yang harus kamu bayar ="+bayar)