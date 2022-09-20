const biodata = {
    nama_depan: "amel",
    nama_belakang: "veronica",
    hobby: ["membaca", "nyanyi", "travelling", "belajar", "drakoran"],
    angka_favorit: 7,
    memakai_kacamata: true,
    status: "belum menikah",
  };
  const nama_lengkap = biodata.nama_depan + " " + biodata.nama_belakang;
  
  console.log(biodata);
  console.log(nama_lengkap);
  console.log(biodata["angka_favorit"]);
  biodata.angka_favorit = 8;
  console.log(biodata);
  biodata.hobby.push("coding");
  console.log(biodata);
  biodata.lulusan = "Hacktiv8";
  console.log(biodata);
  biodata.hobby.forEach((hobi) => {
    console.log(hobi);
  });
  
  for (const property in biodata) {
    console.log(`${property}: ${biodata[property]}`);
  }
  
  for (const values in biodata) {
    console.log(`${values}: ${biodata[values]}`);
  }
