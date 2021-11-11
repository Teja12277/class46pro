var player1,galien
var player2,yalien
var blockGrp
function preload(){
  player1run = loadAnimation("Images/sprite_110.png", "Images/sprite_111.png")
  player1stand = loadAnimation("Images/sprite_110.png")
  player1jump = loadAnimation("Images/sprite_113.png")
  player2run = loadAnimation("Images/sprite_p20.png", "Images/sprite_p21.png")
  player2stand = loadAnimation("Images/sprite_p20.png")
  player2jump = loadAnimation("Images/sprite_p23.png")
  bg = loadImage("Images/bg.jpg")
  spikes = loadImage("Images/spike0.png")
  minion = loadAnimation("Images/sprite_enemy0.png","Images/sprite_enemy1.png","Images/sprite_enemy2.png","Images/sprite_enemy3.png","Images/sprite_enemy4.png","Images/sprite_enemy5.png","Images/sprite_enemy6.png",)
  boss1 = loadImage("Images/boss0.png")
  block1 = loadImage("Images/Block.png")
}

function setup() {
createCanvas(windowWidth,windowHeight)
player1 = createSprite(130, 590)
player1.addAnimation("p1", player1stand)
player1.addAnimation("p1a", player1run)
player1.addAnimation("p1b", player1jump)
player2 = createSprite(120, 590)
player2.addAnimation("p2", player2stand)
player2.addAnimation("p2a", player2run)
player2.addAnimation("p2b", player2jump)

invisG = createSprite(600,windowHeight-120, windowWidth+5000,6)

minion1 = createSprite(1000, 600)
minion1.addAnimation("m1", minion)
minion1.scale = 0.5

minion2 = createSprite(1200, 300)
minion2.addAnimation("m2", minion)
minion2.scale = 0.5

spike = createSprite(600, 600)
spike.scale = 0.2
spike.addImage("spikes",spikes)
spike = createSprite(640, 600)
spike.scale = 0.2
spike.addImage("spikes",spikes)
spike = createSprite(680, 600)
spike.scale = 0.2
spike.addImage("spikes",spikes)
spike = createSprite(720, 600)
spike.scale = 0.2
spike.addImage("spikes",spikes)

boss = createSprite(2000,500)
boss.addImage("b", boss1)
boss.scale = 0.6


blockGrp = new Group() 

block = createSprite(600, 550)
block.addImage("bb", block1)
block.scale = 0.06
blockGrp.add(block)

block1a = createSprite(1700, 550)
block1a.addImage("bb1", block1)
block1a.scale = 0.06
blockGrp.add(block1a)

block2 = createSprite(1800, 500)
block2.addImage("bb2", block1)
block2.scale = 0.06
blockGrp.add(block2)

block3 = createSprite(1900, 450)
block3.addImage("bb3", block1)
block3.scale = 0.06
blockGrp.add(block3)

block4 = createSprite(2000, 450)
block4.addImage("bb4", block1)
block4.scale = 0.06
blockGrp.add(block4)

block5 = createSprite(2100, 450)
block5.addImage("bb5", block1)
block5.scale = 0.06
blockGrp.add(block5)

block6 = createSprite(2200, 450)
block6.addImage("bb6", block1)
block6.scale = 0.06
blockGrp.add(block6)

block7 = createSprite(2300, 450)
block7.addImage("bb7", block1)
block7.scale = 0.06
blockGrp.add(block7)

block8 = createSprite(2400, 450)
block8.addImage("bb8", block1)
block8.scale = 0.06
blockGrp.add(block8)

}

function draw() {
background(0)
image(bg,0,0,windowWidth*2,windowHeight)
playerMovement();
drawSprites();
invisG.visible = false
player1.collide(invisG)
player2.collide(invisG)
if(player1.x > windowWidth/2 && player1.x< windowWidth*2-1000){
camera.x = player1.x

}
if(minion1.y === 600){
  minion1.velocityY = -15
} 

if(minion1.y === 300){
  minion1.velocityY = 15
} 


if(minion2.y === 600){
  minion2.velocityY = -20
} 

if(minion2.y === 300){
  minion2.velocityY = 15
} 


if(boss.x === 2000){
  boss.velocityX = 5
  console.log("up")
} 

if(boss.x === 2400){
  boss.velocityX = -25
  console.log("down")
} 

text( mouseX+","+mouseY, mouseX, mouseY)



if(player1.isTouching(blockGrp)){
  player1.collide(blockGrp)
}
if(player2.isTouching(blockGrp)){
    player2.collide(blockGrp)
}

}

function playerMovement(){
  if(keyDown("RIGHT")){
    player1.velocityX = 7
    player1.changeAnimation("p1a", player1run)
  }
  if(keyWentUp("RIGHT")){
    player1.velocityX = 0
    player1.changeAnimation("p1", player1stand)
  }

  if(keyDown("LEFT")){
    player1.velocityX = -6
    player1.changeAnimation("p1a", player1run)
  }
  if(keyWentUp("LEFT")){
    player1.velocityX = 0
    player1.changeAnimation("p1", player1stand)
  }


  if(keyDown("D")){
    player2.velocityX = 8
    player2.changeAnimation("p2a", player2run)
  }
  if(keyWentUp("D")){
    player2.velocityX = 0
    player2.changeAnimation("p2", player2stand)
  }

  if(keyDown("A")){
    player2.velocityX = -8
    player2.changeAnimation("p2a", player2run)
  }
  if(keyWentUp("A")){
    player2.velocityX = 0
    player2.changeAnimation("p2", player2stand)
  }

  if(keyDown("UP") && player1.y >= 350){
    player1.velocityY = -15
    player1.changeAnimation("p1b", player1jump)
  }

  if(keyDown("W") && player2.y >= 400 ){
    player2.velocityY = -12
    player2.changeAnimation("p2b", player2jump)
  }

  player1.velocityY = player1.velocityY+1
  player2.velocityY = player2.velocityY+1
 /* if(keyWentUp("UP")){
    player1.velocityY = 2
  }*/

}