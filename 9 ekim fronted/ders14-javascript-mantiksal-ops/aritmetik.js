// veri türlerini öğrenmeü
let deger = 12
// verilerin tipleri öğrenmek icin typeof kullanırız
console.log(typeof deger)


// = (atama yapar)
//  karşılaştırma operatörleri
// == (değerler eşit mi?)
// === (hem değerler hemde tipleri eşit mi?)

// mantıksal operatörler
// ! aksi halde
// != (değilse)
// !== (hem değerleri hem tipleri değilse)


// aritmetik operatörler
// > 
// <
// >=
// <= 
// /
// * (çarpma)
// + 
// - 
// +=, -=, /= *= 
// %  (mod alma)
// **  (kare alma)
// ++ (1 arttırır)
// -- (1 eksiltir)

let sayi = 12
let sayi2 = 122
console.log(sayi == sayi2)
let sayi3 = "13";
let sayi4 = "13";
console.log(sayi3 === sayi4)

const user = "12";

console.log(user != "12")


// aritmetik işlemler
let sayi_1 = 15;
let sayi_2 = 25;

let sonuc = sayi_1 + sayi_2


let kisi_yas = 18;
let giris_yas = 18;


console.log("girebilir mi?",kisi_yas >= giris_yas)


// arttır - azalt
let yasim = 23;

// dogum gunu oldu
// yasim += 1
// alternatif yöntemler
// yasim++;
console.log(yasim)


// sayılar 
let fiyat = "merhaba benim adim ömer";

// fiyat sayi mi değil mi?
let cevap = isNaN(fiyat)
console.log("sonuc:", cevap)



// castings
let veri = "12";

// numbere çevirme yöntemleri
// let sayiolarak = parseInt(veri)
// let sayiolarak = parseFloat(veri),
let sayiolarak = Number(veri)
console.log(typeof sayiolarak)


let sayis = 23

let verielr = 322
// stringe çevir
sayis.toString()
let num = 2.11;
let n = num.toFixed();
console.log("veriiii:", n)
// consturactors
// String, Number, Array, Object, Boolean