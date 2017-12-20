TweenMax.staggerFromTo( 'line', 10, {
  rotation: 33,
  ease: Power0.easeNone,
}, {
  rotation: 393,
  ease: Power0.easeNone,
  repeat: -1,
}, .02 );

TweenMax.staggerFromTo( 'line', 5, {
  scaleY: .5,
}, {
  scaleY: 1,
  stroke: '#49DAF2',
  ease: Power0.easeNone,
  repeat: -1,
  yoyo: true,
}, .02 );