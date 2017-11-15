/* eslint-disable vars-on-top */
/* eslint-disable complexity */
/* eslint-disable no-unused-vars*/
var story = {
    "start": "This is the beginning to your great adventure in the jungles of the Amazon, choose wisely. Lets start off simple, would you like to go north or south? Please type either north or south.",
    "north": "",
    "south": "You chose to head south. You walk about 50 paces when you hear the sound of a rushing river. You remember that TV show you saw once where you heard the phrase, always head towards water, water will save your life. Another 50 paces and you are at the river. You look left and right. On the left you see a bridge across the river, on the right you see a path. Choose which way you would like to go. Please type left or right.",
    "return": "You got lost in the jungle, eaten by a panther and died.",
    "treehouse": "You found the treehouse of safety. The locals lead guided tours and they found you. CONGRATS ON BEING SAVED",
    "left": "You tried to cross the bridge and but the bridge was broken half way across and you fell in the river and got washed away. You died. ",
    "right": "The path lead you to a treehouse, where the locals lead guided tours and they found you. CONGRATS ON BEING SAVED!"
};

var start = {
    "text": "This is the beginning to your great adventure in the jungles of the Amazon, choose wisely. Lets start off simple, would you like to go north or south? Please type either north or south.",
    "choices": [ "north","south" ]
};

var north = {
    "text": "You chose to go north, you are about 100 paces in when you realize that maybe this wasn't the best idea. You have only encountered deeper brush and more jungle. You havent seen the path in 25 paces. You start to panic but another 25 paces in you see something. You rush towards it. Its a treehouse. Do you head back or do you explore the treehouse? Please type either return or treehouse.",
    "choices": [ "treehouse","return" ],
};

var south = {
    "text": "You chose to head south. You walk about 50 paces when you hear the sound of a rushing river. You remember that TV show you saw once where you heard the phrase, always head towards water, water will save your life. Another 50 paces and you are at the river. You look left and right. On the left you see a bridge across the river, on the right you see a path. Choose which way you would like to go. Please type left or right.",
    "choices": [ "left","right" ]
};

var runStory = function runStory(){
    var choice = prompt( story.start );

    if( choice === "north" ){
        choice =  prompt( story.north );

        if( choice === "treehouse" ){
            document.querySelector( "#output" ).textContent = story.treehouse;
        }
        else if( choice === "return" ){
            document.querySelector( "#output" ).textContent = story.return;
        }
        else{
            runStory();
        }
    }
    else if( choice === "south" ){
        choice =  prompt( story.south );

        if( choice === "left" ){
            document.querySelector( "#output" ).textContent = story.left;
        }
        else if( choice === "right" ){
            document.querySelector( "#output" ).textContent = story.right;
        }

        else{
            runStory();
        }
    }
    else{
        runStory();
    }
};


runStory();
