# Frontend Course Scheduler
 Berikut Backend untuk Course Scheduler
 
 [Backend Course Scheduler](https://github.com/SulthanDA28/BE-CS-13521159.git)

## Deskripsi Program

Course Scheduler merupakan sebuah program yang dapat menentukan mata kuliah mata kuliah anda untuk memaksimalkan nilai yang akan didapat pada saat pengambilan mata kuliah semester yang diinginkan. Course Scheduler ini dapat menentukan mata kuliah yang dapat diambil pada semester yang anda inginkan dan batas sks yang akan diambil pada semester tersebut. Dengan menggunakan Dynamic Programming, program ini akan memberikan prediksi nilai yang maksimal dari daftar-daftar mata kuliah yang tersedia pada jurusan atau fakultas anda. Program ini juga dapat menambah mata kuliah yang belum tersedia pada database. Selain itu, apabila fakultas/jurusan anda belum tersedia, terdapat pula untuk menambahkan fakultas serta jurusan. Apabila menambahkan jurusan, jurusan harus dihubungkan dengan fakultas yang bersesuaian.

## Teknologi dan Framework

Program ini menggunakan Framework dan teknologi sebagai berikut

 - React Js (frontend)
    - MUI (UI/UX untuk frontend)
    - Axios (Menghubungkan dengan backed)
 - Golang (backend)
    - Gin Gonic (Membuat API pada backend)
    - Go SQL Driver (Untuk menghubungkan file sql)
 - Mysql (database)
 - Docker (build website)

## Penjelasan Dynamic Programming

## Analisis Algoritma

## Screenshot Hasil Percobaan

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
 - Setelah selesai, program akan mengalihkan ke web dan program siap dijalankan. Apabila program tidak mengalihkan secara otomatis, dapat menuliskan ```http://localhost:3000```.
 - Aplikasi web siap digunakan

Fitur-fitur yang ada pada aplikasi, antara lain

 - Program dapat menambahkan fakultas dan jurusan yang belum tersedia. Untuk menambah jurusan harus dihubungkan pada sebuah fakultas. Apabila nama jurusan sudah ada pada database, dan anda memasukkan nama yang sama pada input dengan fakultas yang berbeda, maka jurusan akan diupdate menjadi terhubung pada fakultas tersebut.
 - Program dapat menambahkan mata kuliah pada jurusan maupun 

## Referensi

 - [SQL Golang](https://youtu.be/RM8mP6Tzolg)
 - [Docker Mysql](https://arramsyah.medium.com/koneksi-docker-dengan-database-mysql-pada-aplikasi-golang-menggunakan-docker-compose-belajar-eab605e7d5ca)
 - [Docker Golang](https://levelup.gitconnected.com/dockerized-crud-restful-api-with-go-gorm-jwt-postgresql-mysql-and-testing-61d731430bd8)
 - [Gin-Gonic Golang](https://youtu.be/s05AuPgZ7r0)
 

