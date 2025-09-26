import users from "./data.mjs";

// Melihat data
const index = () => {
  console.log("Daftar Users ");
  users.map((u, i) => {
    console.log(`${i + 1}. ${u.nama}, Umur: ${u.umur}, Alamat: ${u.alamat}, Email: ${u.email}`);
  });
};

// Menambah data
const store = (user) => {
  users.push(user);
  console.log(`Data berhasil ditambahkan: ${user.nama}`);
};

// Menghapus data (hapus terakhir)
const destroy = () => {
  const removed = users.pop();
  console.log(` Data dihapus: ${removed?.nama}`);
};

export { index, store, destroy };
