// select the up button
const upBtn = document.querySelector(".totop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    upBtn.classList.add("active");
  } else {
    upBtn.classList.remove("active");
  }
});

// menu burger

const menuElement = document.getElementById("menu");
const crossElement = document.getElementById("cross");
const navItems = document.getElementById("nav");

menuElement.addEventListener("click", () => {
  console.log(menuElement);

  crossElement.classList.remove("hidden");
  menuElement.classList.add("hidden");
  navItems.classList.remove("hidden");
});

crossElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  crossElement.classList.add("hidden");
  navItems.classList.add("hidden");
});

const homeElement = document.getElementById("home");

homeElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  crossElement.classList.add("hidden");
  navItems.classList.add("hidden");
});

const aboutElement = document.getElementById("about");

aboutElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  crossElement.classList.add("hidden");
  navItems.classList.add("hidden");
});

const skillsElement = document.getElementById("skills");

skillsElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  crossElement.classList.add("hidden");
  navItems.classList.add("hidden");
});

const projectsElement = document.getElementById("projects");

projectsElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  crossElement.classList.add("hidden");
  navItems.classList.add("hidden");
});

const contactElement = document.getElementById("contact");

contactElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  crossElement.classList.add("hidden");
  navItems.classList.add("hidden");
});

// store data 
const formElement = document.getElementById("form");
const nameElement = document.getElementById("name");
const emailId = document.getElementById("email");
const messageElement = document.getElementById("message");
const result = document.getElementById('result');

formElement.addEventListener("submit", (e) => {
   e.preventDefault();

   const formData = new FormData(formElement);
   const object = Object.fromEntries(formData);
   const json = JSON.stringify(object);
   result.innerHTML = "Please wait..."
 
     fetch('https://api.web3forms.com/submit', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: json
         })
         .then(async (response) => {
             let json = await response.json();
             if (response.status >= 200) {
                 result.innerHTML = "Send successfully";
             } else {
                 console.log(response);
                 result.innerHTML = json.message;
             }
         })
         .catch(error => {
             console.log(error);
             result.innerHTML = "Not Send!";
         })
         .then(function() {
            formElement.reset();
             setTimeout(() => {
                 result.innerHTML = "Send Message";
             }, 3000);
         });
 });
    


