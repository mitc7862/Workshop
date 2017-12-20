var tl = new TimelineMax({repeat: -1, repeatDelay: 1});


tl.to('#rotate', 3, {
  transformOrigin: 'center',
  rotation: 180,
  ease: Sine.easeInOut
},);


tl.add('burst', 3);


tl.fromTo('.burstGroup', .2, {
  transformOrigin: 'center',
  scale: 0,
}, {
  scale: 1,
}, 'burst');


tl.to('.burstGroup', .2, {
  autoAlpha: 0
}, '-=0.1');


tl.fromTo('.grow', .5, {
  transformOrigin: 'center',
  scale: .731,
  autoAlpha: 0
}, {
  transformOrigin: 'center',
  strokeWidth: .5,
  scale: 1,
  autoAlpha: 1,
  ease: Power4.easeOut
}, 1.5);


tl.to('.grow', .2, {
  autoAlpha: 0
}, '-=0.2');


TweenMax.to('line', 1.5, {
  strokeDasharray: '10, 6, 25, 10',
  strokeDashoffset:62.84,
  ease: Elastic.easeInOut.config(1, 0.3),
  repeat: -1,
  yoyo: true
  
})