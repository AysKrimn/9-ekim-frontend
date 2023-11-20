function handleCard(event) {

    // event.target = input
    const input = event.target;

    // mantık
    if (input.id === "cardInput") {
        const div = document.getElementById("card_no")
        div.innerText = input.value

    } else if (input.id === "cardName") {
        // kart ismi
        const div = document.getElementById("card_name")
        div.innerText = input.value.toUpperCase()

    } else if (input.id === "cardCvc") {
        // kart cvc
        const div = document.getElementById("card_cvc")

        // eğer eleman 2 den fazla değer girmişse çaöışma
        console.log("max:", input.maxLength)
        div.innerText = input.value

    }
    console.log("GELEN İNPUT:", input.id)
   

    // div.innerText = value

}