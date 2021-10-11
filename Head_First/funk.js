var passengers = [
    {name: "Dima", paid: true, ticket: "coach"},
    {name: "Maks", paid: true, ticket: "firstclass"},
    {name: "Vanya", paid: false, ticket: "firstclass"},
    {name: "Roman", paid: true, ticket: "coach"}
]

function processPassengers(passengers, funk){
    for(var i = 0; i < passengers.length; i++){
        if(funk(passengers[i])){
            return false;
        }
    }
    return true;
}
function checkNoFlyList(passenger){
    return(passenger.name === "Dr. Evel");
}
function checkNotPaid(passenger){
    return(!passenger.paid);
}
var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly){
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid){
    console.log("The plane can't take off: not everyone has paid.");
}
function printPassenger(passenger){
    console.log(passenger);  
}
processPassengers(passengers, printPassenger);
/////////////////////////////////////////////////
function Coffee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function(){
        if(this.ounces <= 8){
            return "small"
            
        } else if(8 < this.ounces && this.ounces <= 12){
            return "medium";
            
        }else{return "large";}
        
    };
    this.toString = function(){
        return console.log("You've ordered a " + this.getSize() + this.roast + " coffee." )
    };
}
var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());