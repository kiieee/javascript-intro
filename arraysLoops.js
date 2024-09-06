// Arrays Task One

let favouriteSongs = [ 
    "Comfortably Numb",
    "Another Brick In The Wall",
    "The Trial"
];

favouriteSongs.push("In The Flesh", "Vera");
favouriteSongs.pop();

console.log(favouriteSongs)

// Arrays Task Two

let days = [
    "Monday",
    "Tuesday",
    "Thursday"
];

days.push("Saturday");
console.log(days)

days.splice(2, 0, "Wednesday");
console.log(days)

days.splice(4, 1, "Friday");
console.log(days)


// Loops Task One

let recentBondMovies = [
    "No Time To Die",
    "Spectre",
    "Skyfall"
];

recentBondMovies.push("Quantum Of Solace", "Casino Royale")

for (let i = 0; i < recentBondMovies.length; i++){
    console.log(recentBondMovies[i]);
}


// Loops Task Two

for (let i = 0; i < 6; i++){
    console.log(Math.ceil(Math.random() * 50))
}

// Loops Task Three

let countDown = [];

for (let i = 9; i >= 0; i-= 1 ) {
    countDown.push(i);
}

console.log(countDown)


// Loops Task Four

let films = [
    "Blade Runner",
    "The Matrix",
    "Ghostbusters",
    "John Wick 2"
];

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

films.splice(2, 1, "John Wick")

if (films[2] == "Ghostbusters"){
    console.log("Yay It's Ghostbusters")
}
else {console.log("Boo! We Want Ghostbusters")}

// Loops Task Five

// let numbers = [];

// for (let i = 0; i < 6; i++){
//     numbers.push(Math.ceil(Math.random() * 30));
//     console.log(numbers[i]);
//     if (numbers[i] % 7 == 0){
//         console.log("This number is divisible by 7")
//     }
//     else {console.log("This number is not divisible by 7")}
// }

// I can't for the life of me tell you why this doesn't work

// Loops Task Six

let bobsFollowers = [
    "James",
    "Jane",
    "Jack",
    "Julia"
];

let hannahsFollowers = [
    "James",
    "Jim",
    "Julia",
    "Jordan"
];

let bothFollowers = [];

for (i = 0; i < bobsFollowers.length; i++ ){
    for (j = 0; j < hannahsFollowers.length; j++ ){
        if (bobsFollowers[i] == hannahsFollowers[j]){
            bothFollowers.push(i)
        }
    }
}


console.log(bothFollowers) // I can get this to display the index within bob's followers that the matching names appear, but cannot get it to display the names themselves.

// Task Seven

// For loop - Loops a process until a certain threshhold is met
// While loop - Loops a process while a condition is met
// do.while - While loop that guarantees that the process is executed at least once.

