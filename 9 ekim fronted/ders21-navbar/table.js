
function generateRandomId () {

    return Math.floor(Math.random() * 100000000)
}

// API isteği yapıldı ve bir dizi userler geldi
const users = [
    
    { id: generateRandomId(), name: "Hasan", lastname: "Çolak" },
    { id: generateRandomId(), name: "Kenan", lastname: "Işık" },
    { id: generateRandomId(), name: "Ceren", lastname: "Sungur" }
]


console.log(users)


const tbody = document.getElementById('personel-table')


function createHTMLElement(etiketAdi, etiketDeger) {

    // html etiketi tr, th td veya button olabilir
    const html_etiketi = document.createElement(etiketAdi)

    if (etiketDeger) {

        if (etiketAdi === "input") {

            html_etiketi.value = etiketDeger
            html_etiketi.disabled = true;

        } else {

            html_etiketi.innerText = etiketDeger
        }

    }

    return html_etiketi
}



function handleInputChange(duzenleme_butonu) {
    // duzenleme_butonu = duzenleBtn local scope deki foreach

    if (duzenleme_butonu.innerText === "Düzenle") {

        duzenleme_butonu.innerText = "Onayla"
        duzenleme_butonu.className = "btn btn-success me-3"
}

}


// yeni user ekle
function addNewUser() {

    const ad = prompt("Personel Adı giriniz")
    if (ad === null) return;

    const soyad = prompt("Personelin Soyadı:")
    if(soyad === null) return;

    // users arrayine obje olarak gönder
    const model = { id: generateRandomId(), name: ad, lastname: soyad }
    // arraye gönder
    users.push(model)

    console.log("USER ADD:", users)
    // domu güncelle
    updateDOM()
}

// tüm verileri sil
function clearTable() {

    const onayla = confirm("Tüm veriler silinecek emin misiniz?") 

    if (onayla) {

        users.length = 0
        console.log("AARRAY:", users)
        updateDOM()
    }

}


// updateDOM
function updateDOM() {

    // tbdoy'in içini boşalt
    tbody.innerText = "";

    users.forEach(function(user, index) {

        const tr = createHTMLElement("tr")
        const th = createHTMLElement('th', user.id)

        const ad = createHTMLElement('td')
        const adInput = createHTMLElement('input', user.name)
        ad.append(adInput)


        const soyad = createHTMLElement('td')
        const soyadInput = createHTMLElement('input', user.lastname)

        soyad.append(soyadInput)

        const mod_arac_gerec = createHTMLElement('td')

        const duzenleBtn = createHTMLElement('button', 'Düzenle')
        // düzenle butonuna tıklandığında
        duzenleBtn.onclick = function() {

                if (adInput.disabled == false && soyadInput.disabled == false) {
                    // güncelleme işlemi
                     adInput.disabled = true;
                     soyadInput.disabled = true;

                     // butonun şeklini değiştir
                     duzenleBtn.className = "btn btn-warning me-3"
                     duzenleBtn.innerText = "Düzenle"

                     user.name = adInput.value
                     user.lastname = soyadInput.value;

                     console.log("Updated user:", user, "Array:", users)
                     alert("Başarılı bir şekilde güncellendi.")

                } else {


                    // inputların disabledlerini kaldır
                    adInput.disabled = false;
                    adInput.focus()

                    soyadInput.disabled = false;
                }
             
  
        }


        // inputların davranış şekli
        adInput.oninput = function() {

                handleInputChange(duzenleBtn)
        }



        soyad.oninput = function() {

            handleInputChange(duzenleBtn)
        }


        const silBtn = createHTMLElement('button', 'Sil')

        // duzenle btn ve silt btn
        duzenleBtn.className = "btn btn-warning me-3"
        silBtn.className = "btn btn-danger"

        // silBtn işlev ver
        silBtn.onclick = function() {

                const onay = confirm(`${user.name} silinecek bu işlem geri alınamaz.`)

                if (onay) {

                    // original arraydan sil
                    users.splice(index, 1)
                    console.log("orijinal data:", users)

                    // updateDOM'u çağır
                    updateDOM()

                }

        }

        // tüm elemanları tr'e at
        tr.append(th)
        tr.append(ad)
        tr.append(soyad)
        
        mod_arac_gerec.append(duzenleBtn)
        mod_arac_gerec.append(silBtn)

        tr.append(mod_arac_gerec)

        tbody.append(tr)
    })
}

// sayfa tamamen yüklendiği zaman;
window.onload = function() {

    // high order functions
    // anomim fonksiyon
    updateDOM()

}
