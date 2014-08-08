//create class
function Box(color) {
  this.color = color;
  this.height = 50;
  this.width = 50;
};

//draw method
Box.prototype.draw = function() {
  var newdiv = $('<div>');
  $('body').append(newdiv);
  newdiv.css('background-color', this.color);
  newdiv.css('height', this.height);
  newdiv.css('width', this.width);
  var colorHold = this.color;
  $(newdiv).click(function(){
    alert(colorHold + ' has been clicked.');
  });
};

  //**** can be done without creating 
  //new subclasses with code below
  // //draw blue and red//new instances of box
  // var bluediv = new Box ('#000099');
  // var reddiv = new Box ('#FF0000');
  // var greendiv = new Box ('#00FF00');
  // reddiv.height = 100;
  // reddiv.width = 100;
  //create bluediv subclass to box
 
function  Bluediv(color) {
  Box.call(this, color);
};
//properties of box to Bluediv
Bluediv.prototype = new Box();


//create Reddiv subclass to box
function Reddiv(color){
  Box.call(this, color);
};

//access to Box prototype chain
Reddiv.prototype = new Box();


function Greendiv(color) {
  Box.call (this, color);
};

Greendiv.prototype = new Box();  



$(document).ready(function() {

  //the blue box
  var blueBox = new Bluediv ('#000099');  

  var redBox = new Reddiv ('FF0000');

  var greenBox = new Greendiv ('00FF00');

  //command to draw box
  blueBox.draw();
  redBox.draw();
  greenBox.draw();

});