var car = {
    model: "skoda",
    color: "white",
    odometr: 61000,
    year: 2007,
    passangers: 5,
    to4: true,
    benzin: "AI-95",
    started: false,
    start: function(){
        if(this.fuel > 0){
            this.started = true;
        } else{
            alert("Give me fuel, please");
        }
    },
    stop: function(){
        if(this.started){
            this.started = false;
        }else{
            alert("Engine is now stop");
        }
    },
    drive: function(){
        if(this.started){
            if(this.fuel > 0){
            alert("ZOOM, ZOOM");
            this.fuel--;
            }else{
                alert("Out of fuel !!!");
                this.stop();
            }
        }
            else{
                alert("You need to start the engine first");
            }
        
    },
    fuel: 0,
    addFuel: function(amount){
        this.fuel = this.fuel + amount;
    }
};
car.start();




car.start();
car.drive();

function buyCar(cars){
    if(cars.odometr > 65000){
        return false;
    } else if(cars.year < 2005){
        return false;
    }
    return true;
}
var result = buyCar(car);
console.log(result);
////////////////////////////////////////
function getSecret(file, secretPassword){
    superSecretFile. opened ++;
    if(secretPassword == superSecretFile.password){
        return superSecretFile.contents;
    } else{
        return "Invalid password!!!";
    }
}
function setSecret(file, secretPassword, secret){
    if(secretPassword == superSecretFile.password){
        superSecretFile.opened = 0;
        superSecretFile.contents = secret;
    }
}
var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit"
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, " in Philadelfia");
secret = getSecret(superSecretFile, 2);
console.log(secret);
//////////////////////////////////////////////////////////
var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function(){
        this.index = this.index +1;
        if(this.index >= this.advice.length){
            this.index = 0;
        }
    },
    look: function(){
        return this.advice[this.index];
    }
};
for(var prop in eightBall){
    console.log(prop + ": " + eightBall[prop]);
}
eightBall["look"];
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());





/*console.log(car);
console.log(car.color);
if(car.odometr > 60000){
    car.to5 = false 
}
console.log(car);
delete car.to5;
console.log(car.to5);
car.whether = "rain";
if(car.whether == "rain"){
    car.color = "black";
}
console.log(car.color);*/
