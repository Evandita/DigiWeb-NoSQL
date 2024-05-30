# Digital Laboratory Web (DigiWeb) Project

## Description
Pengembangan aplikasi web telah melampaui penggunaan basis data relasional tradisional. Teknologi NoSQL menjadi pilihan populer untuk menangani data tidak terstruktur. Kelompok 01 akan mengembangkan Web Digilab dengan NoSQL dan Docker. 

NoSQL tidak menggunakan tabel dan skema, memungkinkan pengolahan data lebih fleksibel. Docker memungkinkan pengemasan aplikasi dan dependensinya menjadi satu kontainer, dapat dijalankan di berbagai lingkungan. 

Web Digilab akan menggunakan NoSQL untuk fleksibilitas struktur data dan Docker untuk penyebaran yang konsisten. Kombinasi NoSQL dan Docker memungkinkan pembangunan aplikasi web yang skalabel, fleksibel, dan mudah dikelola.

### Previous GitHub Repo
Isi apa bang ???

## Front End
Front end Digilab adalah aplikasi web yang dibangun menggunakan ReactJS sebagai framework. Aplikasi ini menyediakan antarmuka pengguna yang intuitif dan responsif untuk mengakses fitur-fitur yang tersedia di platform DigiLab.


### Components
1. **Login Component:**
Komponen Login bertanggung jawab untuk menangani login pengguna. Ini menampilkan formulir login untuk pengguna memasukkan email dan password, memvalidasi input pengguna, mengirim permintaan login pengguna, menyimpan informasi otentikasi pengguna di local storage, dan mengalihkan pengguna ke halaman utama setelah login berhasil.

2. **Register Component:**
Komponen Registrasi bertanggung jawab untuk menangani registrasi pengguna. Ini menampilkan formulir registrasi untuk pengguna memasukkan informasi mereka, memvalidasi input pengguna, mengirim permintaance login pengguna, menyimpan informasi otentikasi pengguna di local storage, dan mengalihkan pengguna ke halaman utama setelah registrasi berhasil.

3. **Home Component:**
Komponen Beranda bertanggung jawab untuk menampilkan halaman beranda. Ini menampilkan pesan selamat datang dan informasi dasar tentang platform DigiLab, dan menyediakan tautan ke halaman lain di platform.

4. **Profile Component:**
Komponen Profil bertanggung jawab untuk menampilkan dan mengelola profil pengguna. Ini menampilkan informasi profil pengguna, memungkinkan pengguna untuk mengedit informasi profil mereka, dan mengirim permintaan ke backend untuk memperbarui informasi profil pengguna.

5. **Project Component:**
Komponen Proyek bertanggung jawab untuk menampilkan dan mengelola proyek. Ini menampilkan daftar proyek, memungkinkan pengguna untuk membuat, memperbarui, dan menghapus proyek, dan mengirim permintaan ke backend untuk mengelola proyek.

6. **Report Component:**
Komponen Laporan bertanggung jawab untuk menampilkan dan mengelola laporan. Ini menampilkan daftar laporan, memungkinkan pengguna untuk membuat, memperbarui, dan menghapus laporan, dan mengirim permintaan ke backend untuk mengelola laporan.

7. **Search Component:**
Komponen Pencarian bertanggung jawab untuk mencari proyek dan laporan. Ini menampilkan formulir pencarian untuk pengguna memasukkan query pencarian, mengirim permintaan ke backend untuk mencari proyek dan laporan, dan menampilkan hasil pencarian.

8. **Navigation Component:**
Komponen Navigasi bertanggung jawab untuk menampilkan tautan navigasi. Ini menampilkan tautan navigasi untuk halaman yang berbeda di platform, menampilkan tautan login dan registrasi untuk pengguna yang tidak login, dan menampilkan tautan akun pengguna dan logout untuk pengguna yang login.

9. **PrivateRoute Component:**
Komponen PrivateRoute bertanggung jawab untuk melindungi rute yang memerlukan otentikasi pengguna. Ini mengalihkan pengguna yang tidak diautentikasi ke halaman login dan memungkinkan pengguna yang diautentikasi mengakses rute yang dilindungi.

10. **LoginRoute Component:**
Komponen LoginRoute bertanggung jawab untuk menampilkan halaman login. Ini menampilkan formulir login dan menangani permintaan login pengguna.

11. **Header Component:**
Komponen Header bertanggung jawab untuk menampilkan header aplikasi. Ini menampilkan logo aplikasi dan nama, dan menampilkan tautan navigasi.

12. **Footer Component:**
Komponen Footer bertanggung jawab untuk menampilkan footer aplikasi. Ini menampilkan informasi hak cipta dan tautan ke profil media sosial.

13. **Sidebar Component:**
Komponen Sidebar bertanggung jawab untuk menampilkan sidebar aplikasi. Ini menampilkan tautan ke halaman yang berbeda di platform.

14. **ProjectList Component:**
Komponen ProjectList bertanggung jawab untuk menampilkan daftar proyek. Ini menampilkan daftar proyek dan memungkinkan pengguna untuk melihat detail proyek dan melakukan tindakan lainnya.

