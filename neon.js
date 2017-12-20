TweenMax.to(".blink", 6, {
  color: "#fff",
  textShadow:"0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49daf2, 0 0 35px #49daf2, 0 0 40px #49daf2, 0 0 50px #49daf2, 0 0 75px #49daf2",
  ease: RoughEase.ease.config({ template:  Elastic.easeOut, strength: 2, points: 100, taper: "none", randomize: true, clamp: false}), y: -500,
  repeat: -1
});