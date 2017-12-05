/* globals $ */

$( "#input" ).on(
    "keyup",
    ( event ) =>  {
        var value = $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h2>Hello, " + value + "</h2>" );
    }
);

// $( "ul" ).on( "mouseover", "li", ( event ) => {
//     $( event.target ).css( "background-color", "yellow" );
// } );
//
// $( "ul" ).on( "mouseout", "li", ( event ) => {
//     $( event.target ).css( "background-color", "transparent" );
// } );


$( "h1" ).on( "click",( event ) => event.target.textContent = "Why did you click that?" );
