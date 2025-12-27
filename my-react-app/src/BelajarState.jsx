import { useState } from 'react';

// ✅ CONTOH YANG BENAR (Pake State)
export default function BelajarState() {
  const [angka, setAngka] = useState(0);

  const tambahAngka = () => {
    setAngka(angka + 1); // <--- Ini "Toa/Speaker" buat lapor ke React
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Nilai di Layar: {angka}</h1>
      <button onClick={tambahAngka}>Tambah (Pake State)</button>
      <p>Nah, sekarang layarnya ikut berubah kan?</p>
    </div>
  );
}
