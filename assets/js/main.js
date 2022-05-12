// console.log("text");

let myMasse = document.getElementById("masse");
let list = document.getElementById("mylist");

function showtxt() {
    // console.log("works")
    switch (list.value) {
        case "0":
            myMasse.innerHTML = "Brief und Postkarte L: 10 - 23, 5 cm B: 7 - 12, 5 cm H: bis 1 cm"
            break;
        case "1":
            myMasse.innerHTML = "DHL Paket 2 kg bis 60 x 30 x 15 cm"
            break;
        case "2":
            myMasse.innerHTML = "DHL Paket 5 kg bis 120 x 60 x 60 cm"
            break;
        case "3":
            myMasse.innerHTML = "DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm"
            break;
        default:
            myMasse.innerHTML = "Extra große Größe"
    }
}