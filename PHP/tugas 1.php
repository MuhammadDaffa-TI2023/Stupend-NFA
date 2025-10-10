<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Nilai Ujian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            padding: 20px;
        }
        form {
            background: white;
            padding: 20px;
            width: 300px;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            width: 100%;
            border-radius: 5px;
            cursor: pointer;
        }
        .hasil {
            background: white;
            width: 300px;
            margin: 20px auto;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Form Nilai Ujian</h2>

<form method="POST" action="">
    <label>Nama:</label>
    <input type="text" name="nama" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Nilai Ujian:</label>
    <input type="number" name="nilai" required>

    <button type="submit" name="kirim">Kirim</button>
</form>

<?php
// Mengecek apakah tombol kirim ditekan
if (isset($_POST['kirim'])) {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilai = $_POST['nilai'];

    // Struktur kendali
    if ($nilai > 70) {
        $status = "Lulus";
    } else {
        $status = "Remedial";
    }

    // Menampilkan hasil
    echo "<div class='hasil'>
            <h3>Hasil:</h3>
            <p><strong>Nama:</strong> $nama</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Nilai:</strong> $nilai</p>
            <p><strong>Status:</strong> $status</p>
          </div>";
}
?>

</body>
</html>
