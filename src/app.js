console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30


{
    let dolarDun = "Ankara"
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 *Bunu yapamıyoruz

console.log(euroDun)

//Array
//Değişkenler camelCasing prensibiyle isimlendirilir
let konutKredileri = ["Fakir Konut Kredisi","Apartman Kredisi","Villa Kredisi","Prefabrik Ev Kredisi","Telefon Kulübesi Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    const kredi = konutKredileri[i];
    console.log("<li>"+i+1+"-"+kredi+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)