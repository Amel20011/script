// --- KONFIGURASI NOMOR WHATSAPP ---
// Ganti angka di bawah ini dengan nomor WA kamu (format: 628xxx)
const nomerWA = "13658700681"; 

function buyScript(tipe, harga) {
    // Membuat pesan otomatis
    const pesan = `Halo Liviaa SHOP, saya tertarik membeli *Script Bot WhatsApp ${tipe}* seharga *Rp ${harga}*. \n\nApakah stok masih tersedia?`;
    
    // Encode pesan agar url-friendly
    const url = `https://wa.me/${nomerWA}?text=${encodeURIComponent(pesan)}`;
    
    // Buka link di tab baru
    window.open(url, '_blank');
}
