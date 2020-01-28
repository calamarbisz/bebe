
let bebe=[];
let ghost;
let operacion;
let button


function preload(){
  for (let i=0; i<18; i++){
    bebe[i]= loadImage('assets/bebe' + i + '.JPG');
  }

  ghost = createSprite(100, 150, 50, 100);
  for (let i=0; i<13; i++){
      var myAnimation = ghost.addAnimation('floating', 'gif/vida0.png','gif/vida12.png');
  }
   operacion = createSprite(800, 300);
  for (let i=0; i<10; i++){
    var myAnimation = operacion.addAnimation('operando', 'gif/operacion0.png','gif/operacion9.png');
}
 }

 function setup() {
   createCanvas(windowWidth,windowHeight);
   background(0)

   button = createButton('SABER MÁS');
   button.mousePressed( function(){ window.open("second.html", "_self");  } );
   button.position(60,50);


   for (let i=0; i<16; i++){

     setTimeout(create, 1000);
     setTimeout(drawSprites, 2000);
     setTimeout(caca, 2000);
     setTimeout(cacas, 3000);
     setTimeout(cacas1, 4000);
     setTimeout(cacas2, 5000);
     setTimeout(cacas3, 6000);
     setTimeout(cacas4, 7000);
     setTimeout(cacas5, 8500);
     setTimeout(cacas6, 9500);
     setTimeout(cacas7, 10500);
   }

 }

function create(){
      image(bebe[1],270,300,160,200);
}
function caca(){
      image(bebe[0],150,200,160,200);
    }
function cacas(){
      image(bebe[2],370,100,80,100);
      image(bebe[16],70,400,160,160);
    }
function cacas1(){
      image(bebe[4],500,470,170,180);
      image(bebe[17],1100,50,150,130);
    }
function cacas2(){
      image(bebe[5],500,10,200,250);
      image(bebe[6],200,500,150,130);

    }
function cacas3(){
      image(bebe[7],650,10,200,250);
      image(bebe[8],700,500,150,130);
    }
function cacas4(){
      image(bebe[9],1000,400,200,250);
      image(bebe[10],900,50,150,130);

    }
function cacas5(){
      image(bebe[14],800,380,130,110);
      image(bebe[12],950,190,200,250);
    }
function cacas6(){
      image(bebe[11],30,250,100,140);
      image(bebe[15],200,20,100,140);
    }
function cacas7(){
      image(bebe[13],400,200,280,250);
    }

 function draw(){
   drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
