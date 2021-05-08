var input;
function setup() {
  createCanvas(800, 600);
  strokeWeight(3);
  input = createInput();
  input.position(4, 4);
  w = color(255);
  y = color(255, 255, 0);
  r = color(255, 0, 0);
  o = color(255, 165, 0);
  b = color(0, 0, 255);
  g = color(0, 255, 0);
  up = [[y, y, y],
        [y, y, y],
        [y, y, y]];
  down = [[w, w, w],
          [w, w, w],
          [w, w, w]];
  right = [[r, r, r],
           [r, r, r],
           [r, r, r]];
  left = [[o, o, o],
          [o, o, o],
          [o, o, o]];
  front = [[b, b, b],
           [b, b, b],
           [b, b, b]];
  back = [[g, g, g],
          [g, g, g],
          [g, g, g]];
}

function draw() {
  background(128);
  //up
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      fill(up[j][i]);
      rect((64*i + 192), (64*j), 64, 64);
    }
  }
  //down
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      fill(down[j][i]);
      rect((64*i + 192), (64*j + 384), 64, 64);
    }
  }
  //right
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      fill(right[j][i]);
      rect((64*i + 384), (64*j + 192), 64, 64);
    }
  }
  //left
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      fill(left[j][i]);
      rect((64*i), (64*j + 192), 64, 64);
    }
  }
  //front
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      fill(front[j][i]);
      rect((64*i + 192), (64*j + 192), 64, 64);
    }
  }
  //back
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      fill(back[j][i]);
      rect((64*i + 576), (64*j + 192), 64, 64);
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (input.value() == "U") {
      U();
    } else if (input.value() == "U2") {
      U();
      U();
    } else if (input.value() == "U'") {
      U();
      U();
      U();
    } else if (input.value() == "D") {
      D();
    } else if (input.value() == "D2") {
      D();
      D();
    } else if (input.value() == "D'") {
      D();
      D();
      D();
    } else if (input.value() == "R") {
      R();
    } else if (input.value() == "R2") {
      R();
      R();
    } else if (input.value() == "R'") {
      R();
      R();
      R();
    } else if (input.value() == "L") {
      L();
    } else if (input.value() == "L2") {
      L();
      L();
    } else if (input.value() == "L'") {
      L();
      L();
      L();
    } else if (input.value() == "F") {
      F();
    } else if (input.value() == "F2") {
      F();
      F();
    } else if (input.value() == "F'") {
      F();
      F();
      F();
    } else if (input.value() == "B") {
      B();
    } else if (input.value() == "B2") {
      B();
      B();
    } else if (input.value() == "B'") {
      B();
      B();
      B();
    } else if (input.value() == "M") {
      M();
    } else if (input.value() == "M2") {
      M();
      M();
    } else if (input.value() == "M'") {
      M();
      M();
      M();
    } else if (input.value() == "E") {
      E();
    } else if (input.value() == "E2") {
      E();
      E();
    } else if (input.value() == "E'") {
      E();
      E();
      E();
    } else if (input.value() == "S") {
      S();
    } else if (input.value() == "S2") {
      S();
      S();
    } else if (input.value() == "S'") {
      S();
      S();
      S();
    } else if (input.value() == "X") {
      R();
      M();
      M();
      M();
      L();
      L();
      L();
    } else if (input.value() == "X2") {
      R();
      R();
      M();
      M();
      L();
      L();
    } else if (input.value() == "X'") {
      R();
      R();
      R();
      M();
      L();
    } else if (input.value() == "Y") {
      U();
      E();
      E();
      E();
      D();
      D();
      D();
    } else if (input.value() == "Y2") {
      U();
      U();
      E();
      E();
      D();
      D();
    } else if (input.value() == "Y'") {
      U();
      U();
      U();
      E();
      D();
    } else if (input.value() == "Z") {
      F();
      S();
      B();
      B();
      B();
    } else if (input.value() == "Z2") {
      F();
      F();
      S();
      S();
      B();
      B();
    } else if (input.value() == "Z'") {
      F();
      F();
      F();
      S();
      S();
      S();
      B();
    } else if (input.value() == "u") {
      U();
      E();
      E();
      E();
    } else if (input.value() == "u2") {
      U();
      U();
      E();
      E();
    } else if (input.value() == "u'") {
      U();
      U();
      U();
      E();
    } else if (input.value() == "d") {
      D();
      E();
    } else if (input.value() == "d2") {
      D();
      D();
      E();
      E();
    } else if (input.value() == "d'") {
      D();
      D();
      D();
      E();
      E();
      E();
    } else if (input.value() == "r") {
      R();
      M();
      M();
      M();
    } else if (input.value() == "r2") {
      R();
      R();
      M();
      M();
    } else if (input.value() == "r'") {
      R();
      R();
      R();
      M();
    } else if (input.value() == "l") {
      L();
      M();
    } else if (input.value() == "l2") {
      L();
      L();
      M();
      M();
    } else if (input.value() == "l'") {
      L();
      L();
      L();
      M();
      M();
      M();
    } else if (input.value() == "f") {
      F();
      S();
    } else if (input.value() == "f2") {
      F();
      F();
      S();
      S();
    } else if (input.value() == "f'") {
      F();
      F();
      F();
      S();
      S();
      S();
    } else if (input.value() == "b") {
      B();
      S();
      S();
      S();
    } else if (input.value() == "b2") {
      B();
      B();
      S();
      S();
    } else if (input.value() == "b'") {
      B();
      B();
      B();
      S();
    } else if (input.value() == "scramble") {
      scramble();
    }
  }
}

