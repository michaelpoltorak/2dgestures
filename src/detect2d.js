function Detect2d() {

    // Setup touch events
    var touchstart, touchend, touchmove, touchPoints = [],
        recogizer = new DollarRecognizer();

    //Each touch event is declared as separate function in order to be able to remove it again w. removeEventListener
    touchstart = function (evt) {
        console.log("start ", evt);
    };
    touchend = function (evt) {
        if (touchPoints.length > 0) {
            var result = recogizer.Recognize(touchPoints, false); //do they resemble a $1-gesture?
            if (result.Score > 0.8) {
                //console.log("result ", result);
                document.dispatchEvent(new CustomEvent("RECOGNIZED_GESTURE", {
                    "detail": result
                }));
            } else {
                document.dispatchEvent(new CustomEvent("DID_NOT_RECOGNIZE_GESTURE"));
            }
            touchPoints = [];
        }
    };
    touchmove = function (evt) {
        var point,
            touch = evt.touches[0]; // getting the first touch event from the touchList
        point = new Point(touch.clientX, touch.clientY); //create a new Point from x,y. (Defined in the unistroke-recognizer.js file)
        touchPoints.push(point); //Store the point for later
    };

    //Setup the event listeners
    document.addEventListener("touchstart", touchstart, false);
    document.addEventListener("touchend", touchend, false);
    document.addEventListener("touchmove", touchmove, false);

    //Remove event listeners
    this.removeEvents = function () {
        document.removeEventListener("touchstart", start, false);
        document.removeEventListener("touchend", end, false);
        document.removeEventListener("touchmove", move, false);
    };
}
