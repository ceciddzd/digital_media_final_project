let cover, scene1, no0, scene2, yes, yes1, no;
let scene3, scene4, scene5, scene6, scene7;
let sound;

let state = "cover";
let canClick = true;


function preload() {

  sound = loadSound("assets/sound.mp3");

}


function setup() {

  createCanvas(windowWidth, windowHeight);

  userStartAudio();

  noCursor();
  cursor("assets/cursor.png",64,47);


  cover = createVideo("assets/cover.mp4");
  scene1 = createVideo("assets/scene1.mp4");
  no0 = createVideo("assets/no0.mp4");

  scene2 = createVideo("assets/scene2.mp4");
  yes = createVideo("assets/yes.mp4");
  yes1 = createVideo("assets/yes1.mp4");
  no = createVideo("assets/no.mp4");

  scene3 = createVideo("assets/scene3.mp4");
  scene4 = createVideo("assets/scene4.mp4");
  scene5 = createVideo("assets/scene5.mp4");
  scene6 = createVideo("assets/scene6.mp4");
  scene7 = createVideo("assets/scene7.mp4");


  let all = [
    cover, scene1, no0,
    scene2, yes, yes1, no,
    scene3, scene4, scene5, scene6, scene7
  ];

  for (let v of all) {

    v.hide();
    v.volume(1);

  }


  cover.volume(0);
  cover.hide();
  cover.loop();


  sound.setVolume(0.4);
  sound.loop();

}


function draw() {

  if (cover.width > 0) {
    drawVideo(cover);
}

  if (state === "cover")
    drawVideo(cover);

  else if (state === "scene1")
    drawVideo(scene1);

  else if (state === "no0_wait")
    drawVideo(no0);

  else if (state === "scene2")
    drawVideo(scene2);

  else if (state === "yes_wait")
    drawVideo(yes);

  else if (state === "yes1_wait")
    drawVideo(yes);

  else if (state === "no_wait")
    drawVideo(no);

  else if (state === "scene3")
    drawVideo(scene3);

  else if (state === "scene4")
    drawVideo(scene4);

  else if (state === "scene5")
    drawVideo(scene5);

  else if (state === "scene6")
    drawVideo(scene6);

  else if (state === "scene7")
    drawVideo(scene7);

}


function mousePressed() {

  if (!canClick) return;

  if (!sound.isPlaying()) {
    sound.setVolume(0.4);
    sound.loop();
  }

  if (state === "cover") {

    if (
      mouseX > width * 0.27 &&
      mouseX < width * 0.80 &&
      mouseY > height * 0.47 &&
      mouseY < height * 0.58
    ) {

      cover.stop();

      scene1.time(0);
      scene1.play();

      state = "scene1";
    }
  }

  else if (state === "scene1") {

    if (
      mouseX > width * 0.25 &&
      mouseX < width * 0.78 &&
      mouseY > height * 0.33 &&
      mouseY < height * 0.47
    ) {

      scene1.stop();

      scene2.time(0);
      scene2.play();

      state = "scene2";

    }

    else if (
      mouseX > width * 0.25 &&
      mouseX < width * 0.78 &&
      mouseY > height * 0.53 &&
      mouseY < height * 0.66
    ) {

      scene1.stop();

      no0.time(0);
      no0.play();

      state = "no0_wait";

    }
  }

  else if (state === "no0_wait") {

    no0.stop();

    scene2.time(0);
    scene2.play();

    state = "scene2";
  }

  else if (state === "scene2") {

    if (
      mouseX > width * 0.25 &&
      mouseX < width * 0.78 &&
      mouseY > height * 0.33 &&
      mouseY < height * 0.47
    ) {

      scene2.stop();

      yes.time(0);
      yes.play();

      state = "yes_wait";

    }

    else if (
      mouseX > width * 0.25 &&
      mouseX < width * 0.78 &&
      mouseY > height * 0.53 &&
      mouseY < height * 0.66
    ) {

      scene2.stop();

      no.time(0);
      no.play();

      state = "no_wait";

    }
  }

  else if (state === "yes_wait") {

    canClick = false;

    yes.stop();

    yes1.time(0);
    yes1.play();

    state = "yes1_wait";

    setTimeout(() => canClick = true, 300);
  }

  else if (state === "yes1_wait") {

    yes1.stop();

    scene3.time(0);
    scene3.play();

    state = "scene3";
  }

  else if (state === "no_wait") {

    no.stop();

    scene3.time(0);
    scene3.play();

    state = "scene3";
  }

  else if (state === "scene3") {

    scene3.stop();

    scene4.time(0);
    scene4.play();

    state = "scene4";
  }

  else if (state === "scene4") {

    scene4.stop();

    scene5.time(0);
    scene5.play();

    state = "scene5";
  }

  else if (state === "scene5") {

    scene5.stop();

    scene6.time(0);
    scene6.play();

    state = "scene6";
  }

  else if (state === "scene6") {

    scene6.stop();

    scene7.time(0);
    scene7.play();

    state = "scene7";
  }
}

function drawVideo(v) {

  let vw = v.width;
  let vh = v.height;

  let scale = max(width / vw, height / vh);

  let w = vw * scale;
  let h = vh * scale;

  image(v, (width - w) / 2, (height - h) / 2, w, h);
}