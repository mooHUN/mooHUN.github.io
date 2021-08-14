let nevem = "Imi"
let korom = "47"
let user = 'moo'

console.log(`Kedves ${user}, a Javascript betöltött. ${nevem}, szép szám a ${korom}.`)
document.writeln(`Kedves ${user}, a Javascript betöltött. ${nevem}, szép szám a ${korom}.</br>`)
// adat bekérés PROMPT
//nevem = prompt("Add meg a neved!")
//korom = prompt("Add meg a korod!")

if (true) {
    document.writeln('Igaz volt a feltétel</br>')
}

// >, <, >=, <=, ==, === (itt a típusnak is egyeznie kell), <>

if (korom >= 21) {
    document.writeln(`${nevem} elég idős ahhoz, hogy AMERIKÁBAN is igyon egy sört</br>`)
} else if (korom >= 18) {
    document.writeln(`${nevem} elég idős ahhoz, hogy igyon egy sört</br>`)
} else {
    document.writeln(`${nevem} NEM elég idős ahhoz, hogy igyon egy sört</br>`)
}
//jquery rész
document.writeln("<h2>JQUERY RÉSZ</h2>")
console.log($("h2").text())

$("h2").html("Bo<i>ooo</i>MM")
//minden P-t felülír
$("p").html("Minden <strong>ELSZARÓDOTT </strong>, sajnos")

//elem hozzafuzése
$("ul").append('<li>BELLO</li>')

//utolso eltávolítása
$("li:last-of-type").remove()

$('#liAdd').click(function() {
    $("ul").append('<li>BELLO</li>')

})
$('#liTorol').click(function() {
    $("li:last-of-type").remove()

})

//Ciklus


for (let i = 0; i < 10; i++) {
    $("ul").append(`<li>${i+1} - Nem csalok a vizsgán</li>`);
    
}

let szinek = ['orange', 'magenta', 'red', 'brown', 'green', 'blue', 'teal']

function egySzinDoboz(szin) {
    $('#kontener').append('<div class="doboz"></div>')
    $('#kontener div:last-of-type').css('background-color', szin)
}
for (let j = 0; j < 10; j++) {
    szinek.forEach(egySzinDoboz)
    
}

