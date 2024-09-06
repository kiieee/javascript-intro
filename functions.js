const favColor = () => {
    console.log("My favourite colour is blue!")
}

favColor ()


// Task One

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
        }
}

console.log(factorial(33));

// Task Two

let orderCount = 0
const takeOrder = (topping, crust) => {
    console.log(`${crust} crust pizza with ${topping}`);
    orderCount++;
    console.log(`Total order count: ${orderCount}`)
}

takeOrder("pepperonithin", "thin")
takeOrder("meat feast", "stuffed")

// Task Three

let pin = "1878"
let enterPin = ""
let balance = 300

const withdraw = (amount) => {
    if (enterPin == pin && amount < balance) {
        console.log("Transaction Successful!"); 
        balance = balance - amount;;
        console.log(`Your total balance is now ${balance}`); }
    else if (enterPin == pin && amount > balance) {
        console.log("Insufficient funds!")
    } 
    else  {console.log("Your pin is incorrect!")}
}

enterPin = 1878
withdraw(15)
withdraw(150)
withdraw(150)

enterPin = 1
withdraw(15)

enterPin = 1878
withdraw(15)