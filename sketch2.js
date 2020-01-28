
// let bebe=[];
// let ghost;
// let operacion;
let button
let video;


// function preload(){
//   for (let i=0; i<16; i++){
//     bebe[i]= loadImage('assets/bebe' + i + '.JPG');
//   }
//   ghost = createSprite(100, 150, 50, 100);
//   for (let i=0; i<13; i++){
//       var myAnimation = ghost.addAnimation('floating', 'gif/vida0.png','gif/vida12.png');
//   }
//    operacion = createSprite(800, 300);
//   for (let i=0; i<10; i++){
//     var myAnimation = operacion.addAnimation('operando', 'gif/operacion0.png','gif/operacion9.png');
// }
//  }

 function setup() {
   createCanvas(windowWidth,windowHeight);
   background(0)

   video = createVideo(['video0']);
   video.hide();

   button = createButton('indice');
   button.mousePressed( function(){ window.open("first.html", "_self");  } );
   button.position(200,50);



   // for (let i=0; i<16; i++){
   //
   //   setTimeout(create, 1000);
   //   setTimeout(drawSprites, 2000);
   //   setTimeout(caca, 2000);
   //   setTimeout(cacas, 3000);
   //   setTimeout(cacas1, 4000);
   //   setTimeout(cacas2, 5000);
   //   setTimeout(cacas3, 6000);
   //   setTimeout(cacas4, 7000);
   //   setTimeout(cacas5, 8500);
   //   setTimeout(cacas6, 9500);
   //   setTimeout(cacas7, 10500);
   // }

 }

// function create(){
//       image(bebe[1],270,350,160,200);
// }
// function caca(){
//       image(bebe[0],150,200,160,200);
//     }
// function cacas(){
//       image(bebe[2],370,100,80,100);
//     }
// function cacas1(){
//       image(bebe[4],500,470,170,180);
//     }
// function cacas2(){
//       image(bebe[5],500,10,200,250);
//       image(bebe[6],100,500,150,130);
//     }
// function cacas3(){
//       image(bebe[7],650,10,200,250);
//       image(bebe[8],700,500,150,130);
//     }
// function cacas4(){
//       image(bebe[9],1000,400,200,250);
//       image(bebe[10],900,50,150,130);
//     }
// function cacas5(){
//       image(bebe[14],800,380,130,110);
//       image(bebe[12],950,190,200,250);
//     }
// function cacas6(){
//       image(bebe[11],30,250,100,140);
//       image(bebe[15],200,20,100,140);
//     }
// function cacas7(){
//       image(bebe[13],400,200,280,250);
//     }
//
 function draw(){
  image(video, 10, 200);
}
function mousePressed() {
  fingers.loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
