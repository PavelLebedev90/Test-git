var scores = [34, 67,94, 24,6, 5, 3, 89, 45, 25,74,23,18, 6,0,94,45,75,13,57,89,57];
var hightResult = 0;
for(i=0; i <  scores.length; i++){
    console.log ("buble solutoin #"+ i + "scores: " + scores[i]);
    if(scores[i] > hightResult){
        hightResult = scores[i];
    }
}
console.log("Buble test: " + scores.length);
console.log("Max result: " + hightResult);
 var bestSolution = [];
 for(var i = 0; i<scores.length; i++){
     if(scores[i] == hightResult){
         bestSolution.push(i);
     }
    
 }
 console.log("Best hight scope: " + bestSolution);
////////////////////////////////
var products = ["Choo choo Choocolate", "Icy Mint", "Cake", "Bublelegum"];
var i = 0;
var hasBuble = [ false, false, false, true];
while(i < hasBuble.length){
    i++;
    if(hasBuble[i]){
        console.log(products[i]);
    }
    console.log(i);
}
///////////////////////////////////////////////
var products = ["Choo choo Choocolate", "Icy Mint", "Cake", "Bublelegum"];
var hasBuble = [ false, false, false, true];
for(var i = 0; i<hasBuble.length; i++){
    console.log(i);
    if(hasBuble[i]){
        console.log(products[i]);
    }
}