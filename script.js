// //gsap to animate the website.

// gsap.from("#navbar", {
//     stagger: .1,
//     y: -50,
//     duration: 1,
//     ease: Expo,
//     opacity: 0
// })

// gsap.from("#heading", {
//     stagger: .5,
//     x: -100,
//     duration: 1,
//     ease: Expo,
//     opacity: 0,
//     delay: 0.3,
// })

// gsap.from("#homeimg", {
//     stagger: .5,
//     x: -100,
//     duration: 1,
//     ease: Expo,
//     opacity: 0
// })

// gsap.from("#howitwork", {
//     scrollTrigger: {
//         trigger: "#howitwork",
//         scroller: "body",
//     },
//     x: 200,
//     stagger: .2,
//     opacity: 0,
//     ease: Expo,
//     duration: 1,
//     makers:true,
// })

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  scrollFromAnywhere: true,
  lerp: 0.1,
  multiplier: 0.5,
  getDirection: true,
  reloadOnContextChange: true,
});


// $(function() {
//   $(".heart").on("click", function() {
//     $(this).toggleClass("is-active");
//   });
// });

function myfunction() {
  document.getElementsByClassName("heart").style.BackgroundColor="red"
}

windows.onclick = myfunction();