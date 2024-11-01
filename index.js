let biodata = {
  nama: "Rayhan",
  usia: "16 Tahun",
  sekolah: "SMKN 4 Tasikmalaya",
  kelas: "XI PPLG 4",
  alamat: "Jl. Gunung Salem",
  hobi: "Tidur",
  profil: "Ray.png",
};
const profil = document.querySelector(".profile-img");
profil.src = biodata.profil;
const nama = document.querySelector(".nama");
nama.innerHTML = "Nama : " + biodata.nama;
const usia = document.querySelector(".usia");
usia.innerHTML = "Usia : " + biodata.usia;
const sekolah = document.querySelector(".sekolah");
sekolah.innerHTML = "Sekolah : " + biodata.sekolah;
const kelas = document.querySelector(".kelas");
kelas.innerHTML = "Kelas : " + biodata.kelas;
const alamat = document.querySelector(".alamat");
alamat.innerHTML = "Alamat : " + biodata.alamat;
const hobi = document.querySelector(".hobi");
hobi.innerHTML = "Hobi : " + biodata.hobi;

nama.innerHTML = "Nama : " + biodata.nama;
