
// start kilometerToMeter function

function kilometerToMeter(kilometer) {
    var MeterValue = 1000;
    var meterIs = MeterValue * kilometer;
    return meterIs;
}
var result = kilometerToMeter(41);
console.log(result);

// end kilometerToMeter function


// start megaFriends function

function megaFriend(friends){
    var max = friends[0];
    for (var i = 0; i < friends.length; i++){
        var name = friends[i];
        if (name.length > max.length){
            max = name;
        }
    }
    return max;
}
    var bigNameFrnd = megaFriend(["salam", "rofique", "jabbar", "borkotali", "nahidulislam", "selim"]);
    console.log(bigNameFrnd);

    // end megaFriends function
    
    // start hotel cost function

function hotelCost(days){
    var totalCost = 0;
    if (days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var firstPart = 100 * 10;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }
    else{
        var firstPart = 100 * 10;
        var secondPart = 80 * 10;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}

var needCost = hotelCost(15);
console.log(needCost);

// end hotel cost function

// start budget calculator function

function budgetCalculator(watch,phone,laptop){
    var productPrice =[50,100,500];
    var totalPrice = 0;    
    totalPrice = productPrice[0] * watch;
    totalPrice = totalPrice + productPrice[1] * phone;
    totalPrice = totalPrice + productPrice[2] * laptop;
    return totalPrice;
}

console.log(budgetCalculator(5,5,5));

// end budget calculator function








