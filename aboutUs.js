//Scroll animation for awards text
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=> observer.observe(el))


//Scroll animation for michelin star image
const observerStar = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showStarPic');
        }
        else{
            entry.target.classList.remove('showStarPic')
        }
    })
})
const hiddenStar = document.querySelectorAll(".hiddenStarPic")
hiddenStar.forEach((el)=> observerStar.observe(el))

//Scroll animation for Best of Phoenix image
const observerBest = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showBestPic');
        }
        else{
            entry.target.classList.remove('showBestPic')
        }
    })
})
const hiddenBest = document.querySelectorAll(".hiddenBestPic")
hiddenBest.forEach((el)=> observerBest.observe(el))


//Timeline Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}