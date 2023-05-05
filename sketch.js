let Geairard, personnageY
let obstacleImage, obstacleY, obstacleX, randomY
let vie, score
function setup() {
  createCanvas(displayWidth, 700);
  Geairard = loadImage("lilo-logo-baseline-fr.png")
  obstacleImage = loadImage("th.jpeg")
  obstacleX = width
  obstacleY = 500
  personnageY = 500
  vie = 5
  score = 0
}


function draw() {
  background("#ffcd00");
  joueur()
  obstacle()
}
function joueur() {
  image(Geairard, 100, personnageY)

  if (keyIsPressed && key == ' ') {
    personnageY = 250
  } else {
    personnageY = 500
  }


}
function obstacle() {
  image(obstacleImage, obstacleX, obstacleY, 100, 100)
  obstacleX -= 25;
  if (obstacleX < 0) {
    obstacleX = width
    randomY = int(random(2))
  score+=1
  }
  if (randomY == 1) {
    obstacleY = 350;
  }
  if (randomY == 0) {
    obstacleY = 500;
  }
  if (obstacleX < 100 + Geairard.width
    && personnageY == obstacleY) {
    obstacleX = width
    vie -= 1
  }
  fill(255)
  textSize(48)
  text("Vie:" + vie, 80, 80)
  text("Score:" + score, width - 1350, 80)
  if (vie == 0) {
    fill(255)
    textSize(78)
    text("GAME OVER GAME OVER GAME OVER GAME OVER GAME OVER", 250, 250)
    noLoop()
  }
}

function mousePressed() {
  vie = 5
  score=0
  loop()
  
}
