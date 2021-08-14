document.writeln('<h1>1. Feladat: </h1>Használd az imént megismert for ciklust (for loop) és hozz létre egy függvényt, ami kiírja az első N számot!</br>')

let printNumbersTill = (szam) => {
    for (let i = 0; i < szam; i++) {
        document.writeln(i+1)
        
    }
    document.writeln('</br>')
}

printNumbersTill(20)
printNumbersTill(15)


document.writeln('<h1>2. Feladat </h1>Hozz létre egy függvényt, ami egy nevet kap paraméterként, majd visszatér egy személyes üdvözléssel! </br>')

let Udvozles = (nev) => {
    udvozloSzoveg = `Hello, ${nev}!`

    return udvozloSzoveg
}

document.writeln(Udvozles('Makka'))

document.writeln('<h1>For ciklusok és tömbök</h1')
document.writeln('<h1>1. Feladat </h1>Hozz létre egy függvényt, ami egy tömböt kap paraméterként, majd sorban kiírja minden elemét!</br>')

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      document.writeln(array[i]);
    }
  };

  printValues([12, 23, 34, 4, 2, 56, 34, 23])

  document.writeln('<h1>2. Feladat </h1>Módosítsd a korábbi printValues függvényed, hogy for ciklus helyett forEach ciklust használjon!</br>')

  let ertekKiiras = (array) => {
    array.forEach(element => {
        document.writeln(element)
    });

  }

  ertekKiiras([4, 'kutya', 345, 'béka', 45, 'alma', 233])