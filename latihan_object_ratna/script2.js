console.log("====================================================================")
console.log( "KODE BARANG\tNAMA PRODUK\t\tHARGA\t\tSTOCK ")
console.log("====================================================================")

let lanjut

do {

let kode_barang = prompt (" MASUKAN KODE BARANG ");
let nama_produk = prompt (" MASUKAN NAMA BARANG ");
let harga = parseFloat(prompt (" MASUKAN HARGA BARANG "));
let stock  = prompt (" MASUKAN STOCK BARANG ");



    console.log(
    kode_barang +
    "\t\t" +
    nama_produk +
    "\t\t" +
    harga +
    "\t\t" +
    stock
);
    

lanjut = prompt( "Mau pilih menu yang lain? (Y/T) ")
} while (lanjut === "Y" || lanjut === "y")