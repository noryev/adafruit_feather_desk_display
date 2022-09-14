// The Shitty Shooting Star of Satisfaction 

var xPos = 374;
var yPos = 22;
var aPos = 22;
var bPos = 22;


draw = function() {
    background(29, 40, 115);
    fill(255, 255, 255);
    ellipse(xPos, yPos, 14, 14);
    ellipse(aPos, bPos, 14, 14);
    
//Background Starts
    ellipse(305,13,3,3);
     ellipse(249,93,5,3);
      ellipse(111,43,3,4);
       ellipse(383,168,3,3);
        ellipse(1,68,6,4);
    
//Shitty Building
    fill(61, 61, 61);
    rect(22,215,220,220,0);
    
//Shooting Starts Animation Instructions    
    aPos++ ;
    bPos++ ;
    
    yPos++ ;
    xPos-- ;
    
    
};



