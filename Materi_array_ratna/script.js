const arr = [2, 4, 3, 5, 6];

// length = menampilkan jumlah isi dari array
console.log(arr.length) //5

//join = menggabungkan isi array menjadi sebuah string
const kata = ['B', 'A', 'J', 'U']
const kata2 = ["RATNA", "DWI", "ASTUTI"]
console.log(kata.join("-"))
console.log(kata2.join(" "))

//push = menambahkan elemen array di bagian terakhir
arr.push(13, "MANGGAA", "4.5")
kata.push("L", "E", "B", "A", "R", "A", "N")
kata2.push("BAIK")

console.log(arr)
console.log(kata.join("-") + "\n" + kata2.join(" "));

// pop = menghapus elemen di terakhir array 
arr.pop()
console.log(arr)

//unshift = menambahkan elemen di awal array
//[7, 2, 4, 3, 5, 6];
arr.unshift(7);
console.log(arr)

// shift = menghapus elemen pertama array
kata.shift()
console.log(kata)

// slice(idxAwal, idxAkhir)
const murid = ["Maulana", "Naufal", "Faisal", "Topik", "Rian"]

// slice = akan menghasilkan
const murid2 = murid.slice(2, 4)
console.log(murid2)

// splice = mengisipkan elemen baru yang sudah tersedia 