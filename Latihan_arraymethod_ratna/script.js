// NO. 1
console.log(" NO. 1 ")
const mahasiswa = ["Andrew,", "Bob,", "Clark,", "David,", "Ethan,", "Fernando,", "Gabriel."];

console.log("Semua nama mahasiswa:");
console.log(mahasiswa.join(" "));

// NO. 2
console.log(" NO. 2 ")
mahasiswa.push("Harold,", "Iglesias", "Jackson.");

console.log("menambahkan tiga nama mahasiswa baru :");
console.log(mahasiswa);


// NO. 3
console.log(" NO. 3 ")
console.log(" Menampilkan 3 mahasiswa terbaik : ")
const mahasiswa1 = mahasiswa.slice(1, 2)
const mahasiswa2 = mahasiswa.slice(3, 4)
const  mahasiswa3 = mahasiswa.slice(5, 6)
console.log(mahasiswa1.join( " " ), mahasiswa2.join( " " ),  mahasiswa3.join( " " ))


// NO. 4
console.log(" NO. 4 ")
mahasiswa.pop();
console.log("Menghapus nama mahasiswa terakhir :");
console.log(mahasiswa);


// NO. 5
console.log(" NO. 5 ")
mahasiswa.shift();
console.log("Menghapus nama mahasiswa pertama :");
console.log(mahasiswa);

// NO. 6
console.log(" NO. 6 ")
mahasiswa.unshift("Andy,");
console.log("Menambahkan nama Andy sebelum Bob :");
console.log(mahasiswa);

// NO. 7
console.log(" NO. 7 ")
mahasiswa[5] = "Francesco,";
console.log("Nama Fernando di ubah menjadi Francesco :");
console.log(mahasiswa)


// NO. 8
console.log(" NO. 8 ")
mahasiswa[4] = delete
console.log("Nama Ethan telah di hapus :")
console.log(mahasiswa);




