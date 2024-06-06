var tanya = true;
while(tanya){
//menangkap pilihan player
var p = prompt("pilih: gajah, orang, semut");

//menangkap pilihan dari komputer
//membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
    comp = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';
//menentukan rules
if(p == comp) {
    hasil = 'Seri';
} else if(p == 'gajah') {
    // if(comp == 'kertas') {
    //     hasil = 'Kamu Menang';
    // } else {
    //     hasil = 'Kamu Kalah';
    // }
    hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
} else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'Kalah' : 'Menang';
} else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'Kalah' : 'Menang';
} else {
    hasil = 'anda memasukkan pilihan yang salah';
}


//tampilkan hasilnya
alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

tanya = confirm('lagi?');

}

alert('terimakasih sudah bermain');