// //DOM Selection
// //document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = 'salmon';
// judul.innerHTML = 'Ikhsan Fadilah';

// //document.getElementsByTagName()
// // -> HTMLCollection
// const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// //document.getElementsByClassName()
// //-> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini paragraf 1 yang diubah';

// //document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';


// //document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }



// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Ikhsan Fadilah</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf</p></div>';


// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');

// //DOM Manipulation
// //buat elemen baru
// const pBaru = document.createElement('p');
// //Isi elemen
// const teksPBaru = document.createTextNode('Paragraf Baru');
// //simpan tulisan pada paragraf
// pBaru.appendChild(teksPBaru);
// //simpan pBaru di akhir Section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);


// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);


// const link = document.getElementsByTagName ('a')[0];

// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('judul Baru');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';


// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }


// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;






// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });


// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

// p3.addEventListener('mouseenter', function() {
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('mouseleave', function() {
//     p3.style.backgroundColor = 'white';
// });