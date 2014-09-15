#2d Touch screen gestures
This repo contains stuff related to recognising gestures made on touch screens

##$1 Unistroke Recognizer

This is a an javascript implementation for touch screen of the $1 gesture recogniser.
The $1 recogniser is a uni-stroke recogniser and only analyses simple one stroke gestures (hence the name). For more complicated, multi-stroke gestures, see the secion on the $N recogniser.

It's in vanilla javascript.

It comes preloaded with 16 gestures, but custom ones can easily be added.

### Usage
    var el = document.getElementById("detectBox");
    new Detect2d(el); //Begin detection (set el = null for whole screen)
    ...
    // Listen for recogniser done events and go...
    doc.addEventListener("RECOGNIZER_DONE", function (data) { 
        var result = data.detail;
    });
    
The $1 Unistroke Recognizer was originally created by:

Jacob O. Wobbrock, University of Washington,
Andrew D. Wilson, Microsoft Research, and
Yang Li, University of Washington.
https://depts.washington.edu/aimgroup/proj/dollar/
