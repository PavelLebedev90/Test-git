var car = {
    model: "skoda",
    color: "white",
    odometr: 61000,
    year: 2007,
    passangers: 5,
    to4: true,
    benzin: "AI-95"
};
//console.log(car);
//console.log(car.color);
if(car.odometr > 60000){
    car.to5 = false
}
//console.log(car);
delete car.to5;
//console.log(car.to5);
car.whether = "rain";
if(car.whether == "rain"){
    car.color = "black";
}
console.log(car.color);
