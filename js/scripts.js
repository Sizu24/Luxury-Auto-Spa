const hamburger = document.querySelector(".js-burger");
const navLinks = document.querySelector(".js-nav");
const miniLogo = document.querySelector(".js-logo");

const services = {
    service: "We detail any range of cars, trucks, SUVs, vans, luxury, and exotic vehicles.",
    exterior: "Exterior hand-wash, window cleaning, wheels and tires, wax, polish.",
    interior: "Interior vacuume, window cleaning, wheels and tires, wax, polish.",
    engine: "Engine wash, shine, cleaning."
};

const serviceDescription = document.querySelector(".service-description");
const exteriorDescription = document.querySelector(".exterior-description");
const interiorDescription = document.querySelector(".interior-description");
const engineDescription = document.querySelector(".engine-description");

serviceDescription.innerHTML = services.service;
exteriorDescription.innerHTML = services.exterior;
interiorDescription.innerHTML = services.interior;
engineDescription.innerHTML = services.engine;


/*
    * Show nav links when clicking on hamburger
    * Add ".active" class to nav links for styling
    * Remove mini logo when displaying nav links
*/
hamburger.addEventListener("click", ()=>{
    if(navLinks.style.display === "" || navLinks.style.display === "none"){
        navLinks.classList.add("active");
        navLinks.style.display = "block";
        miniLogo.style.display = "none";
    }else{
        navLinks.classList.remove("active");
        navLinks.style.display = "none";
        miniLogo.style.display = "block";
    }
});



// fade in main title an button. Set opacity of both to 0 in css
$(".title").animate({"opacity": "1"}, 3500);
$("#service-button").animate({"opacity": "1"}, 3000);