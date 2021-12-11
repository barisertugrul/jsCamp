function addToCart(productName = "Armut", quantity) {
    console.log(quantity + " adet " + productName + " Sepete Eklendi")
}

addToCart(undefined, 21)
addToCart("Yumurta", 10)
addToCart("Karpuz")
addToCart("Elma")
addToCart("15")

let sayHello = () => {
    console.log("Hello World!")
}
let sayHello2 = function () {
    console.log("Hello World 2!")
}

sayHello();
sayHello2();

function addToCart2(productName, quantity, unitPrice){
    //Tercih edilmemesi gereken function-parametre biçimi
}

addToCart2("Elma", 2, 10)
addToCart2("Armut", 5, 20)
addToCart2("Limon", 3, 15)

function addToCart3(product) {
    console.log("Ürün Bilgileri:")
    console.log("\tÜrün : " + product.productName)
    console.log("\tFiyat : " + product.unitPrice)
    console.log("\tMiktar :" + product.quantity)
}
let product1 = {productName:"Elma", unitPrice: 10, quantity:2}
addToCart3(product1);
let product2 = {productName:"Elma", unitPrice: 10, quantity:2}
let product3 = {productName:"Elma", unitPrice: 10, quantity:2}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName) //Output: KARPUZ

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1) //Output: 20

function addToCart4(products) {
    console.log(products)
}

function addToCart5(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice: 10, quantity:2},
    {productName:"Armut", unitPrice: 10, quantity:2},
    {productName:"Limon", unitPrice: 10, quantity:2}
]

addToCart4(products)
addToCart5(products) //Output: addToCart4() fonksiyonunun çıktısı ile aynı olur - Scope kavramı

function add(bisey, ...numbers) { //rest operatörü: diziye çevirir ...variables
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(total)
    console.log(bisey)
}

add("bişey", 20,30)
add("başka bişey",20,30,40)
add("daha başka bişey", 20,30,40,50)

let numbers = [30,10,500,600,120]
console.log(numbers)
console.log(...numbers) //spread operatör: diziden ayrıştırır ...array[]
console.log(Math.max(...numbers))

let [ege, icanadolu,doguanadolu,guneydoguanadolu, marmara, karadeniz, [egesehirleri, icanadolusehirleri]] = [
    {name: "Ege", population:"10,318M"},
    {name: "İç Anadolu", population: "12,706M"},
    {name: "Doğu Anadolu", population: "5,966M"},
    {name: "Güneydoğu Anadolu", population: "8,877M"},
    {name: "Marmara", population: "24,466M"},
    {name: "Karadeniz", population: "7,374M"},
    [
        ["İzmir","Denizli","Aydın"],
        ["Ankara","Sivas", "Niğde"],
        ["Elazığ","Erzurum","Ağrı"],
        ["Hakkari","Diyarbakır","Şırnak"],
        ["İstanbul", "Bursa"," Çanakkale"],
        ["Zonguldak","Sinop","Samsun"]

    ]
]

console.log("Bölge: " + ege.name)
console.log("Nüfus: " + ege.population)
console.log(ege)
console.log(icanadolusehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
     = {productName:"Elma", unitPrice: 10, quantity:2})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)