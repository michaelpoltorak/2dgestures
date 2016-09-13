#2d js touch screen gestures
This repo contains javascript stuff for recognising gestures made on touch screens.

##$1 Unistroke Recognizer for js

This is a javascript implementation for touch screens of the $1 gesture recogniser.

The $1 recogniser is a uni-stroke recogniser and analyses simple one stroke gestures (hence the name). For more complicated, multi-stroke gestures, see the section on the $N recogniser.

The recogniser comes preloaded with 16 gestures, but custom ones can easily be added.

It's vanilla javascript, by the way.

### Usage
    // DOM element within which to setup recogniser - use el = null for whole screen
    var el = document.getElementById("detectBox"); 
    new Detect2d(el);                                           // Begin detection
    ...
    // Listen for recogniser done events and go do recognising stuff...
    doc.addEventListener("RECOGNIZER_DONE", function (data) { 
        var result = data.detail, name, score;
        name = result.Name;                                     // Name of detected gesture, if one
        score = result.Score;                                   // Its score (btw. 0 and 1);
    });
    
### Credits
The $1 Unistroke Recognizer was originally created by:

Jacob O. Wobbrock, University of Washington,
Andrew D. Wilson, Microsoft Research, and
Yang Li, University of Washington.
https://depts.washington.edu/aimgroup/proj/dollar/
