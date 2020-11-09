//giving gamestste
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//created sprites
var  sword

var fruit1Group;
var fruit2Group;
var fruit3Group;
var fruit4Group;
var enemyGroup;
var enemy2Group;

var swordSound, gameoverSound;

var score;
function preload(){
  //loaded images
  swordImage =loadImage("sword.png");
  fruit1Image =loadImage("fruit1.png");
  fruit2Image =loadImage("fruit2.png");
  fruit3Image =loadImage("fruit3.png");
  fruit4Image =loadImage("fruit4.png");
  enemyImage = loadImage("alien1.png");
  enemy2Image = loadImage("alien2.png");
  swordSound = loadSound("sword.mp3");
  gameoverImage = loadImage("gameover.png");
  gameoverSound = loadSound("gameover.mp3");
}

function setup(){
  //creating canvas
  createCanvas(400, 400);
  
  //creating sword sprite, adding image to sword and giving size
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.5;
 
  score = 0;
 fruit1Group = new Group();
 fruit2Group = new Group();
 fruit3Group = new Group();
 fruit4Group = new Group();
 enemyGroup = new Group();
 enemy2Group = new Group();
  
  
  gameover=createSprite(200,200);
  gameover.addImage(gameoverImage);
  gameover.visible=false;
  
     
}

function draw (){
  
//Giving a background color  
  background("lightblue");

if (gameState === PLAY) {
  
  
  //Making sword move according to x and y position of   mouse  
   sword.y =mouseY;
   sword.x =mouseX;
 
//Giving random spawns of fruits and enemies  
  if(frameCount % 160 === 0){
    var r = Math.round(random(1,6))
    if(r === 1){
      fruit1(); 
    }
    else if (r===2){
      fruit2 ();
    }else if (r === 3){
      fruit3 ();
    }
    else if (r === 4){
      fruit4 ();
    }
    else if (r === 5){
      enemy();
    }
    else if (r === 6){
      enemy2();
    }
  }

  if (sword.isTouching(fruit1Group)) {
     fruit1Group.destroyEach();
     swordSound.play();
    score = score+1;
  }
  
   if (sword.isTouching(fruit2Group)) {
     fruit2Group.destroyEach();
     swordSound.play();
     score = score+1;
  }
  
   if (sword.isTouching(fruit3Group)) {
     fruit3Group.destroyEach();
     swordSound.play();
     score = score+1;
  }
  
   if (sword.isTouching(fruit4Group)) {
     fruit4Group.destroyEach();
     swordSound.play();
     score = score+1;
  }
  

  
  if (enemyGroup.isTouching(sword)){
    enemyGroup.destroyEach();
    enemy2Group.destroyEach();
    gameoverSound.play();
    gameState = END;
    //reset();
  }
    
  if (enemy2Group.isTouching(sword)){
    enemy2Group.destroyEach();
    enemyGroup.destroyEach();
    gameoverSound.play();
    gameState = END;
    //reset();
  }
  }
   else if(gameState === END){
    fruit1Group.velocityX = 0;
    fruit2Group.velocityX = 0;
    fruit3Group.velocityX = 0;
    fruit4Group.velocityX = 0;
    enemyGroup.velocityX = 0;
    enemy2Group.velocityX = 0;
    gameover.visible = true;
   }
  
  textSize (15)
  text ("score : "+score,300,30);
   drawSprites();
}

function fruit1(){
  var r = Math.round(random(1,2));
  var fruit1 = createSprite(400,100,10,10);
  fruit1.y =Math.round(random(20,350));
  fruit1.addImage(fruit1Image);
  if (r === 1) {
    fruit1.x = 400;
    fruit1.velocityX =-4;  
  }
  else if (r === 2){
    fruit1.x = 0;
    fruit1.velocityX =4;
    
  }
  fruit1.lifetime = 400;
  fruit1.scale = 0.2;
  fruit1Group.add(fruit1);
}

function fruit2(){
  var r = Math.round(random(1,2));
  var fruit2 = createSprite(400,100,10,10);
  fruit2.y =Math.round(random(20,350));
  fruit2.addImage(fruit2Image);
  if (r === 1) {
    fruit2.x = 400;
    fruit2.velocityX =-4;  
  }
  else if (r === 2){
    fruit2.x = 0;
    fruit2.velocityX =4;
    
  }
  fruit2.lifetime = 400;
  fruit2.scale = 0.2;
  fruit2Group.add(fruit2);
}

function fruit3(){
  var r = Math.round(random(1,2));
  var fruit3 = createSprite(400,200,10,10);
  fruit3.y =Math.round(random(20,350));
  fruit3.addImage(fruit3Image);
  if (r === 1) {
    fruit3.x = 400;
    fruit3.velocityX =-4;  
  }
  else if (r === 2){
    fruit3.x = 0;
    fruit3.velocityX =4;
    
  }
  fruit3.lifetime = 400;
  fruit3.scale = 0.2;
  fruit3Group.add(fruit3);
}

function fruit4(){
  var r = Math.round(random(1,2));
  var fruit4 = createSprite(400,200,10,10);
  fruit4.y =Math.round(random(20,350));
  fruit4.addImage(fruit4Image);
  if (r === 1) {
    fruit4.x = 400;
    fruit4.velocityX =-4;  
  }
  else if (r === 2){
    fruit4.x = 0;
    fruit4.velocityX =4;
    
  }
  fruit4.lifetime = 400;
  fruit4.scale = 0.17;
  fruit4Group.add(fruit4);
}

function enemy (){
  var r = Math.round(random(1,2));
  var enemy = createSprite(400,150,20,10);
  enemy.y =Math.round(random(20,350));
  enemy.addImage(enemyImage);
  if (r === 1) {
    enemy.x = 400;
    enemy.velocityX =-4;  
  }
  else if (r === 2){
    enemy.x = 0;
    enemy.velocityX =4;
    
  }
  enemy.lifetime = 400;
  enemy.scale = 1;
  enemyGroup.add(enemy);
}

function enemy2 (){
  var r = Math.round(random(1,2));
  var enemy2 = createSprite(400,150,20,10);
  enemy2.y =Math.round(random(20,350));
  enemy2.addImage(enemy2Image);
  if (r === 1) {
    enemy2.x = 400;
    enemy2.velocityX =-4;  
  }
  else if (r === 2){
    enemy2.x = 0;
    enemy2.velocityX =4;
    
  }
  enemy2.lifetime = 400;
  enemy2.scale = 1;
  enemy2Group.add(enemy2);
}

function reset(){
  gameState = PLAY;
  score = 0;
  fruit1Group.destroyEach();
  fruit2Group.destroyEach();
  fruit2Group.destroyEach();
  fruit2Group.destroyEach();
  gameover.visible = false;
}