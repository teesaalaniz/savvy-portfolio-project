/* eslint-disable complexity, no-console, vars-on-top */
/* globals $ */

var $output = $( "#output" );
var $subtitle = $( "<h3> You will be eaten by a panther</h3>" );

$output
    .html( "<h1>Hello, World!</h1>" )
    .css( {
        "color": "springgreen",
        "text-align": "center",
        "font-family": "fantasy",
        "font-size": "75px"
    } )
    .append( $subtitle )
    .fadeOut( 3000 )
    .fadeIn( 2000 )
    .animate( {
        "margin-top": "20%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( {
                "color": "black",
                "display": "none"
            } );
        }
    }
    )
;
