//russiancircles
//dragonforce
//pelican
//trentemoller
//toe - the book about my idle plot on vague society

// Question 1

//Get All Prices
var allPrices = items.map(function(item) {
  return item.price;
});

//Get the sum
var sum = allPrices.reduce(function(x, y) {
  return x + y;
});

// Average
var average = sum / allPrices.length;

//Answer
var answer1 = average.toFixed(2);

// Drop answer in DOM Node
document.querySelector('#answer1').textContent = "The average price is $" + answer1;


// Question 2

//Pull items priced between $14 and $18 using .filter

var itemsBetween = items.filter(function(item) {
  if (item.price > 14 && item.price < 18)
    return item;
});

//Answer to DOM Node

var answer2 = document.querySelector('#answer2');
answer2.innerText = "";
itemsBetween.forEach(function(item) {
  answer2.appendChild(document.createTextNode(item.title + '\n'));
});


//Question 3

//Pull item with GBP Currency Code
var GBParray = items.filter(function(thing) {
  if (thing.currency_code === "GBP") {
      return thing;
    }
});

GBParray.forEach(function(object) {
  document.querySelector('#answer3').textContent = object.title + " costs " + object.price;
});


//Question 4

var woodItems = items.filter(function(object) {
    if (object.materials.indexOf("wood") !== -1)
      return object.materials;
});

answer4.innerText = "";
woodItems.forEach(function(item) {
  answer4.appendChild(document.createTextNode(item.title + ' is made of wood.' + '\n \n'));
});


//Question 5


var itemsOver8 = items.filter(function(object) {
  if (object.materials.length > 7)
    return object;
});

answer5.innerText = "";
itemsOver8.forEach(function(item) {
  answer5.appendChild(document.createTextNode(item.title + " has " + item.materials.length + " materials:" + "\n" + item.materials.join("\n") + "\n \n"));
});


//Question 6


var selfMade = items.filter(function(object) {
  if (object.who_made === "i_did")
    return object;
})

document.querySelector('#answer6').textContent = selfMade.length + " were made by their sellers";
