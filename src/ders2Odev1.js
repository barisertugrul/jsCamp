//Ödev 2.1.1
function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        let counter=0
        for(let j=2; j<number; j++)
        {
            if(number%j==0)
            {
                counter++
            }
        }
        if(counter==0)
        {
            console.log(number + " sayısı Asaldır")
        }
        else{
            console.log(number + " sayısı Asal değildir")
        }
    }
}

findPrime(25)
findPrime(12,17)
findPrime(28,37,44,57)

//Ödev 2.1.2
function isFriendNumbers(number1, number2) {
    let total1=0, total2=0
    for(let i = 1; i < number1; i++)
    {
        if(number1%i==0)
        {
            total1 = total1 + i
        }
    }
    for( i = 1; i < number2; i++)
    {
        if(number2%i==0)
        {
            total2 = total2 + i
        }
    }
    if(total1==number2 && total2 == number1)
    {
        console.log(number1 + " ve " +number2 + " arkadaş sayılardır")
    }
    else{
        console.log(number1 + " ve " +number2 + " arkadaş sayı değildir")
    }
}

isFriendNumbers(12,25)
isFriendNumbers(49,70)
isFriendNumbers(220,284)
isFriendNumbers(1184,1210)

//Ödev 2.1.3
function isPerfectNumber(number) {
    let total=0
    for(let i = 1; i < number; i++)
    {
        if(number%i==0)
        {
            total += i
        }
    }
    
    if(total==number)
    {
        return true
    }
    else{
        return false
    }
}

function perfectNumbers() {
    console.log("Perfect Numbers (1-1000")
    for (let i = 1; i <= 1000; i++) {
        if(isPerfectNumber(i)){
            console.log(i)
        }
        
    }
}

perfectNumbers()

//Ödev 2.1.4
function listPrime(){
    console.log("Prime Numbers (1-1000")
    for (let i = 1; i <= 1000; i++) {
        let counter = 0
        for(let j=2; j < i; j++)
        {
            if(i%j==0)
            {
                counter++
            }
        }
        if(counter==0)
        {
            console.log(i)
        }
    }
}

listPrime()