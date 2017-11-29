/* eslint-disable vars-on-top, complexity, no-use-before-define */

var story = {
    "start": {
        "text": "This is the beginning to your great adventure in the jungles of the Amazon, choose wisely. Lets start off simple, would you like to go north or south? Please type either north or south.",
        "choices": [ "north","south" ]
    },
    "north": {
        "text": "You chose to go north, you are about 100 paces in when you realize that maybe this wasn't the best idea. You have only encountered deeper brush and more jungle. You havent seen the path in 25 paces. You start to panic but another 25 paces in you see something. You rush towards it. Its a treehouse. Do you head back or do you explore the treehouse? Please type either return or treehouse.",
        "choices": [ "treehouse","return","south","right" ],
    },
    "south": {
        "text": "You chose to head south. You walk about 50 paces when you hear the sound of a rushing river. You remember that TV show you saw once where you heard the phrase, always head towards water, water will save your life. Another 50 paces and you are at the river. You look left and right. On the left you see a bridge across the river, on the right you see a path. Choose which way you would like to go. Please type left or right.",
        "choices": [ "left","right" ]
    },
    "treehouse": {
        "text": "You found the treehouse of safety. The locals lead guided tours and they found you. CONGRATS ON BEING SAVED",
        "lost": "You lost in the epic battle with the jungle and you died. Try again next time."
    },
    "left": {
        "text": "You tried to cross the bridge and but the bridge was broken half way across and you fell in the river and got washed away. You died. "
    },
    "right": {
        "text": "The path lead you to a treehouse, where the locals lead guided tours and they found you. CONGRATS ON BEING SAVED!"
    },
    "return": {
        "text": "You tried to follow your path back but you got lost. A panther attacked you and you died."
    }
};


function validateChoice( choice, choices ){
    var isValidChoice = false;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
}
runStory( "start" );
