var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// fila 1
var box1 = createSprite(50, 62, 95, 25);
var box2 = createSprite(150, 62, 95, 25);
var box3 = createSprite(250, 62, 95, 25);
var box4 = createSprite(350, 62, 95, 25);

// fila 2
var box5 = createSprite(50, 92, 95, 25);
var box6 = createSprite(150, 92, 95, 25);
var box7 = createSprite(250, 92, 95, 25);
var box8 = createSprite(350, 92, 95, 25);

// fila 3
var box9 = createSprite(50, 122, 95, 25);
var box10 = createSprite(150, 122, 95, 25);
var box11 = createSprite(250, 122, 95, 25);
var box12 = createSprite(350, 122, 95, 25);

// fila 4
var box13 = createSprite(50, 152, 95, 25);
var box14 = createSprite(150, 152, 95, 25);
var box15 = createSprite(250, 152, 95, 25);
var box16 = createSprite(350, 152, 95, 25);

// pelota y paleta

var ball = createSprite(200, 250, 15, 15);
var paddle = createSprite(200, 380, 100, 10);

var score = 0;

//crea una variable para los estados e inicializarla en serve

var gameState = "serve";


// pintar los objetos sprite

box1.shapeColor = "red";
box2.shapeColor = "red";
box3.shapeColor = "red";
box4.shapeColor = "red";

box5.shapeColor = "orange";
box6.shapeColor = "orange";
box7.shapeColor = "orange";
box8.shapeColor = "orange";

box9.shapeColor = "green";
box10.shapeColor = "green";
box11.shapeColor = "green";
box12.shapeColor = "green";

box13.shapeColor = "yellow";
box14.shapeColor = "yellow";
box15.shapeColor = "yellow";
box16.shapeColor = "yellow";

ball.shapeColor = "white";
paddle.shapeColor ="blue";

function draw() {
  background("black");
  drawSprites(); 
  createEdgeSprites();

//mostrar un mensaje de puntución
 textSize(18);
 stroke("red");
 text("Puntuación: "+score, 260, 30);

//agregar los estados del juego

if (gameState == "serve") {
  
  //mostrar un mensaje de bienvenida
stroke("blue");
textSize(18);
text("¡Bienvenido! Presiona enter para jugar", 45, 200)

//mover la pelota al presionar enter
 if (keyDown("enter")) {
    ball.velocityX = 5;
    ball.velocityY = 5;
    gameState = "play";
  }
}

if (gameState == "play") {
  //mover la paleta del jugador con el mouse
    paddle.x = World.mouseX;
    
    if(ball.isTouching(bottomEdge) || score == 16)
    {
      gameState="end";
    }
    
}

if (gameState == "end") {
  
  //detener el movimiento de la pelota
  
  
  //mensaje de fin del juego
  
}



  
//hacer que la pelota rebote con la paleta del jugador
ball.bounceOff(paddle);

//hacer que la pelota rebote en los bordes: izquierdo, derecho y superior
ball.bounceOff(topEdge);
ball.bounceOff(rightEdge);  
ball.bounceOff(leftEdge);

//destruir los ladrillos

if(ball.isTouching(box1)) {
  ball.bounceOff(box1);
  box1.destroy();
  score = score + 1;
}

if(ball.isTouching(box2)) {
  ball.bounceOff(box2);
  box2.destroy();
  score = score + 1;
}

if(ball.isTouching(box3)) {
  ball.bounceOff(box3);
  box3.destroy();
  score = score + 1;
}

if(ball.isTouching(box4)) {
  ball.bounceOff(box4);
  box4.destroy();
  score = score + 1;
}

if(ball.isTouching(box5)) {
  ball.bounceOff(box5);
  box5.destroy();
  score = score + 1;
}

if(ball.isTouching(box6)) {
  ball.bounceOff(box6);
  box6.destroy();
  score = score + 1;
}

if(ball.isTouching(box7)) {
  ball.bounceOff(box7);
  box7.destroy();
  score = score + 1;
}

if(ball.isTouching(box8)) {
  ball.bounceOff(box8);
  box8.destroy();
  score = score + 1;
}

if(ball.isTouching(box9)) {
  ball.bounceOff(box9);
  box9.destroy();
  score = score + 1;
}

if(ball.isTouching(box10)) {
  ball.bounceOff(box10);
  box10.destroy();
  score = score + 1;
}

if(ball.isTouching(box11)) {
  ball.bounceOff(box11);
  box11.destroy();
  score = score + 1;
}

if(ball.isTouching(box12)) {
  ball.bounceOff(box12);
  box12.destroy();
  score = score + 1;
}

if(ball.isTouching(box13)) {
  ball.bounceOff(box13);
  box13.destroy();
  score = score + 1;
}

if(ball.isTouching(box14)) {
  ball.bounceOff(box14);
  box14.destroy();
  score = score + 1;
}

if(ball.isTouching(box15)) {
  ball.bounceOff(box15);
  box15.destroy();
  score = score + 1;
}

if(ball.isTouching(box16)) {
  ball.bounceOff(box16);
  box16.destroy();
  score = score + 1;
}
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
