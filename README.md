# tentang aplikasi
aplikasi sederhana ini dapat menampilkan waktu terbit matahari, waktu sholat subuh, dzuhur, ashar, maghrib dan isya' Yang mana semuanya dihitung menggunakan metode <strong>Egyptian General Authority of Survey.</strong>
<br><br>

Aplikasi ini akan menghitung waktu sholat di daerah anda dengan memanfaatkan <del> koordinat lintang dan busur yang diperoleh dari GPS perangkat anda atau dengan </del> nama daerah yang anda masukkan. Kemudian aplikasi akan mengecek dan menghitung waktunya berdasarkan posisi anda tersebut. Waktu yang ditampilkan dalam Format waktu 24 Jam & data waktu diambil dari https://muslimsalat.com/api

## requirement

 * Android sdk
 * nodeJs >= 8.4.0 & npm >= 5.3.0
 * jdk 8
 * ionic >= 3.6.0


## Running
 * Clone repository ini.
 * cd jadwal-sholat kemudian npm install
 * running di emulator
      * buka terminal di root project run `ionic cordova platform add android`
      * setelah selesai sebuah folder bernama platform telah ditambahkan ke project anda
      * pastikan emulator android telah terbuka
      * buka terminal di root project, run `ionic build –-prod`
      * setelah selesai run `cordova emulate android`
 * running di browser
      * buka terminal di root project, run `ionic serve` 
      * kemudian buka localhost:8100


 ## App preview
 <img src="https://firebasestorage.googleapis.com/v0/b/ionic2-1afad.appspot.com/o/terbit.gif?alt=media&token=3a37ecc8-7cb1-4e75-bb46-8c6b17bdcdfa" alt="Preview">


 ## Download apk

<a href="https://drive.google.com/open?id=0Bxp6Hpy2uQydMFlsbTFxTjlMc3c">Downlaod from Google drive</a>
