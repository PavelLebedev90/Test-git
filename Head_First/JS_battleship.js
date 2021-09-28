let locRandom = Math.floor(Math.random() * 5);
let location_1 = locRandom;
let location_2 = locRandom + 1;
let location_3 = locRandom + 2;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while(isSunk == false){
     guess = prompt("Введите координаты выстрела:");
    if(guess > 6 || guess < 0){
        alert("Введите корректные координаты!");
    }
        else{
            guesses++;
                if(guess == location_1 || guess == location_2 || guess == location_3){
                alert("Попал!!!");
                hits++;
    
                    if(hits == 3){ 
                        isSunk = true;
                        alert("Корабль потоплен!");
                    } 
                }  else{
                    alert("Мимо!");
                   }
        }
        
}
let stats = "Ты выйграл с " + guesses + " попытки " + (3/guesses);
alert(stats);