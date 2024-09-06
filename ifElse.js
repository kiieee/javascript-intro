// // if(10 == "10"){
//     console.log("This is true!")
// } else {
//     console.log("This is false!")
// } 



// Task One

let age = 16
let country = "UK"

if (age > 17 && country === "UK") {
    console.log("I can serve you")
} else { console.log ("You aren't old enough")
}

// Task Two

let topping = "Chicken"

switch(topping){
    case "Chicken":
    case "Pepperoni":
        console.log(`${topping} is one of my favourite toppings!`);
        break;
    case "Ham":
    case "Beef":
        console.log(`I don't mind having ${topping} on my pizza`);
        break;
    default: 
        console.log("This does not belong on a pizza");

}

// Task Three


let password = "Password123"
let length = password.length

if (length < 8) {
    console.log("Your password is too short!")
} else  {console.log (password)
}



let num = 19191

if (num % 3 == 0) {
    console.log("This number is divisible by 3 or 5") }
else if (num % 5 == 0) {
    console.log("This number is divisible by 3 or 5") }
else {
    console.log("This number is divisible by neither 3 nor 5")
}


// Task Four

if (num % 3 == 0 && num % 5 != 0) {
    console.log("Fizz") }
else if (num % 5 == 0 && num % 3 != 0) {
    console.log("Buzz") }
else if (num % 3 == 0 && num % 5 == 0) {
    console.log("Fizz Buzz")
}
else {
    console.log(num)
}


// Task Five

// let num = 19191

const palindromeCheck = () => {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindromeCheck(num)); 

// Task Six

let placeOfWork = "The Shadow Realm"
let townOfHome = "The Gulag"
let time = 100

if (time < 8 || time > 17) {
    console.log(`I am at ${townOfHome}`)
} else if (time > 8 && time < 17) {
    console.log(`I am at ${placeOfWork}`)
} else {
    console.log("I am commuting.")
}


// Task Seven

let gibberish = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowel = ["a", "e", "i", "o", "u"];

let arr = gibberish.split('').reverse();
let indexReverse = arr.findIndex(e => vowel.includes(e))

if (indexReverse != -1) {
    let index = gibberish.length-1-indexReverse
    console.log(`Index of last vowel is ${index}: ${gibberish[index]}`)
}


// Task Eight

let word = "trial"
let wordReverse = word.split('').reverse();
let firstLetter = Array.from(word)[0];
let lastLetter = Array.from(wordReverse)[0];

if(firstLetter === lastLetter) {
    console.log("True")
}
else {console.log("False")}


// Task Nine

let num1 = 5
let num2 = 2

if ((num1 + num2)%2 == 0){
    console.log(num1 + num2)
}
else {console.log(num1 * num2)}