let btn = document.querySelector('.menu')
let closeBtn = document.querySelector('.close')
let nav = document.querySelector('.nav')
let newNav=  document.querySelector('.new-nav')

btn.addEventListener("click",()=>{

    nav.classList.toggle('active')
    closeBtn.classList.toggle('active')
})

closeBtn.addEventListener("click",()=>{
    
    nav.classList.remove('active')
    newNav.classList.remove("active")
    closeBtn.classList.toggle('active')

})