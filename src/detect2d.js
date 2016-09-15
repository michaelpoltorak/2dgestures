function Detect2d(element) {

    var doc = element || window;
    // Setup touch events
    var touchstart, touchend, touchmove, touchPoints = [],
        recogizer = new DollarRecognizer();

    //Each touch event is declared as separate function in order to be able to remove it again w. removeEventListener
    touchstart = function (evt) {
        //console.log("start ", evt);
    };
    touchend = function (evt) {
        //console.log("end ", evt);
        if (touchPoints.length > 0) {
            var result = recogizer.Recognize(touchPoints, false); //do they resemble a $1-gesture?
            console.log("result ", result);
            doc.dispatchEvent(new CustomEvent("RECOGNIZER_DONE", {
                "detail": result
            }));
            touchPoints = [];
        }
    };
    touchmove = function (evt) {
        var point,
            touch = evt.touches[0]; // getting the first touch event from the touchList
        point = new Point(touch.clientX, touch.clientY); //create a new Point from x,y. (Defined in the unistroke-recognizer.js file)
        //console.log("Point ", point);
        touchPoints.push(point); //Store the point for later
    };

    //Setup the event listeners
    doc.addEventListener("touchstart", touchstart, false);
    doc.addEventListener("touchend", touchend, false);
    doc.addEventListener("touchmove", touchmove, false);

    //Remove event listeners
    this.removeEvents = function () {
        doc.removeEventListener("touchstart", start, false);
        doc.removeEventListener("touchend", end, false);
        doc.removeEventListener("touchmove", move, false);
    };
}
