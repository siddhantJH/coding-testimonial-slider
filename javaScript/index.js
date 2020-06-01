const track=document.querySelector(".Testimonial-1");
const slides=Array.from(track.children);
const nextB=document.querySelector(".next");
const prevB=document.querySelector(".prev");
const slideSize=document.querySelector(".row").getBoundingClientRect();
const slideWidth=slideSize.width;
console.log(slideWidth);
slides[0].style.left=slideWidth*0+"px";
slides[1].style.left=slideWidth*1+"px";



nextB.addEventListener("click",function(){
const currentSlide=document.querySelector(".current-slide");
const nextSlide=currentSlide.nextElementSibling;
const amt=nextSlide.style.left;
track.style.transform="translateX(-"+amt+")";
currentSlide.classList.remove("current-slide");
nextSlide.classList.add("current-slide");
});

prevB.addEventListener("click",function(){
  const currentSlide=document.querySelector(".current-slide");
  const prevSlide=currentSlide.previousElementSibling;
  const amt=prevSlide.style.left;
  track.style.transform="translateX("+amt+")";
  currentSlide.classList.remove("current-slide");
  prevSlide.classList.add("current-slide");
});
