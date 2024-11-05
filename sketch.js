//variable declarations



//icons
let insta1 = [];


//# of iterations per icon
let iconNum = 1;

//declaring icon as arrays (for placement)
let icon_instagram = [];

let userText = [];
const inputText = document.getElementById('textbox').value;
//let input = document.getElementById('textbox').value;
if (inputText) {
//userText.push(inputText);
insta1.push(new Insta(random(windowWidth), random(windowHeight), inputText));
}
console.log(inputText);


//loading + declaring image files
function preload(){
  

   //icon_instagram = loadImage('icon_instagram.png');
  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //declaring randomized placements of each icon
    // for (let i = 0; i < iconNum; i++){
    
    // insta1[i] = new Insta(random(windowWidth),random(windowHeight));
     

      
    }



  


function draw() {

  background(255)

      scene0();


}

//assigning what happens in scene 0 (1st scene)
function scene0() {

  for (let i = 0; i < insta1.length; i++){
  
  insta1[i].body()
  insta1[i].move()
 
  }

  }


//declaring icons for scene 0
/* INSTA ICON */
class Insta{
  constructor(x,y, inputText){
	this.x = x;
	this.y = y;
    this.text = inputText;
    //this.r = r;
    //this.c = c;
  }
  
  body(){
    //fill(this.c)
    noStroke()
    textSize(24);
    //text(userText, this.x, this.y);
    text(this.text, this.x, this.y);
    //image(icon_instagram,this.x,this.y,50,50);
   }
  
  move(){
    this.y++;
    if (this.y>height){
      this.y=0;
      this.x = random(windowWidth);
    }
  }
  remove(){
    this.x = -100;
    this.y = -100;
  }

}

function updateText () {
    //let input = document.getElementById('textbox').value;
    if (input) {
        userText = input;
    }
}

