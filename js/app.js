new fullpage("#Artish", {
  autoScrolling: true,
  navigation: false,
});
new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
});

anime
  .timeline({ loop: true })
  .add({
    targets: ".doodle-container .doodlefont",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i,
  })
  .add({
    targets: ".doodle-container",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
