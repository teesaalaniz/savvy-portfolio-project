/* eslint-disable complexity, no-console, vars-on-top */
/* Problem #1 */
var fizzBuzzResult = "";

function fizzBuzz( num ){
    if( num % 15 === 0 ){
        fizzBuzzResult += ", FizzBuzz";
    }
    else if( num % 3 === 0 ){
        fizzBuzzResult += ", Fizz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += ", Buzz";
    }
    else if( num === 1 ){
        fizzBuzzResult += num;
    }
    else{
        fizzBuzzResult += ", " + num;
    }
}
function fizzBuzzLightyear( limit ){
    for( var i = 1; i <= limit; i++ ){
        fizzBuzz( i );
    }
}

fizzBuzzLightyear( 50 );
document.querySelector( "#fizzbuzz" ).textContent = fizzBuzzResult;

/* Problem #2 */

function makeListItems(){
    var listItems = document.querySelectorAll( "li" );
    var listArray = Array.from( listItems );


    listArray.forEach( ( li, x ) => li.textContent = x + 1 );
}

makeListItems();

/* Problem #3 */

function generateEvenListItems(){
    var evens = document.querySelector( "#evens" );
    var listItemString = "";

    for( var i = 2; i <= 20; i += 2 ){
        listItemString += "<li>";

        listItemString += i;

        listItemString += "</li>";
    }

    evens.innerHTML = listItemString;
}

generateEvenListItems();
