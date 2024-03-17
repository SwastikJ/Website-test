const parallax_el = document.querySelectorAll(".parallax");
const easeFunction = "cubic-bezier(.67,.64,1,.03)";
const notbg = document.querySelectorAll(".notbg");
const nav = document.querySelectorAll(".nav");
const whatsappFront = document.querySelector('.whatsappfront');

let xValue = 0, yValue = 0;
let rotateDegree = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2 ;
  yValue = e.clientY - window.innerHeight / 2 ;

  rotateDegree = xValue / (window.innerWidth / 2) * 20;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isinleft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1; 
    let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isinleft * 0.1;
 

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2000px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
  })
});


// whatsappFront.addEventListener('mouseover', () => {
//   whatsappFront.style.opacity = 0;
//   whatsappFront.style.transition = 'opacity 0.5s ease-in-out'
// });


// whatsappFront.addEventListener('mouseout', () => {
//   whatsappFront.style.opacity = 1;
//   whatsappFront.style.transition = 'opacity 0.5s ease-in-out'
// });

let timeline = gsap.timeline();

notbg.forEach((el) => {
  timeline.from(el, {
    top: `${el.offsetHeight / 2 }px`,
    opacity: 0,
    ease: easeFunction,
    duration: 0.6
  }, "0.6")
})

nav.forEach((el) => {
  timeline.from(el, {
    opacity: 0,
    ease: "power4.easeOut",
    duration: 0.7
  }, "1")
})
