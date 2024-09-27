

// select the up button
const upBtn = document.querySelector(".totop")

window.addEventListener("scroll",()=>{

    if(window.pageYOffset > 200){
        upBtn.classList.add("active")
    }else{
        upBtn.classList.remove("active")
    }

})



// menu burger

const menuElement = document.getElementById("menu") 
const crossElement = document.getElementById("cross");
const navItems = document.getElementById("nav")

 menuElement.addEventListener("click", ()=>{
    console.log(menuElement)

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

// store data in database
const formElement= document.getElementById("form");
const nameElement= document.getElementById("name")
const emailId= document.getElementById("email")
const messageElement= document.getElementById("message")

function savadata(username,emailid,msg) {

    // Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAnG8eyOY9Qoxk0CbrvdK8u-9IlnRsAFDM",
    authDomain: "my-protfolio-web.firebaseapp.com",
    databaseURL: "https://my-protfolio-web-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-protfolio-web",
    storageBucket: "my-protfolio-web.appspot.com",
    messagingSenderId: "437578699556",
    appId: "1:437578699556:web:7fb5996ea4e4f45414d9b1"
};

    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
  
    const db = firebase.database().ref("Contact");

    db.push({
      name: username,
      email: emailid,
      message: msg
    }).then(()=>{
        formElement.reset()
    })
}

formElement.addEventListener("submit",(e)=>{
   e.preventDefault();

    const username = nameElement.value;
    const emailid= emailId.value;
    const msg = messageElement.value
   savadata(username,emailid,msg)
})