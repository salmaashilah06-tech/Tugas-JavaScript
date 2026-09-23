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

// =====================================================
// AKTIVITAS 4 : PENENTUAN TIER MEMBERSHIP
// =====================================================

let tierMember = "";

let benefitMember = "";


if (totalPoin >= 100) {

    tierMember = "Platinum";

    benefitMember =
        "Diskon 20% + Gratis 1 Minuman Signature";

} else if (totalPoin >= 70) {

    tierMember = "Gold";

    benefitMember =
        "Diskon 10% di setiap transaksi";

} else if (totalPoin >= 40) {

    tierMember = "Silver";

    benefitMember =
        "Diskon 5% untuk menu minuman";

} else {

    tierMember = "Bronze";

    benefitMember =
        "Member Reguler";
}


console.log("");

console.log("=== STATUS MEMBERSHIP ===");

console.log("Nama Member : " + namaPelanggan);

console.log("Total Poin  : " + totalPoin);

console.log("Tier Member : " + tierMember);

console.log("Benefit     : " + benefitMember);


alert(
    "=== RINGKASAN MEMBER ===\n\n" +
    "Nama       : " + namaPelanggan + "\n" +
    "Total Poin : " + totalPoin + "\n" +
    "Tier       : " + tierMember + "\n" +
    "Benefit    : " + benefitMember
);

// =====================================================
// AKTIVITAS 5 : FUNCTION MODULAR REUSABLE
// =====================================================


// Function menghitung total poin
function hitungTotalPoin(p1, p2, p3) {

    let total = p1 + p2 + p3;

    return total;
}


// Function menentukan tier member
function tentukanTierMember(poin) {

    if (poin >= 100) {

        return "Platinum";

    } else if (poin >= 70) {

        return "Gold";

    } else if (poin >= 40) {

        return "Silver";

    } else {

        return "Bronze";
    }
}


// =====================================================
// SIMULASI PELANGGAN B
// =====================================================

let pelangganB = "Pelanggan B";

let totalPoinB =
    hitungTotalPoin(30, 25, 20);

let tierPelangganB =
    tentukanTierMember(totalPoinB);


console.log("");

console.log("=== SIMULASI PELANGGAN B ===");

console.log("Nama       : " + pelangganB);

console.log("Total Poin : " + totalPoinB);

console.log("Tier       : " + tierPelangganB);


// =====================================================
// SIMULASI PELANGGAN C
// =====================================================

let pelangganC = "Pelanggan C";

let totalPoinC =
    hitungTotalPoin(50, 40, 30);

let tierPelangganC =
    tentukanTierMember(totalPoinC);


console.log("");

console.log("=== SIMULASI PELANGGAN C ===");

console.log("Nama       : " + pelangganC);

console.log("Total Poin : " + totalPoinC);

console.log("Tier       : " + tierPelangganC);

// =====================================================
// AKTIVITAS 6 : ARRAY & PERULANGAN MENU REKOMENDASI
// =====================================================

// Array menu rekomendasi
let menuRekomendasi = [

    "Kopi Susu Gula Aren",

    "Cappuccino",

    "Matcha Latte",

    "Croissant",

    "Chocolate Cake"

];


// Menampilkan menu ke Console
console.log("");

console.log("=== MENU REKOMENDASI KEDAI ===");


for (
    let i = 0;
    i < menuRekomendasi.length;
    i++
) {

    console.log(
        (i + 1) +
        ". " +
        menuRekomendasi[i]
    );
}


// Menampilkan jumlah menu
console.log(
    "Jumlah Menu Rekomendasi : " +
    menuRekomendasi.length
);


console.log("");

console.log("=== PROGRAM SELESAI ===");
