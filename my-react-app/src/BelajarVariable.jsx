/* eslint-disable */
export default function BelajarVariable() {
  let angka = 0;

  const tambahAngka = () => {
    angka = angka + 1;
    console.log("Nilai variabel angka sekarang:", angka);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Nilai di Layar: {angka}</h1>
      <button onClick={tambahAngka}>Tambah (Variabel Biasa)</button>
      <p>Coba liat Console Log, angkanya nambah. Tapi di layar kok diem aja?</p>
    </div>
  );
}
