
/***********************************************************************************
  Rooms of My Dream House
  by Xinyu Yang
------------------------------------------------------------------------------------
  This is Xinyu's house that you can visit by clicking doors or buttons or using keys 
  and interactive among 6 rooms. Those rooms are originally made by Adobe XD.

------------------------------------------------------------------------------------
  It uses functions like preload(), setup(), draw(), image() and anothers to illustrate
  adobe XD's work to p5.js


***********************************************************************************/

// Array of images
var images = [];
var strings = [];
var midX;
var midY;
var startY;
var lineHeight = 24;
var drawFunction;
var gTextOffset = 20;

// Preload some images
function preload() {
  images[0] = loadImage('assets/EntranceHallBack.png');
  images[1] = loadImage('assets/DiningRoomBack.png');
  images[2] = loadImage('assets/KitchenRoomBack.png');
  images[3] = loadImage('assets/LivingRoomBack.png');
  images[4] = loadImage('assets/BedRoomBack.png');
  images[5] = loadImage('assets/BathRoomBack.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // provide values for variables
  midX = width/2;
  midY = height/2;
  startY = 60;

  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // load most of images now
  entrance = loadImage('assets/Entrance.png');
  chandeliersDining = loadImage('assets/ChandeliersDining.png');
  table = loadImage('assets/Table.png');
  fireplace = loadImage('assets/Fireplace.png');
  kitchen = loadImage('assets/Kitchen.png');
  chandeliersLiving = loadImage('assets/ChandeliersLiving.png');
  sofa = loadImage('assets/Sofa.png');
  bookShelf = loadImage('assets/bookShelf.png');
  draw1 = loadImage('assets/Draw1.png');
  draw2 = loadImage('assets/Draw2.png');
  bedroom = loadImage('assets/BedRoom.png');
  bathroom = loadImage('assets/BathRoom.png')

  drawFunction = drawEntranceHall;

}

function draw() {
  background(255);
  // call functions
  drawFunction();
}

// put the first preload image and more
drawEntranceHall = function() {
  image(images[0], midX, midY, windowWidth, windowHeight);
  image(entrance, midX, midY, windowWidth, windowHeight);

  fill(0,0,0);
  loadArray();
}

// put the second preload image and more
drawDiningRoom = function() {
  image(images[1], midX, midY, windowWidth, windowHeight);
  image(chandeliersDining, midX, midY, windowWidth, windowHeight);
  image(table, midX, midY, windowWidth, windowHeight);
  image(fireplace, midX, midY, windowWidth, windowHeight);

  fill(0,0,0);
}

// put the third preload image and more
drawKitchenRoom = function() {
  image(kitchen, midX, midY, windowWidth, windowHeight);
  image(images[2], midX, midY, windowWidth, windowHeight);

  fill(0,0,0);
}

// put the fourth preload image and more
drawLivingRoom = function() {
  image(images[3], midX, midY, windowWidth, windowHeight);
  image(chandeliersLiving, midX, midY, windowWidth, windowHeight);
  image(sofa, midX, midY, windowWidth, windowHeight);
  image(bookShelf, midX, midY, windowWidth, windowHeight);
  image(draw1, midX, midY, windowWidth, windowHeight);
  image(draw2, midX, midY, windowWidth, windowHeight);
  fill(0,0,0);
}

// put the fifth preload image and more
drawBedRoom = function() {
  image(images[4], midX, midY, windowWidth, windowHeight);
  image(bedroom, midX, midY, windowWidth, windowHeight);
  fill(0,0,0);
  text("Bathroom is private location, please first knock to check if anyone's there!", midX, height - gTextOffset);
}

// put the sixth preload image and more
drawBathRoom = function() {
  image(bathroom, midX, midY, windowWidth, windowHeight);
  image(images[5], midX, midY, windowWidth, windowHeight);
  fill(0,0,0);
}

// array appears in the first room as an instructure
function loadArray() {
  strings[0] = "click the doors to next room";
  strings[1] = "or";
  strings[2] = "click the buttons to next room";
  strings[3] = "or";
  strings[4] = "press the first character for each room";
  strings[5] = ""
  strings[6] = "Hopes you love my home."
  strings[7] = "";
  fill(0);
  for( let i = 0 ; i < strings.length; i++ ) {
    text( strings[i], midX, startY + (i * lineHeight) )
  }
}

// create some functions to switch the room
function EnterEntranceHall() {
  drawFunction = drawEntranceHall;
}

function EnterDiningRoom() {
  drawFunction = drawDiningRoom;
}

function EnterKitchen() {
  drawFunction = drawKitchenRoom;
}

function EnterLivingRoom() {
  drawFunction = drawLivingRoom;
}

function EnterBedroom() {
  drawFunction = drawBedRoom;
}

function EnterBathroom() {
  drawFunction = drawBathRoom;
}

// Change the drawFunction variable use keyboard
function keyTyped() {
  if (drawFunction === drawEntranceHall) {
    if (key === 'l') {
      EnterLivingRoom();
    }
    else if (key === 'd') {
      EnterDiningRoom();
    }
  }

  if (drawFunction === drawDiningRoom) {
    if (key === 'k') {
      EnterKitchen();
    }
    else if (key === 'l') {
      EnterLivingRoom();
    }
    else if (key === 'e') {
      EnterEntranceHall();
    }
  }

  if (drawFunction === drawKitchenRoom) {
    if (key === 'd') {
      EnterDiningRoom();
    }
  }

  if (drawFunction === drawLivingRoom) {
    if (key === 'e') {
      EnterEntranceHall();
    }
    else if (key === 'd') {
      EnterDiningRoom();
    }
    else if (key === 'b') {
      EnterBedroom();
    }
  }

  if (drawFunction === drawBedRoom) {
    if (key === 'l') {
      EnterLivingRoom();
    }
  }

  if (drawFunction === drawBathRoom) {
    if (key === 'b') {
      EnterBedroom();
    }
  }
}

// create some functions to switch the room
function leftSign() {
  if (mouseX <= midX / 2) {
    if (mouseY >= midY - 100 && mouseY <= midY + 100) {
      return true;
    }
  }
  return false;
}

function rightSign() {
  if (mouseX >= (midX) + (midX/2)) {
    if (mouseY >= midY - 100 && mouseY <= midY + 100) {
      return true;
    }
  }
  return false;
}

function kitchenDoor() {
  if (mouseX <= width /3 || mouseX >= width * 2/3) {
    if (mouseY >= height / 6 && mouseY <= height * 2/3) {
      return true;
    }
  }
  return false;
}

function lowerLeftssign() {
  if (mouseX <= width /7 && mouseY >= height * 2/3) {
    return true;
  }
  return false;
}

function lowerMiddlesign() {
  if (mouseX <= midX + 150 && mouseX >= midX - 150) {
    if (mouseY >= height * 2/3) {
      return true;
    }
  }
  return false;
}

function lowerRightsign() {
  if (mouseX >= width * 6/7 && mouseY >= height * 2/3) {
    return true;
  }
  return false;
}

function upperLeftsign() {
  if (mouseX <= width / 8 && mouseY <= height / 6) {
    return true;
  }
  return false;
}

function upperRightsign() {
  if (mouseX >= width * 7/ 8 && mouseY <= height / 6) {
    return true;
  }
  return false;
}

// Change the drawFunction variable use button
function mousePressed() {
  if (drawFunction === drawEntranceHall) {
    if (leftSign()) {
      EnterLivingRoom();
    }
    else if (rightSign()) {
      EnterDiningRoom();
    }
  }
  else if (drawFunction === drawDiningRoom) {
    if (kitchenDoor()) {
      EnterKitchen();
    }
    else if (lowerLeftssign()) {
      EnterEntranceHall();
    }
    else if (lowerRightsign()) {
      EnterLivingRoom();
    }
  }
  else if (drawFunction === drawKitchenRoom) {
    if (lowerLeftssign()) {
      EnterDiningRoom();
    }
    else if (lowerRightsign()) {
      EnterDiningRoom();
    }
  }
  else if (drawFunction === drawLivingRoom) {
    if (upperLeftsign()) {
      EnterEntranceHall();
    }
    else if (upperRightsign()) {
      EnterDiningRoom();
    }
    else if (lowerMiddlesign()) {
      EnterBedroom();
    }
  }
  else if (drawFunction === drawBedRoom) {
    if (lowerLeftssign()) {
      EnterLivingRoom();
    }
    else if (lowerRightsign()) {
      EnterBathroom();
    }
  }
  else if (drawFunction === drawBathRoom) {
    if (lowerLeftssign()) {
      EnterBedroom();
    }
  }
}