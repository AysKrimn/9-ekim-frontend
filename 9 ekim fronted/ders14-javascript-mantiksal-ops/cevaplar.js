let mod = "kötü";

// güncelle
mod = "iyi"
console.log("modum şu an:", mod)

// tekrar güncelle
mod = "daha iyi"
console.log("modum şu an:", mod)

// cevap 2
let adim = "ömer"
let soyadim = "ocak"
let yas = 23

console.log("adim:", adim, "soyadim:", soyadim, "yaşım ise:", yas)


// cevap 3

const ben = {

    ad: "ömer",
    soyad: "ocak",
    yas: 23,
    yer: "istanbul"
}


console.log("ad:", ben.ad, "soyad:", ben.soyad)


let bisey = "lorem lipsum"

console.log("büyük hali:", bisey.toUpperCase())



let cumle = "zabağan zor uyanıoz napacağız biz";

// hatali kelimeleri düzelt
cumle = cumle.replace("zabağan", "sabah")
cumle = cumle.replace('uyanıoz', "uyanıyoruz")
console.log("güncellenmiş hlai:", cumle)


const array = [ "muz", "kiraz", "armut", "haha",  "elma" ]

// hahayı çıkar
array.splice(3, 1)
console.log("meyv3eler:", array)

// yer değiştir
array[0] = "elma";
array[3] = "muz"

// dizinin basina ekle
array.unshift("portakal")


const meyvelerimiz = ["elma", "kiraz", "muz", "armut"]

const varlik =  {

    ad: "john",
    soyad: "doe",
    favoriMeyveler: ["kiraz"]
}

// varliğin sevdiği meyve meyvelerde var mi?

const iceriyomu = meyvelerimiz.includes(varlik.favoriMeyveler[0])
console.log("içeriyo mu?", iceriyomu)



const ahmetin_hatasi = ["başarılı", "bir", "şekilde", "işleminiz", "gerçekleşmiştir", "teşekkür", "ederiz", "."]
// string olarak gönder
const string_olarak = ahmetin_hatasi.join(" ")

console.log("ahmetin inptu:", string_olarak)


const cumle2 = "sdafdks lorem liosum dfsfsl ."

// cumle notka ile bitiyor mu?
const bitiyormu = cumle2.endsWith(".")
console.log("cevap:", bitiyormu)



const kisi = { ad: "burak", yas: 1, eskiIsimler: []}

// prompt
const yeniIsim = "ömer"

// ismi degisitr
kisi.eskiIsimler.push(kisi.ad)
kisi.ad = yeniIsim

// yas atamasi yap
kisi.yas = 30
kisi.soyad = "ocak"

// keyi sil
delete kisi.eskiIsimler

console.log("YENİ HALİ:", kisi)