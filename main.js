
const moodArray = ['nice', 'clear', 'chilly', 'windy', 'foggy', 'bright'];

const weatherArray = ['clouds', 'sun', 'rain', 'snow', 'hail', 'drizzle', 'thunder', 'tornado', 'wind'];

const cityArray = ['Phoenix', 'Miami', 'Chattanooga', 'Dallas', 'Boston', 'Santo Domingo', 'San Juan', 'Bogota', 'Mexico City', 'Ontario'];

// random index generator for each array

const randomIndex = array => {
   return Math.floor(Math.random() * array.length);
}

// random word generator to pull from each array

let mood = moodArray[randomIndex(moodArray)];
let weather = weatherArray[randomIndex(weatherArray)];
let city = cityArray[randomIndex(cityArray)];

// percentage generator

const percent = () => {
    return Math.floor(Math.random() * 101);
}

// message to print complete random message


console.log(`The weather seems ${mood} today. There is a ${percent()}% chance of ${weather} in the ${city} area.`);

