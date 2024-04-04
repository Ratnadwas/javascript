let a = 3
let b = 2

let c = a + b 

console.log(c);

a = 6
b = 3

c = a / b
console.log(c)

let pertambahan1 = 9
let pertambahan2 = 13

let pertambahan = pertambahan1 + pertambahan2
console.log(pertambahan)

let pengurangan1 = 7
let pengurangan2 =13

let pengurangan = pengurangan1 - pengurangan2
console.log(pengurangan)

let pembagian1 = 50
let pembagian2 = 5

let pembagian = pembagian1 / pembagian2
console.log(pembagian)

let perkalian1 = 6
let perkalian2 = 7

let perkalian = perkalian1 * perkalian2
console.log(perkalian)

// Augmented Assignment

let x = 3
let y = 5
console.log(x += y)
console.log(x += y)
console.log(y *= x)
console.log(y -= x)
console.log(y -= x)

// Operator Unary Increment (Menambahkan 1)

let s = 8
console.log(s++)
console.log(s++)
console.log(s++)

// Operator Unary Decrement ( Mengurangi 1 angka dari sebelumnya )

let join = 12
console.log(join --)
console.log(join --)
console.log(join --)


// Operator Perbandingan

let angka1 = 20

if (angka1 % 3 === 0){
    console.log("Ini Bilangan Genap")
}   else {
    console.log("Ini Bilangan Ganjil")
}

// Operator Ternary

const ganjilGenap =
angka1 % 2 === 0? "Ini Bilangan Genap" : "Ini Bilangan Ganjil"
console.log(ganjilGenap)

const password1 = "luwakwhitecoffe"
const isLogin = password1 === "luwakwhitecoffe"
                ? "mendapatkan uang 200"
                : "lonbayarin gue" 
console.log(isLogin)


// Operator String

const kata1 = "Selamat"
const kata2 = "Datang"

console.log(kata1+ " " +kata2)


// Operetor Aritmatika
// +,-,/,*,**,%

// Operator Unary
// +,-,++,--

// Operator Logika
// && (AND),|| (OR), ! (NEGASI) = AKAN MENGHASILKAN TRUE / FALSE

console.log(10%2=== 0 && 10/5 === 2)

// INI KOMENTAR SATU BARIS
/* A
   A
   A
   INI  KOMENTAR BARIS LEBIH DARI SATU
*/

//built in function = prompt, alert, dialog 

// Hitung Luas Segitiga