function scramble() {
  for (var n = 0; n < 20; n++) {
    var rand = int(random(18));
    if (rand == 0) {
      U();
    } else if (rand == 1) {
      U();
      U();
    } else if (rand == 2) {
      U();
      U();
      U();
    } else if (rand == 3) {
      D();
    } else if (rand == 4) {
      D();
      D();
    } else if (rand == 5) {
      D();
      D();
      D();
    } else if (rand == 6) {
      R();
    } else if (rand == 7) {
      R();
      R();
    } else if (rand == 8) {
      R();
      R();
      R();
    } else if (rand == 9) {
      L();
    } else if (rand == 10) {
      L();
      L();
    } else if (rand == 11) {
      L();
      L();
      L();
    } else if (rand == 12) {
      F();
    } else if (rand == 13) {
      F();
      F();
    } else if (rand == 14) {
      F();
      F();
      F();
    } else if (rand == 15) {
      B();
    } else if (rand == 16) {
      B();
      B();
    } else if (rand == 17) {
      B();
      B();
      B();
    }
  }
}

function U() {
  var temp;
  
  temp = front[0][0];
  front[0][0] = right[0][0];
  right[0][0] = back[0][0];
  back[0][0] = left[0][0];
  left[0][0] = temp;
 
  temp = front[0][1];
  front[0][1] = right[0][1];
  right[0][1] = back[0][1];
  back[0][1] = left[0][1];
  left[0][1] = temp;
  
  temp = front[0][2];
  front[0][2] = right[0][2];
  right[0][2] = back[0][2];
  back[0][2] = left[0][2];
  left[0][2] = temp;
  
  temp = up[0][0];
  up[0][0] = up[2][0];
  up[2][0] = up[2][2];
  up[2][2] = up[0][2];
  up[0][2] = temp;
  
  temp = up[0][1];
  up[0][1] = up[1][0];
  up[1][0] = up[2][1];
  up[2][1] = up[1][2];
  up[1][2] = temp;
}

function D() {
  var temp;

  temp = front[2][0];
  front[2][0] = left[2][0];
  left[2][0] = back[2][0];
  back[2][0] = right[2][0];
  right[2][0] = temp;
  
  temp = front[2][1];
  front[2][1] = left[2][1];
  left[2][1] = back[2][1];
  back[2][1] = right[2][1];
  right[2][1] = temp;
  
  temp = front[2][2];
  front[2][2] = left[2][2];
  left[2][2] = back[2][2];
  back[2][2] = right[2][2];
  right[2][2] = temp;
  
  temp = down[0][0];
  down[0][0] = down[2][0];
  down[2][0] = down[2][2];
  down[2][2] = down[0][2];
  down[0][2] = temp;
  
  temp = down[0][1];
  down[0][1] = down[1][0];
  down[1][0] = down[2][1];
  down[2][1] = down[1][2];
  down[1][2] = temp;
}

function R() {
  var temp;
  
  temp = up[0][2];
  up[0][2] = front[0][2];
  front[0][2] = down[0][2];
  down[0][2] = back[2][0];
  back[2][0] = temp;
  
  temp = up[1][2];
  up[1][2] = front[1][2];
  front[1][2] = down[1][2];
  down[1][2] = back[1][0];
  back[1][0] = temp;
  
  temp = up[2][2];
  up[2][2] = front[2][2];
  front[2][2] = down[2][2];
  down[2][2] = back[0][0];
  back[0][0] = temp;
  
  temp = right[0][0];
  right[0][0] = right[2][0];
  right[2][0] = right[2][2];
  right[2][2] = right[0][2];
  right[0][2] = temp;
  
  temp = right[0][1];
  right[0][1] = right[1][0];
  right[1][0] = right[2][1];
  right[2][1] = right[1][2];
  right[1][2] = temp;
}

