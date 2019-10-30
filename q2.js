const data = [
    { "name": "rick", "cars": ["Corvette Z06", "Lotus Exite S"]},
    { "name": "john", "cars": ["BMW 320D"]},
    { "name": "zing", "cars": ["Honda Jazz", "Honda Click", "Honda Waves"]}
]

const processJSON = (data) => {
    // Sort the data first then use the return array to manipulate data
    const result = data.sort((a, b) => a.name.localeCompare(b.name)).map(item => {
    const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    const cars = item.cars.join(', ');
    const fullWord = name + ' want to buy ' + cars;
    console.log(fullWord);
    return fullWord;
    });
}

processJSON(data);

