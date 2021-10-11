function Robot(name, year, owner){
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = function(){
    if(this.owner === "Dr. Morbius"){
        return "RosKosmos";
    }else{
        return "SpaceX";
    }
    
};
Robot.prototype.speak = function(){
    if(this.maker() === "RosKosmos"){
        return false;
    }else{
        return true;
    }
};
Robot.prototype.makeCoffee = function(){
    if(this.name === "Robby"){
        return true;
    }else{
        alert("NO!");
    }
};
Robot.prototype.blinkLight = function(){
 alert("YUYUYUYUYUYU");
};
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
robby.onOffSwitch = true;
rosie.cleanHouse = true;


function SpaceRobot(name, year, owner,homePlanet){
    Robot.call(this, name, year, owner);
    this.homePlanet = homePlanet;
}
SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.speak = function(){
    alert(this.name + " says Sir.");
};
SpaceRobot.prototype.pilot = function(){
    alert(this.name + " says Thrumsters.");
};

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker());
var simon = new SpaceRobot("SIMON", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLight();
simon.speak();
