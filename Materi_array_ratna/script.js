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

// splice = menyisipkan elemen baru yang sudah tersedia / tertentu 
// splice(idxAwl, mauDihapusBerapa, element1, element2, dst....)
murid.splice(2, 0, "Yudha", "Jabbar", "Dani")
console.log(murid)

// foreach kurleb sama kaya perulangan for
console.log("ini foreach")
const nilai = [70, 75, 82, 65, 58];

nilai.forEach(function (e,i) {
    console.log("Index ke- " + i + " = " + e)
});

// sort = mengurutkan array
console.log(nilai.sort())

// map = menentukan nilai yang ada di dalam array  ( menghasilkan array baru)
console.log("ini map")
const dikaliDua =  nilai.map(function (e){ 
    return e * 2;
    
})
console.log(dikaliDua);

// filter and find ( filter  > menyaring lebih dari 1 array ) ( find > menghasilkan satu nilai pertama dari kriteria)
const bilanganBulat = [2, 3, 1, 7, 6, 9, 11, 8];
const bilBul = bilanganBulat.filter(function (e) {
    return e >  5;
});

const bilBul2 = bilanganBulat.find(function (e){
    return e > 5; 
})

console.log(bilBul);
console.log(bilBul2);