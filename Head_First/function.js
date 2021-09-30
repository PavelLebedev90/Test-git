function bark(weight){
    var message;
if(weight >20){
    console.log(" says WOOF WOOF");
    } else
        {
            console.log(' says woof woof');
        }
        return message;
}
var status = bark(21);

function calculateArea(r){
    //var area;
    if(r <= 0){
        return 0;
    } else{
        area = Math.PI * r * r;
        //return area;
    }
}
var radius = 5.2;
calculateArea(radius);
console.log(area);
/////////////////////////////////////////
var scores = [34, 67,94, 24,6, 5, 3, 89, 45, 25,74,23,18, 6,0,94,45,75,13,57,89,57];
var costs = [.43, .26, 0.87, .34, .15, .46, .12, .47, .29, .74, .41, .56, .63, .85, .57, .23, .75, .54, .74, .65, .32, .85];
function printAndGetHightScore(scores){
    var hightResult = 0;
    var outputOne;
    for( var i=0; i <  scores.length; i++){
        outputOne = console.log ("buble solutoin #"+ i + "scores: " + scores[i]);
        if(scores[i] > hightResult){
            hightResult = scores[i];
        }
    }
    return hightResult;
}
var hightResult = printAndGetHightScore(scores);
console.log("Buble test: " + scores.length);
console.log("Max result: " + hightResult);
function getBestResults(scores, hightResult){
    var bestSolution = [];
    for(var i = 0; i<scores.length; i++){
        if(scores[i] == hightResult){
            bestSolution.push(i);
        }
       
    }
    return bestSolution;
}
var bestSolution = getBestResults(scores, hightResult);
console.log("Best hight scope: " + bestSolution);

function getMostCostEffectiveSolution(scores, costs, hightResult){
    var cost = 100;
    var indexOne;
    for( var i = 0; i< scores.length; i++){
        if(scores[i] == hightResult){
            if(cost > costs[i]){
                indexOne = i;
                cost = costs[i];
            }
        }
    }
    console.log(cost);
    return cost;
}
var getMostCostEffective = getMostCostEffectiveSolution(scores, costs, hightResult);
console.log("Effective: "+ getMostCostEffective);
