import { useState, useEffect } from 'react';

function BelajarEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /** 
   * INFO: Silahkan aktifkan (uncomment) salah satu fase di bawah 
   * untuk melihat perbedaannya di Console Log browser (F12).
   */

  // --- FASE 1: Satpam Overworked (Tanpa Array) ---
  // Berjalan SETIAP KALI ada perubahan apapun (count atau name)
  /*
  useEffect(() => {
    console.log("👮 Satpam: Woi! Ada yang berubah nih di komponen!");
  });
  */

  // --- FASE 2: Satpam Anak Baru (Array Kosong []) ---
  // Berjalan HANYA SEKALI saat komponen pertama kali muncul (mount)
  /*
  useEffect(() => {
    console.log("👋 Satpam: Halo! Saya baru mulai shift (Component Mount).");
  }, []);
  */

  // --- FASE 3: Satpam Spesialis (Array [count]) ---
  // Berjalan saat pertama kali muncul DAN saat 'count' berubah saja
  useEffect(() => {
    console.log("👀 Satpam: Bos, ada yang ngubah angka jadi " + count);
  }, [count]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Belajar useEffect (Analogi Satpam)</h1>
      <hr />
      
      <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ddd' }}>
        <h3>Bagian Klik (State: count)</h3>
        <p>Total Klik saat ini: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Tambah Klik</button>
      </div>

      <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ddd' }}>
        <h3>Bagian Input (State: name)</h3>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Ketik nama di sini..." 
          style={{ padding: '8px', width: '250px' }}
        />
        <p>Nama di State: <strong>{name}</strong></p>
      </div>

      <p style={{ color: '#666', fontStyle: 'italic' }}>
        *Tips: Buka Inspect Element -> Console (F12) untuk melihat laporan Satpam.
      </p>
    </div>
  );
}

export default BelajarEffect;
