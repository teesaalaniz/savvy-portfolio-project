/* eslint-disable no-console */
var hello = "Hello";
var originalName = prompt( "Whats your name?" );

var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "Whats your name, really?" );

        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};

checkUserName( originalName );

document.querySelector( "#subheader" ).textContent = "Hello, " + originalName;
