let location_1 = 3;
let location_2 = 4;
let location_3 = 5;
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
                }
        }
        
}