15. **ProjectItem Component:**
Komponen ProjectItem bertanggung jawab untuk menampilkan detail proyek. Ini menampilkan informasi tentang proyek, seperti judul, deskripsi, dan tanggal dibuat, dan memungkinkan pengguna untuk melakukan tindakan lainnya.

16. **ReportList Component:**
Komponen ReportList bertanggung jawab untuk menampilkan daftar laporan. Ini menampilkan daftar laporan dan memungkinkan pengguna untuk melihat detail laporan dan melakukan tindakan lainnya.

17. **ReportItem Component:**
Komponen ReportItem bertanggung jawab untuk menampilkan detail laporan. Ini menampilkan informasi tentang laporan, seperti judul, deskripsi, dan tanggal dibuat, dan memungkinkan pengguna untuk melakukan tindakan lainnya.

18. **UserItem Component:**
Komponen UserItem bertanggung jawab untuk menampilkan detail pengguna. Ini menampilkan informasi tentang pengguna, seperti nama, foto, dan bio, dan memungkinkan pengguna untuk melakukan tindakan lainnya, seperti mengirim pesan atau melakukan follow.

19. **UserList Component:**
Komponen UserList bertanggung jawab untuk menampilkan daftar pengguna. Ini menampilkan daftar pengguna dan memungkinkan pengguna untuk melakukan tindakan lainnya, seperti mencari pengguna atau melihat daftar pengikut.

20. **Form Component:**
Komponen Form bertanggung jawab untuk mengelola formulir. Ini menangani input pengguna, validasi input, dan mengirim permintaan ke backend. Komponen Form ini dapat digunakan untuk berbagai tujuan, seperti login, registrasi, atau pengeditan profil.

21. **Input Component:**
Komponen Input bertanggung jawab untuk mengelola input pengguna. Ini menerima props dari komponen Form dan mengelola input pengguna, seperti memvalidasi input dan mengirim input ke backend. Komponen Input ini dapat digunakan untuk berbagai jenis input, seperti teks, email, atau password.

22. **Button Component:**
Komponen Button bertanggung jawab untuk mengelola tombol. Ini menerima props dari komponen Form dan mengelola tindakan yang diambil saat tombol ditekan, seperti mengirim formulir atau memperbarui data. Komponen Button ini dapat digunakan untuk berbagai tujuan, seperti submit formulir, reset formulir, atau membatalkan tindakan.

### Dockerizing
Kita dapat menjalankan Dockerfile Frontend, gunakan perintah `docker build -t frontend.` di direktori yang berisi Dockerfile. Ini akan membuat Docker image dengan nama `frontend`. Setelah Docker image dibuat, Kita dapat menjalankannya menggunakan perintah `docker run -p 3000:3000 frontend`.

## Back End
Back end adalah aplikasi web yang dibangun menggunakan NodeJS sebagai runtime environment. NodeJS memungkinkan pengembangan aplikasi web yang cepat dan efisien, dan dapat diintegrasikan dengan Frontend untuk menyediakan pengalaman pengguna yang lengkap.

Back End bertanggung jawab untuk menangani otentikasi pengguna, mengelola data pengguna, mengelola data proyek, mengelola data laporan, menangani permintaan pencarian, dan menangani kesalahan.


### Components
1. **Auth Component:**
Komponen Auth bertanggung jawab untuk menangani otentikasi pengguna. Ini menyediakan metode untuk login, logout, dan registrasi.

2. **User Component:**
Komponen User bertanggung jawab untuk menangani data pengguna. Ini menyediakan metode untuk membuat, memperbarui, dan menghapus pengguna.

3. **Project Component:**
Komponen Project bertanggung jawab untuk menangani data proyek. Ini menyediakan metode untuk membuat, memperbarui, dan menghapus proyek.

4. **Report Component:**
Komponen Report bertanggung jawab untuk menangani data laporan. Ini menyediakan metode untuk membuat, memperbarui, dan menghapus laporan.

5. **Search Component:**
Komponen Search bertanggung jawab untuk menangani permintaan pencarian. Ini menyediakan metode untuk mencari proyek dan laporan.

6. **Error Handling Component:**
Komponen Error Handling bertanggung jawab untuk menangani kesalahan. Ini menyediakan metode untuk menangani kesalahan dan mengirim respon kesalahan.

### Dockerizing
Kita dapat menjalankan Dockerfile Backend, gunakan perintah `docker build -t backend.` di direktori yang berisi Dockerfile. Ini akan membuat Docker image dengan nama `backend`. Setelah Docker image dibuat, Kita dapat menjalankannya menggunakan perintah `docker run -p 3600:3600 backend`.

## Demonstration Video
[Link Video](https://github.com/Evandita/Docker)

## Report
[Link Report](https://github.com/Evandita/Docker)

## Presentation
[Link Presentasi](https://www.canva.com/design/DAGGjwpPZHc/S4d1XdodB1ODNVvyFUyj8Q/edit?utm_content=DAGGjwpPZHc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


