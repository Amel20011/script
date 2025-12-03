// --- KONFIGURASI NOMOR WHATSAPP ---
// PASTIKAN Anda MENGGANTI nomor di bawah ini dengan nomor WA ASLI Anda (format: 628xxx)
const nomerWA = "13658700681"; // GANTI NOMOR INI! Contoh: "628123456789"

function buyScript(tipe, harga) {
    // 1. Cek apakah pengguna sudah mengganti nomor WA placeholder
    if (nomerWA === "6281234567890") {
        alert("🚨 PERINGATAN: Tombol tidak berfungsi! Anda harus mengganti variabel 'nomerWA' di file script.js dengan nomor WhatsApp Anda yang asli (format 628...).");
        console.error("Kesalahan: Nomor WhatsApp belum diganti.");
        return; 
    }

    // 2. Logika Pembuatan Pesan WA
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Script Bot WhatsApp ${tipe}* seharga *Rp ${harga}*. \n\nApakah stok masih tersedia?`;
    
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // 3. Buka Link
    window.open(url, '_blank');
}
