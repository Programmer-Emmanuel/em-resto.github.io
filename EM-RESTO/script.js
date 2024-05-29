let menu = document.getElementById("menu")
let close = document.getElementById("close")

let responsive = document.querySelector(".responsive")




menu.addEventListener("click", ()=>{
    close.style.display="block"
    menu.style.display="none"
    responsive.style.display="block"
})

close.addEventListener("click", ()=>{
    menu.style.display="block"
    close.style.display="none"
    responsive.style.display="none"
})



//pour l'animation au chargement de la barre de navigation
document.addEventListener("DOMContentLoaded", ()=>{
    let navigation = document.querySelector("nav")
    navigation.classList.add("navigue")
})

document.addEventListener("DOMContentLoaded", ()=>{
    let slogan_h = document.getElementById("slogan_h")
    let slogan_p = document.getElementById("slogan_p")
    slogan_h.classList.add("h_droite")
    slogan_p.classList.add("p_left")
})

window.addEventListener("scroll", ()=>{
    if(scrollY>=80){
        let carte = document.querySelector(".cartesPlats")
        carte.classList.add("scroller")
        
    }
    if(scrollY>=100){
        let plats = document.getElementById("plats")
        plats.classList.add("plat")
    }
    if(scrollY>=950){
        let chef1 = document.querySelector(".chef1")
        chef1.classList.add("chef");

    }
    if(scrollY>=1450){
        let chef2 = document.querySelector(".chef2")
        chef2.classList.add("chief2");
    }
    if(scrollY>=3040){
        let nous = document.getElementById("nous")
        nous.classList.add("vous")
    }

})


let etoile1 = document.getElementById("etoile1")
let etoile2 = document.getElementById("etoile2")
let etoile3 = document.getElementById("etoile3")
let etoile4 = document.getElementById("etoile4")
let etoile5 = document.getElementById("etoile5")


etoile1.addEventListener("click", ()=>{
    etoile1.src="star.png"
})
etoile2.addEventListener("click", ()=>{
    etoile1.src="star.png"
    etoile2.src="star.png"
})
etoile3.addEventListener("click", ()=>{
    etoile1.src="star.png"
    etoile2.src="star.png"
    etoile3.src="star.png"
})
etoile4.addEventListener("click", ()=>{
    etoile1.src="star.png"
    etoile2.src="star.png"
    etoile3.src="star.png"
    etoile4.src="star.png"
})
etoile5.addEventListener("click", ()=>{
    etoile1.src="star.png"
    etoile2.src="star.png"
    etoile3.src="star.png"
    etoile4.src="star.png"
    etoile5.src="star.png"
})


let boutton = document.getElementById("boutton")
let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")

boutton.addEventListener("click", ()=>{
    etoile1.src="star (1).png"
    etoile2.src="star (1).png"
    etoile3.src="star (1).png"
    etoile4.src="star (1).png"
    etoile5.src="star (1).png"
    nom.value = ""
    prenom.value = ""
})


let year = new Date()
let annees = year.getFullYear()

let annee = document.getElementById("annee")
annee.innerHTML = annees
