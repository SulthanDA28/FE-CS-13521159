# Frontend Course Scheduler
 Berikut Backend untuk Course Scheduler
 
 [Backend Course Scheduler](https://github.com/SulthanDA28/BE-CS-13521159.git)

## Deskripsi Program

Course Scheduler merupakan sebuah program yang dapat menentukan mata kuliah mata kuliah anda untuk memaksimalkan nilai yang akan didapat pada saat pengambilan mata kuliah semester yang diinginkan. Course Scheduler ini dapat menentukan mata kuliah yang dapat diambil pada semester yang anda inginkan dan batas sks yang akan diambil pada semester tersebut. Dengan menggunakan Dynamic Programming, program ini akan memberikan prediksi nilai yang maksimal dari daftar-daftar mata kuliah yang tersedia pada jurusan atau fakultas anda. Program ini juga dapat menambah mata kuliah yang belum tersedia pada database. Selain itu, apabila fakultas/jurusan anda belum tersedia, terdapat pula untuk menambahkan fakultas serta jurusan. Apabila menambahkan jurusan, jurusan harus dihubungkan dengan fakultas yang bersesuaian.

## Teknologi dan Framework

Program ini menggunakan Framework dan teknologi sebagai berikut

 - React Js (frontend)
    - MUI (UI/UX untuk frontend)
    - Axios (Menghubungkan dengan backend)
 - Golang (backend)
    - Gin Gonic (Membuat API pada backend)
    - Go SQL Driver (Untuk menghubungkan file sql)
 - Sql (database)
 - Docker (build website)

## Penjelasan Dynamic Programming

## Analisis Algoritma

## Screenshot Hasil Percobaan
 - Tambah Jurusan
<img width="947" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/544d1ad4-e7e6-4a72-acc5-2339b2072975">
<img width="956" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/622f77a7-2f5e-4b56-8f0d-038cf51e1501">



 - Tambah Fakultas
<img width="959" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/28e8661c-eae2-4022-ae09-0b08278b9dda">
<img width="960" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/aec482d0-aed6-40af-8796-47f2f822f943">

 - Tambah Mata Kuliah
<img width="947" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/3d1224ea-1e37-41e2-962b-f044d6fb0dd1">
<img width="947" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/e4c42fe1-a2fa-4167-849a-44db3fe701f8">


 - Prediksi Nilai
<img width="949" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/d2751fb9-ade2-4cbe-8e60-e35f02acb4dc">
<img width="952" alt="image" src="https://github.com/SulthanDA28/FE-CS-13521159/assets/110533939/8102fbc1-b1a0-4774-9a44-21861d57d812">









## Cara Menjalankan Aplikasi 

Berikut cara menjalankan aplikasi pada program ini.

 - Pertama copy kedua repository.
 - Lalu untuk menjalankan backend, pastikan terminal sudah pada /BE-CS-13521159. Jika sudah tulis command dibawah pada terminal tersebut.

 ```
 docker-compose up -d
 ```
 - Lalu begitu juga untuk menjalankan frontend, pastikan terminal sudah pada /FE-CS-13521159. Jika sudah tulis command dibawah pada terminal tersebut.

 ```
 docker-compose up -d
 ```
 - Tunggu sampai program selesai build program ini.
 - Setelah selesai, program akan mengalihkan ke web dan program siap dijalankan. Apabila program tidak mengalihkan secara otomatis, dapat menuliskan ```http://localhost:3000``` pada web (Waktu Build aplikasi memakan waktu yang cukup lama).
 - Aplikasi web siap digunakan

Fitur-fitur yang ada pada aplikasi, antara lain

 - Program dapat menambahkan fakultas dan jurusan yang belum tersedia (pada ADD-JURUSAN/FAKULTAS). Untuk menambah jurusan harus dihubungkan pada sebuah fakultas. Apabila nama jurusan sudah ada pada database, dan anda memasukkan nama yang sama pada input dengan fakultas yang berbeda, maka jurusan akan diupdate menjadi terhubung pada fakultas tersebut. Apabila ingin menambah dalam satu paket, dapat menambah dengan menggunakan file json. Format file json seperti dibawah ini (pastikan format benar untuk menghindari terjadinya error yang tidak diinginkan)
   ```
   [
    {
     "fakultas":"STEI",
     "jurusan":""         //Ket: menambah Fakultas STEI
    },
    {
     "fakultas":"STEI",
     "jurusan":"Teknik Informatika" //Ket: menambah jurusan Teknik Informatika dengan dibawahi fakultas STEI
    }
   ]
   ```
 - Program dapat menambahkan mata kuliah pada jurusan maupun fakultas (pada ADD-MATKUL) dengan mengisi nama mata kuliah, jumlah sks, minimum semester pengambilan, dan prediksi nilai. Apabila nama mata kuliah sudah ada pada jurusan atau fakultas dan menginputkan data-data yang berbeda dari data mata kuliah sebelumnya, maka data mata kuliah tersebut akan diupdate menjadi data yang terbaru. Apabila ingin menginputkan dalam satu paket, dapat menambah dengan file json. Format file jsonseperti dibawah ini (pastikan format benar untuk menghindari terjadinya error yang tidak diinginkan).
   ```
   [
    {
        "fakultas":"Fakultas Ekonomi",
        "jurusan":"Listrik",
        "namamatkul":"Computer Network",         //Ket: Mata kuliah ditambahakan ke fakultas ekonomi dan jurusan listrik
        "sks":2,
        "minsemester":4,
        "prediksinilai":"D"                 
    },
    {
        "fakultas":"",
        "jurusan":"Hukum",
        "namamatkul":"UUD 1945",                 //Ket: Mata kuliah hanya ditambahkan ke jurusan hukum
        "sks":2,
        "minsemester":4,
        "prediksinilai":"A"
    },
    {
        "fakultas":"Fakultas Teknik",
        "jurusan":"",
        "namamatkul":"Pemrograman Dasar",        //Ket: Mata kuliah hanya ditambahkan ke fakultas teknik
        "sks":"10",
        "minsemester":"10",
        "prediksinilai":"E"
    }
   ]
   ```
- Dan yang terakhir, program dapat menentukan mata kuliah mana untuk memaksimalkan Nilai anda. Anda dapat menuju calculate untuk mencari mata kuliah mana yang dapat memaksimalkan nilai anda. Program akan meminta input berupa nama fakultas/jurusan, lalu semester pengambilan, maksimum sks yang diambil dan minimum sks yang diambil. Program akan menampilkan IPK yang akan didapat, total sks, dan mata kuliah yang disarankan untuk diambil. Jika tidak tersedia mata kuliah yang cocok sesuai input, maka program tidak akan menampilkan mata kuliah yang disarankan.
## Referensi

 - [SQL Golang](https://youtu.be/RM8mP6Tzolg)
 - [Docker Mysql](https://arramsyah.medium.com/koneksi-docker-dengan-database-mysql-pada-aplikasi-golang-menggunakan-docker-compose-belajar-eab605e7d5ca)
 - [Docker Golang](https://levelup.gitconnected.com/dockerized-crud-restful-api-with-go-gorm-jwt-postgresql-mysql-and-testing-61d731430bd8)
 - [Gin-Gonic Golang](https://youtu.be/s05AuPgZ7r0)
 

