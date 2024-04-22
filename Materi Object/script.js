const ini_objc = {
    // key-value pair  (pasangan kunci-nilai)
    // key: (isi value) object pakai (;)
    nama: " Ratna Dwi Astuti", // key-value disebut property
    nim: " 10115425 ",
    nlai: 8.9,
    umur: 19 + " tahun " ,
};
console.log(ini_objc);
// memanggil salah satu property

console.log(ini_objc.nama);
ini_objc ["alamat"] = "KOSAMBI";
ini_objc ["no_telepon"] = "085648192645";
// di bawah ini adalah property
ini_objc["sapa"] = function () {
    console.log("Halo nama saya Ratna");
}
console.log(ini_objc);

// memanggil function
console.log(ini_objc.sapa());

// menghapus property
delete ini_objc["umur"];

//untuk memanggil object kosong
console.log(typeof ini_objc);

// contoh gabungan object dengan array
const siswa_BLK = [
    {
        nama: " Adeh Kurniasari ",
        alamat: " KARTIKA ",
        umur: 19 + " tahun ",
    }, 
    {
        nama: " AL-FIKIH ",
        alamat: " KARTIKA ",
        umur: 19 + " tahun ",
    },
    {
        nama: " MIFTAHUL MAUBI ",
        alamat: " KARTIKA ",
        umur: 19 + " tahun ",
    }
];

const kependudukan = [
    {
        nama : " RATNA DWI ASTUTI ",
        nik : " 321893946804039484568 ",
        sapa : function(){
            console.log("object ini milik " + this.nama);
        }
    }
    ]


console.log(" Hallo nama saya " +
 siswa_BLK[1].nama +
", alamat di " + 
siswa_BLK[1].alamat +
" , umur saya " + 
siswa_BLK[1].umur
);

// MATERI THIS