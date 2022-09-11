// 1. Terdapat sebuah array dengan data nama2 siswa yaitu "Udin" "Bambang", "Tejo"
// 2. masukan data baru ke array tersebut dengan data "Jacky" pada urutan terakhir
// 3. Hapus data pertama pada array itu (Udin)
// 4. hapus data terakhir pada array itu (Jacky)
// expected output = Bambang, Tejo
// 5. Masukan data pada urutan pertama pada array tersebut dengan data "Kucrut"
// expected output

// Kucrut, Bambang, Tejo

const siswa = []
siswa.push("Udin", "Bambang", "Tejo")
siswa.push("Jacky")
siswa.shift()
siswa.pop()
siswa.unshift("kucrut")
console.log(siswa)


