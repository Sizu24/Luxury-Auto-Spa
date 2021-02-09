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


// fade in main title an button. Set opacity of both to 0 in css
$(".title").animate({"opacity": "1"}, 3500);
$("#service-button").animate({"opacity": "1"}, 3000);