/* eslint-disable no-console */
var hello = "Hello";
var userName = prompt( "Whats your name?" );

var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "Whats your name, really?" );
        checkUserName();
    }
};

checkUserName();

alert( hello + " " + userName );
