import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("Data Awal");
  index();

  // Tambahkan minimal 2 data baru 
  store({ nama: "User Baru 1", umur: 19, alamat: "Jl. Baru 1", email: "baru1@mail.com" });
  store({ nama: "User Baru 2", umur: 30, alamat: "Jl. Baru 2", email: "baru2@mail.com" });

  console.log("\n Setelah Tambah Data");
  index();

  // Hapus 1 data terakhir
  destroy();

  console.log("\n Setelah Hapus Data");
  index();
};

// jalankan program
main();
