// global = en yukarıda tanımlanan, her yerden ulaşılabilen
// local = blok (skop) içinde tanımlanan ve sadece skop içinde erişilebilen
// var olarak tanımlanan tüm veriler varsayılan olarak global olarak tanımlanır

const omer =  "ömer";


const bisey = true

if (bisey) { // skop burada başalr

    const ad = "senin adin"

    console.log("localde ad:", ad)
    console.log("localde omer:", omer)
} // skop burada biter



console.log("globalde omer:", omer)