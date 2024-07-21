const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const services = [
  {
    title: "Administrative",
    icon: "adm.png",
  },
  {
    title: "Labor and Social Security",
    icon: "administrativo.png",
  },
  {
    title: "Banking",
    icon: "bancario.png",
  },
  {
    title: "Consumer",
    icon: "consumo.png",
  },
  {
    title: "Enterprise",
    icon: "trabalhista.png",
  },
  {
    title: "Tributary",
    icon: "tributario.png",
  },
  {
    title: "Patents",
    icon: "marcaspatentes.png",
  },
  {
    title: "Health",
    icon: "saude.png",
  },
];
const createService = (services) => {
  const grid = document.querySelector(".services");
  grid.innerHTML = "";

  services.forEach((service) => {
    let serviceDiv = document.createElement("div");
    serviceDiv.className = "service";

    let serviceImage = document.createElement("img");
    serviceImage.src = `../images/${service.icon}`;
    serviceImage.alt = `${service.title} icon`;
    serviceImage.loading = "lazy";
    serviceDiv.appendChild(serviceImage);

    let title = document.createElement("p");
    title.textContent = `${service.title}`;
    serviceDiv.appendChild(title);

    grid.appendChild(serviceDiv);
  });
};
const today = new Date();
const currentYear = document.querySelector("#currentyear");

currentYear.innerHTML = today.getFullYear();
createService(services);
