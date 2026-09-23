// =====================================================
// TUGAS MANDIRI / PEKERJAAN RUMAH (PR)
// SISTEM POIN & KEANGGOTAAN MEMBER KEDAI KOPI
// =====================================================


// =====================================================
// AKTIVITAS 1 : SETUP BERKAS & INTEGRASI JAVASCRIPT
// =====================================================

// Mencetak salam pembuka ke Console
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

console.log("Javascript Terhubung!");


// =====================================================
// AKTIVITAS 2 : VARIABEL & DIALOG INTERAKTIF
// =====================================================

// Variabel const
const NAMA_KEDAI = "Secangkir Kopi";

// Variabel let
let namaKasir = "Kak Salma";

console.log("Nama Kasir Awal : " + namaKasir);


// Demonstrasi re-assign variabel let
namaKasir = "Kak Calma";

console.log("Nama Kasir Setelah Diubah : " + namaKasir);


// Dialog pembuka
alert(
    "Selamat Datang di " +
    NAMA_KEDAI +
    "!\n\nSistem Poin & Keanggotaan Member"
);


// Meminta nama pelanggan
let namaPelanggan = prompt(
    "Halo! Masukkan nama pelanggan untuk memulai:"
);


// Pengkondisian IF ELSE
if (namaPelanggan) {

    alert(
        "Halo, " +
        namaPelanggan +
        "! Selamat berbelanja di " +
        NAMA_KEDAI +
        "."
    );

    console.log("Nama Pelanggan : " + namaPelanggan);

} else {

    namaPelanggan = "Pelanggan Setia";

    alert(
        "Nama tidak dimasukkan.\n" +
        "Nama default: " +
        namaPelanggan
    );

    console.log("Nama Pelanggan : " + namaPelanggan);
}


// =====================================================
// AKTIVITAS 3 : AKUMULASI POIN
// =====================================================

let poinKopi = 45;

let poinMakanan = 35;

let poinMerchandise = 20;


// Menghitung total poin
let totalPoin =
    poinKopi +
    poinMakanan +
    poinMerchandise;


// Menampilkan rincian poin
console.log("");

console.log("=== RINCIAN PEROLEHAN POIN ===");

console.log("Pelanggan        : " + namaPelanggan);

console.log("Poin Kopi        : " + poinKopi);

console.log("Poin Makanan     : " + poinMakanan);

console.log("Poin Merchandise : " + poinMerchandise);

console.log("Total Poin       : " + totalPoin);


