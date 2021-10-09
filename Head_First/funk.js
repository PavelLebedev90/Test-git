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