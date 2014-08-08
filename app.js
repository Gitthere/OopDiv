$(document).ready(function() {

  //create class
  function Box(color) {
    this.color = color;
    this.height = 50;
    this.width = 50;
    // needs method
  };

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
  
  Bluediv.prototype = new Box();

  var blueBox = new Bluediv ('#000099');  


  //create Reddiv subclass to box
  function Reddiv(color){
    Box.call(this, color);
  };

  //access to Box prototype chain
  Reddiv.prototype = new Box();

  var redBox = new Reddiv ('FF0000');



  function Greendiv(color) {
    Box.call (this, color);
  }

  Greendiv.prototype = new Box();

  var greenBox = new Greendiv ('00FF00');


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


    
  
  // //create reddiv class
  // function Reddiv() {
  //   Box.call(this, color);
  // };

  //tell to draw box
    blueBox.draw();
    redBox.draw();
    greenBox.draw();
});