function L() {
  var temp;
  
  temp = up[0][0];
  up[0][0] = back[2][2];
  back[2][2] = down[0][0];
  down[0][0] = front[0][0];
  front[0][0] = temp;
  
  temp = up[1][0];
  up[1][0] = back[1][2];
  back[1][2] = down[1][0];
  down[1][0] = front[1][0];
  front[1][0] = temp;
  
  temp = up[2][0];
  up[2][0] = back[0][2];
  back[0][2] = down[2][0];
  down[2][0] = front[2][0];
  front[2][0] = temp;
  
  temp = left[0][0];
  left[0][0] = left[2][0];
  left[2][0] = left[2][2];
  left[2][2] = left[0][2];
  left[0][2] = temp;
  
  temp = left[0][1];
  left[0][1] = left[1][0];
  left[1][0] = left[2][1];
  left[2][1] = left[1][2];
  left[1][2] = temp;
}

function F() {
  var temp;
  
  temp = right[0][0];
  right[0][0] = up[2][0];
  up[2][0] = left[2][2];
  left[2][2] = down[0][2];
  down[0][2] = temp;
  
  temp = right[1][0];
  right[1][0] = up[2][1];
  up[2][1] = left[1][2];
  left[1][2] = down[0][1];
  down[0][1] = temp;
  
  temp = right[2][0];
  right[2][0] = up[2][2];
  up[2][2] = left[0][2];
  left[0][2] = down[0][0];
  down[0][0] = temp;
  
  temp = front[0][0];
  front[0][0] = front[2][0];
  front[2][0] = front[2][2];
  front[2][2] = front[0][2];
  front[0][2] = temp;
  
  temp = front[0][1];
  front[0][1] = front[1][0];
  front[1][0] = front[2][1];
  front[2][1] = front[1][2];
  front[1][2] = temp;
}

function B() {
  var temp;
  
  temp = right[0][2];
  right[0][2] = down[2][2];
  down[2][2] = left[2][0];
  left[2][0] = up[0][0];
  up[0][0] = temp;
  
  temp = right[1][2];
  right[1][2] = down[2][1];
  down[2][1] = left[1][0];
  left[1][0] = up[0][1];
  up[0][1] = temp;
  
  temp = right[2][2];
  right[2][2] = down[2][0];
  down[2][0] = left[0][0];
  left[0][0] = up[0][2];
  up[0][2] = temp;
  
  temp = back[0][0];
  back[0][0] = back[2][0];
  back[2][0] = back[2][2];
  back[2][2] = back[0][2];
  back[0][2] = temp;
  
  temp = back[0][1];
  back[0][1] = back[1][0];
  back[1][0] = back[2][1];
  back[2][1] = back[1][2];
  back[1][2] = temp;
}

function M() {
  var temp;
  
  temp = up[0][1];
  up[0][1] = back[2][1];
  back[2][1] = down[0][1];
  down[0][1] = front[0][1];
  front[0][1] = temp;
  
  temp = up[1][1];
  up[1][1] = back[1][1];
  back[1][1] = down[1][1];
  down[1][1] = front[1][1];
  front[1][1] = temp;
  
  temp = up[2][1];
  up[2][1] = back[0][1];
  back[0][1] = down[2][1];
  down[2][1] = front[2][1];
  front[2][1] = temp;
}

function E() {
  var temp;
  
  temp = front[1][0];
  front[1][0] = left[1][0];
  left[1][0] = back[1][0];
  back[1][0] = right[1][0];
  right[1][0] = temp;
  
  temp = front[1][1];
  front[1][1] = left[1][1];
  left[1][1] = back[1][1];
  back[1][1] = right[1][1];
  right[1][1] = temp;
  
  temp = front[1][2];
  front[1][2] = left[1][2];
  left[1][2] = back[1][2];
  back[1][2] = right[1][2];
  right[1][2] = temp;
}

function S() {
  var temp;
  
  temp = right[0][1];
  right[0][1] = up[1][0];
  up[1][0] = left[2][1];
  left[2][1] = down[1][2];
  down[1][2] = temp;
  
  temp = right[1][1];
  right[1][1] = up[1][1];
  up[1][1] = left[1][1];
  left[1][1] = down[1][1];
  down[1][1] = temp;
  
  temp = right[2][1];
  right[2][1] = up[1][2];
  up[1][2] = left[0][1];
  left[0][1] = down[1][0];
  down[1][0] = temp;
}
