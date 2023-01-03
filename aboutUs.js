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