// 1. javascript kullanarak bir div, div'e class olarak container verin daha sonra o divin içine p oluşturun.
// 2. bir input oluşturun ve inputun değeri her değiştiğinde sayfanın başlığıda değişsin.
// 3. rastgele resim linkleri (url) içeren bir array oluşturun ve html de önizlemeleri göster adında bir buton oluşturun, 
// butona tıklandığında arraydaki tüm linkleri img etiketi olarak body'e yazdırın.
// 4. karanlık mod, aydınlık mod özelliğini sayfaya entegre edin.
// 5. geri, ileri adında iki tane buton oluşturun ve javascript tarafında ise rastgele resim linkleri içeren bir array
// oluşturun ileri butonuna basıldığında bu arraydaki resimlerin indeks numarasını kullanarak tek tek yazdırın. 


const div = document.createElement("div") // <div class = 'container'> </div>
div.classList.add('container')

const p = document.createElement('p') // <p> Merhaba Javascript </p>
p.innerText = "Merhaba Javascript"


// cocuk olarak body'e at
// node = HTMLİELEMENT
document.body.prepend(div)
// p'i de dive at
div.append(p)


// sayfa başlıgı değiştir
function updateTitle(event) {

    document.title = event.target.value
}


// random images
const images = [
    "https://fastly.picsum.photos/id/132/200/300.jpg?hmac=oY1bslA1BJLjQ_GRTPoSm_Mtps2WtlDyfll3uIayrVQ",
    "https://fastly.picsum.photos/id/913/200/300.jpg?hmac=DjpzGA27POHBn03vW7UxM5gI9phMxuAZ4hSKcRfJD9Y",
    "https://fastly.picsum.photos/id/643/200/300.jpg?hmac=rS-MHa0BIMHdAgm-FZ7QM36aRKEAzzhSRNRv5n4uqGc",
    "https://fastly.picsum.photos/id/393/200/300.jpg?hmac=zh8LVueWlQFz83Gn-9g49laZIMmCg_NC6jLkrQq0h5U",
    "https://fastly.picsum.photos/id/880/200/300.jpg?hmac=dShSJOHRB--zjrqofJOm33xe4Cylybn00N77ewnaS2g",
    "https://fastly.picsum.photos/id/880/200/300.jpg?hmac=dShSJOHRB--zjrqofJOm33xe4Cylybn00N77ewnaS2g"
]


// string[] = Yalnızca stringlerden oluşan bir array

// ["acc", 12, 43, undefined] any
// [12,42,45,73] = number[]


// let isActive = false;

function showImages() {

    // if (isActive) return;
    const div = document.getElementById('image-container')

    // divin icini bosalt
    div.innerText = ""

    images.forEach(function(imageURL, index) {
        
        const img = document.createElement("img"); // <img src= "lorem"></img>
        img.src = imageURL
        img.alt = `resim-${index}`
        // img.classList.toggle('active')

        // body'e gönder
        div.append(img)

    })

    // // isActive true yap
    // isActive = true;


}



 // dark modee

function changeTheme() {

    document.body.classList.toggle('dark')

    // localstorage sadece string verisi depolar

    // localstorage bunu kayit et
    if (localStorage.getItem('theme')) {

        localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme', "dark")
    }  
  
}


// tekil resim 
let sayac = 1;


const img = document.querySelector('#image-container-2 img')

// sayfa yüklendiğinde resime varsayilan olaraka bir src ata
window.onload = function() {

    // localstorage de them diye bir şey var mı?
    const isDarkMode = localStorage.getItem("theme")
    console.log("veri:", isDarkMode)

    if (isDarkMode) {
            // bodye dark clasi ver
            document.body.classList.add('dark')
    }

    img.src = images[0]
}


function next() {




    img.src = images[sayac]

    console.log("SAYAC:", sayac)

    if (sayac >= images.length - 1) {

        return;
    }


    sayac += 1;
}



function back() {

    img.src = images[sayac]

    console.log("BACK SAYAC:", sayac)

    if (sayac <= 0) {

        return;
    }


    sayac -= 1;
}



document.getElementById('btn1').addEventListener('click', function(event) {

        back()

})

function randomImage() {

    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex]

    img.src = randomImage
    // sayaci güncelle
    sayac = randomIndex;

    console.log(randomIndex)
}

