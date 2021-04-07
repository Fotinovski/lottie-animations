var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    // path: 'https://assets7.lottiefiles.com/packages/lf20_qievcjy1.json',
    path: 'https://assets2.lottiefiles.com/packages/lf20_A44snG.json',
  })

  const btn = document.querySelector('.click')
var state = 'play';

  btn.addEventListener('click', ()=>{
    animation.goToAndPlay(60, true)
    // bm.addEventListener('click', () => {
    //   if(state === 'play') {
        
    //    animation.playSegments([124, 0], true);
    //     state = 'pause';
    //   } else {
    //     animation.playSegments([0, 124], true);
    //     state = 'play';
    //   }
    // });
  } )
  


  // bm.addEventListener("mouseenter", function() {
  //   animation.play();
  // });
  // bm.addEventListener("mouseleave", function() {
  //   animation.pause();
  // });
/************ */
  var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('bm1'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/temp/lf20_NAo5fW.json',
  })

  const btn1 = document.querySelector('.click1')

  btn1.addEventListener('click', ()=>{
    animation1.goToAndPlay(0, true)
    // animation.pause(0, true)
  } )
  /************ */

  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_y04evezl.json',
  })

  const btn2 = document.querySelector('.click2')
  

  btn2.addEventListener('click', ()=>{
    animation2.goToAndPlay(14, true)
   
  } )
  /************ */
  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('bm3'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_ZKUJ2j.json',
  })

  const btn3 = document.querySelector('.click3')
  

  btn3.addEventListener('click', ()=>{
    animation3.goToAndPlay([14,30], true)
   
  } )

  /************ */
  var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('bm4'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_WILIKk.json',
  })

  const btn4 = document.querySelector('.click4')
  

  btn4.addEventListener('click', ()=>{
    animation4.goToAndPlay(14, true)
   
  } )

  /************/

  var anim = bodymovin.loadAnimation({
    container: document.getElementById('s1'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets5.lottiefiles.com/packages/lf20_rxt8zwo2.json',
  })