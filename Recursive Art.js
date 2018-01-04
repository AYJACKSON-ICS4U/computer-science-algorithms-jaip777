//function that has the code to enable the change in shape and color in my Recursive Art

var differentShapes = function(x, y, radius) {
    var XVAL = random(radius, x);
    var YVAL = random(radius, y);
    var drawingShapes = floor(random(1, 5));
    var colorA = floor(random(0, 255));
    var colorB = floor(random(0, 255));
    var colorC = floor(random(0, 255));
    //fills the shapes with the different colors, that are randomized with my floor(random) function
    fill(colorA, colorB, colorC);
//"drawingShapes" generates a random whole number from 1 through 5, these if statements determine the shape that is drawn based on the randomized number.
    //draw a rectangle
    if(drawingShapes === 1){
        rect(x, y, radius, radius, radius);
    }//draw a triangle
    else if(drawingShapes === 2){
        triangle(XVAL-8, y, XVAL-1, YVAL, (x-XVAL), (y+YVAL));
    }
    //draw a rectangle
    else if(drawingShapes === 3){
        rect( (x+XVAL)*2.1, y, XVAL, (y+YVAL)/4);
    }
    //draw an ellipse
    else if(drawingShapes === 4){
        ellipse(x+7, y+8, radius, radius);
    }
    //draw an ellipse
    else {
        ellipse(x/3, y/3, radius, radius);
    }
//variable for my new radius
    var newRadius = radius/2;
    if (newRadius >= 2) {
        differentShapes(XVAL, YVAL, newRadius);
        differentShapes(XVAL*2,YVAL*2, newRadius);
    }
};

differentShapes(width/2, height/2, 200);
