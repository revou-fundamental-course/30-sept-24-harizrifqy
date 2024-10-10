// Event listener untuk tombol konversi
document.getElementById('convertButton').addEventListener('click', function() {
    // Mengambil nilai input suhu dan skala yang dipilih
    const temperatureInput = document.getElementById('temperature').value; 
    const scale = document.getElementById('scale').value; 
    let result;

    // Validasi input suhu
    if (temperatureInput === '' || isNaN(temperatureInput)) {
        alert('Silakan masukkan angka yang valid untuk suhu.'); // Notifikasi jika input tidak valid
        return; // Keluar dari fungsi jika input tidak valid
    }

    const temperature = parseFloat(temperatureInput); // Mengonversi input menjadi angka

    // Konversi berdasarkan skala yang dipilih
    if (scale === 'celsius') {
        // Konversi dari Celsius ke Fahrenheit
        result = (temperature * 9/5) + 32; 
        document.getElementById('conversionMethod').value = `(${temperature} x 9/5) + 32`;
    } else {
        // Konversi dari Fahrenheit ke Celsius
        result = (temperature - 32) * 5/9; 
        document.getElementById('conversionMethod').value = `(${temperature} - 32) x 5/9`;
    }

    // Menampilkan hasil konversi dengan dua angka desimal
    document.getElementById('result').value = result.toFixed(2); 
});

// Event listener untuk tombol reset
document.getElementById('resetButton').addEventListener('click', function() {
    // Mengosongkan semua input dan output
    document.getElementById('temperature').value = ''; 
    document.getElementById('result').value = ''; 
    document.getElementById('conversionMethod').value = ''; 
    document.getElementById('scale').value = 'celsius'; // Mengatur skala kembali ke Celsius
});
