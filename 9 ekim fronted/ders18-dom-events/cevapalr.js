const todos = [
	
    { id: 23, task: "yemek ye"},
    { id: 42, task: "dışarı çık"},
    { id: 52, task: "yazilim yap"}
    
]
    

const ul = document.getElementById('todos-container')


todos.forEach(function(todo) {

        console.log("todom:", todo)
        // li oluştur
        const li = document.createElement('li') // <li></li>
        li.id = todo.id
        li.innerText = todo.task

        // ul'a gönder
        ul.append(li)
    
    })
    


// butona tıklandığında
function addTodo() {

        const new_todo = prompt('Todo')

        if (new_todo === null) {
                return;
        }

        if (new_todo.length < 3) {

            alert("Lütfen geçerli bir todo giriniz.")
            return addTodo()
        }


        // todo ekle
        const todo = { id: todos.length + 250, task: new_todo }
        // todos'a todo'u ekle
        todos.push(todo)

        // dom'a gönder
        const li = document.createElement('li') // <li></li>
        li.id = todo.id
        li.innerText = todo.task

        // ul'a gönder
        ul.append(li)
        console.log("TODOM array:", todos)


}


    const sorular = [

        { id: 23, type: "toplama", soru: "3 + 3 kaçtır?", cevap: 6 },
        { id: 42, type: "çıkarma", soru: "5 - 2 kaçtır?", cevap: 3 },
        { id: 62, type: "çarpma", soru: "2 x 2 kaçtır?", cevap: 4 }
    ]


    // fonksiyonlar
    function soruSor(tur) {

        const soru = sorular.find(function(question) {

            return question.type === tur
        })


        const cevap = prompt(soru.soru)

        if (cevap === null) {

            return;
        }

        console.log("kullanıcının verdigi cevap:", cevap)

        // girdiği cevap doğru mu?
        if (Number(cevap) === soru.cevap) {

            alert("Tebrikler cevabı doğru bildin.")
        } else {

            alert("Tekrar dene.")

            return soruSor(tur)
        }
    }


    // tema degis
    function temaDegistir(color) {
        
        console.log("gelen color:", color)

        if (color.startsWith("#")) {

            // inline css ver
            document.body.style.backgroundColor = color
            return;
        }
   
        // color = beyaz, siyah kırmızı olabilir
        if (color === "beyaz") {

                // document.body.className = "white"
                document.body.classList.add("white")
                document.body.classList.remove("dark", "red")
                return;
        } 


        if (color === "siyah") {

            // document.body.className = "dark"
            document.body.classList.add("dark")
            document.body.classList.remove("white", "red")
            return;
        }


        if (color === "kırmızı") {

            // document.body.className = "red"
            document.body.classList.add("red")
            document.body.classList.remove("white", "dark")
        }

    }



    // resimler yanyana
    function changeView(event)  {

        console.log("event:", event.target)
        const div = document.querySelector('.flex-container')
        // dive'e active classı at
        div.classList.toggle('active')

        if (event.target.innerText === "Görünüm Değiştir") {

                event.target.innerText = "Eski Haline Getir"
        } else {
            event.target.innerText = "Görünüm Değiştir"
        }
    }


    // tarayıcıya online veya offline olma özelligi ver
    window.onoffline = function() {

        alert("İnternetin gitti.")

    }

    // online oldugunda

    window.ononline = function() {

        alert("İnternetin geri geldi.")
    }

    // 1. bu arrayi bir ul'un içerisine li olarak yazdırın
    // 2. Bir buton oluştur ve kullanıcıdan input al ve girilen inputu todos arrayina gönder 
    // 3. Ekranda 3 tane farklı buton olsun (toplama sorusu, çıkarma sorusu, çarpma sorusu) ilgili butona tıklandığında
    // kullanıcıya ilgili soruyu sorun ve doğru cevap verip vermediğini ona söyleyin.
    // 4. Varsayılan tema rengi beyazdır 3 tane farklı alternatif oluşturun ve kullanıcı ilgili butonlara bastığı zaman
    // sayfanın yeni tema rengini ayarların butonların adı şu şekilde olmalı: (siyah tema, beyaz tema vs)
    // 5. resimler varsayılan olarak alt alta gelmetkedir görünüm değiştir adında bir buton oluşturun ve butona //tıklandığında resimlerin yanyana gelmesini sağlayın.