

// select the up button

const upBtn = document.getElementById("upbtn")

 upBtn.addEventListener("click", ()=>{

})



// menu burger

const menuElement = document.getElementById("menu") 
const crossElement = document.getElementById("cross");
const navItems = document.getElementById("nav")

 menuElement.addEventListener("click", ()=>{
    crossElement.classList.remove("hidden")
    menuElement.classList.add("hidden")
    navItems.classList.remove("hidden")
 });

 crossElement.addEventListener("click", ()=>{
    menuElement.classList.remove("hidden")
    crossElement.classList.add("hidden")
    navItems.classList.add("hidden")
 })

const homeElement = document.getElementById("home")

homeElement.addEventListener("click",()=>{
    menuElement.classList.remove("hidden")
    crossElement.classList.add("hidden")
    navItems.classList.add("hidden")
})

const aboutElement = document.getElementById("about")

aboutElement.addEventListener("click",()=>{
    menuElement.classList.remove("hidden")
    crossElement.classList.add("hidden")
    navItems.classList.add("hidden")
})

const skillsElement = document.getElementById("skills")

skillsElement.addEventListener("click",()=>{
    menuElement.classList.remove("hidden")
    crossElement.classList.add("hidden")
    navItems.classList.add("hidden")
})

const projectsElement = document.getElementById("projects")

projectsElement.addEventListener("click",()=>{
    menuElement.classList.remove("hidden")
    crossElement.classList.add("hidden")
    navItems.classList.add("hidden")
})

const contactElement = document.getElementById("contact")

contactElement.addEventListener("click",()=>{
    menuElement.classList.remove("hidden")
    crossElement.classList.add("hidden")
    navItems.classList.add("hidden")
})