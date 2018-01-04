//In this project, I creted 4 different arrays.The red dot beside a number represents the number that is out of sequence. The blue dot attached to it represents the number that it must switch positions with to get into the correct order.

   var ypos = 10; //sets the y position of numbers in the array (on canvas)
   
var displayArray = function(array, min) { //function that displays the arrays
    textFont(createFont("monospace"), 15);//font characteristics of numbers in the array
    var xpos = 10; //sets the x position of the numbers in the array (on canvas)
    for (var k=0; k < array.length ; k++){ //runs through the array and its contents
      fill(0, 0, 0); // sets text color to black
      text(array[k], xpos, ypos, 200, 300);//display the number in the array
      xpos+=30;//increase x position (space between numbers)
    }
    ypos += 21; // move down a line
};
var swap = function(array, firstIndex, secondIndex) {//function to rearrange array
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex]; //swap the numbers to the correct order
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) { //function to hold position of the numbers in the array

    var minValue = array[startIndex];//the smallest value (used to move to the correct place
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) { //runs through the array
        if(array[i] < minValue) { //checks if the number should be set to the min value
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;//returns index of the minimum value
}; 

var selectionSort = function(array) {//function to sort the array
    var min; 
    for (var i=0; i < array.length; i++){//runs through the array
        displayArray(array, min);
        min = indexOfMinimum(array, i);
        swap(array, i, min);//swaps the numbers to get to an order of least to greatest
    }
};

var array = [2, 4, 3];// first array, only 1 number out of place
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [2, 3, 4]); //checks for correct order
text("----------", 10, 62, 200, 300);//line beneath to seperate from next array
fill(245, 17, 21);//circles and connecting lines below to visualize array sort
ellipse(53, 16, 5, 5);
line(53,17,68,35);
fill(17, 218, 245);
ellipse(67, 37, 5, 5);

var array = [3, 2, 1];//second array, in opposite order
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [1, 2, 3]);
text("----------", 10, 126, 200, 300);//separation line
fill(245, 17, 21);//circles and connecting lines below to visualize array sort
ellipse(25, 78, 5, 5);
line(26,78,68,79);
fill(17, 218, 245);
ellipse(68, 78, 5, 5);

var array = [2, 4, 2];//third array, where two numbers are the same
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [2, 2, 4]);
text("---------------", 0, 187, 200, 300);//separation line
fill(245, 17, 21);//circles and connecting lines below to visualize array sort
ellipse(53, 141, 5, 5);
line(55,143,68,163);
fill(17, 218, 245);
ellipse(68, 162, 5, 5);

var array = [2, 4, 3, 9];//fourth array with greater length
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [2, 3, 4, 9]);
text("---------------", 0, 270, 200, 300);
fill(245, 17, 21);//circles and connecting lines below to visualize array sort
ellipse(54, 206, 5, 5);
line(85,224,55,207);
fill(17, 218, 245);
ellipse(85, 225, 5, 5);




