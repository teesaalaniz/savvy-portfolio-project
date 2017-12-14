/* globals $ */

var postsRequest = $.ajax( "//jsonplaceholder.typicode.com/posts" );
var $content = $( ".content" );

postsRequest
    .then(
        ( posts ) => posts
            .map(
                ( post ) => "<p>" + post.title + "</p>"
            )
            .forEach(
                ( title ) => $content.append( title )
            )
    )
    .catch(
        () => $content.text( "There was an error!" )
    );


// $.ajax( "https://api.savvycoders.com/books", {
//     "method": "POST"
// } )
//     .then(
//         console.log( "It works!" )
//     )
//     .catch(
//         console.log( "Error!" )
//     );
