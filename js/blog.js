/* globals $ */

var postsRequest = $.ajax( "http://jsonplaceholder.typicode.com/posts" );
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
