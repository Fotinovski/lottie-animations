var animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  // path: 'https://assets7.lottiefiles.com/packages/lf20_qievcjy1.json',
  path: "./animations/home.json",
});

const btn = document.querySelector(".click");
var state = "play";

btn.addEventListener("click", () => {
  animation.setSpeed(.7)
  animation.goToAndPlay(0, true);

  addEventListener("click", () => {
    //   if(state === 'play') {
    //    animation.playSegments([124, 0], true);
    //     state = 'pause';
    //   } else {
    //     animation.playSegments([0, 124], true);
    //     state = 'play';
    //   }
    // });
  });
});

// bm.
// bm.addEventListener("mouseenter", function() {
//   animation.play();
// });
// bm.addEventListener("mouseleave", function() {
//   animation.pause();
// });
/************ */
var animation1 = bodymovin.loadAnimation({
  container: document.getElementById("bm1"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: './animations/calendar.json',
});

const btn1 = document.querySelector(".click1");

btn1.addEventListener("click", () => {
  animation1.setSpeed(.7)
  animation1.goToAndPlay(0, true);
  // animation.pause(0, true)
});
/************ */

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById("bm2"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets2.lottiefiles.com/packages/lf20_y04evezl.json",
});

const btn2 = document.querySelector(".click2");

btn2.addEventListener("click", () => {
  animation2.goToAndPlay(0, true);
});
/************ */
var animation3 = bodymovin.loadAnimation({
  container: document.getElementById("bm3"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  // path:
  //   "https://assets7.lottiefiles.com/datafiles/DYSJrjDDW4wj0wwvpnnOgcH9WvBwfDnIZh39QjOq/Love/data.json",
  path:'./animations/settings.json'
});

const btn3 = document.querySelector(".click3");

btn3.addEventListener("click", () => {
  animation3.setSpeed(.7)
  animation3.goToAndPlay(0, true);
});

/************ */
var animation4 = bodymovin.loadAnimation({
  container: document.getElementById("bm4"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  // path: "https://assets3.lottiefiles.com/packages/lf20_WILIKk.json",
  path: "./animations/share-icon.json",
});

const btn4 = document.querySelector(".click4");

btn4.addEventListener("click", () => {
  animation4.setSpeed(.7)
  animation4.goToAndPlay(0, true);
});

/************/
// var logo = bodymovin.loadAnimation({
//   container: document.getElementById("logo"),
//   renderer: "svg",
//   loop: false,
//   autoplay: true,
//   path: "./animations/lottie.json",
// });

// var flamingo = bodymovin.loadAnimation({
//   container: document.getElementById("s1"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "./animations/flamingo.json",
// });
// const s1 = document.querySelector(".s1");
// s1.addEventListener("mouseenter", () => {
//   flamingo.setSpeed(0.3);
// });
// s1.addEventListener("mouseleave", () => {
//   flamingo.setSpeed(1);
// });

// var bubble = bodymovin.loadAnimation({
//   container: document.getElementById("s-bg"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "./animations/bubble-bg.json",
// });

/*HOVER*/
/*0*/
btn.addEventListener("mouseenter", () => {
  animation.setDirection(1);
  // animation4.play();
  animation.goToAndPlay(0, true);
  animation.setSpeed(1);
});
// btn.addEventListener("mouseleave", () => {
//   animation.setDirection(-1);
//   animation.play();
//   animation.setSpeed(1);
// });
/*1*/
btn1.addEventListener("mouseenter", () => {
  animation1.setDirection(1);
  // animation4.play();
  animation1.goToAndPlay(0, true);
  animation1.setSpeed(2);
});
// btn1.addEventListener("mouseleave", () => {
//   animation1.setDirection(-1);
//   animation1.play();
//   animation1.setSpeed(1);
// });
/*2*/
btn2.addEventListener("mouseenter", () => {
  animation2.setDirection(1);
  // animation4.play();
  animation2.goToAndPlay(0, true);
  animation2.setSpeed(2);
});
// btn2.addEventListener("mouseleave", () => {
//   animation2.setDirection(-1);
//   animation2.play();
//   animation2.setSpeed(1);
// });
/*3*/
btn3.addEventListener("mouseenter", () => {
  animation3.setDirection(1);
  // animation4.play();
  animation3.goToAndPlay(0, true);
  animation3.setSpeed(2);
});
// btn3.addEventListener("mouseleave", () => {
//   animation3.setDirection(-1);
//   animation3.play();
//   animation3.setSpeed(1);
// });
/*3*/
btn4.addEventListener("mouseenter", () => {
  animation4.setDirection(1);
  // animation4.play();
  animation4.goToAndPlay(0, true);
  animation4.setSpeed(1);
});
// btn4.addEventListener("mouseleave", () => {
//   animation4.setDirection(-1);
//   animation4.play();
//   animation4.setSpeed(1);
// });
