let projectID = param.get("projectid");

// fixed bar variavles
const fixedBack = document.querySelector(".header-back");
const nav = document.querySelector(".project-container #menu");
const logo = document.querySelector("#moveheader");
const aNav = document.querySelectorAll(".atag");
const jmoLogo = document.querySelectorAll(".jmologo");
const navATag = document.querySelectorAll("nav a");
// console.log(navATag);

//svg icons variables
const a = document.querySelectorAll(".a");
const b = document.querySelectorAll(".b");
const e = document.querySelectorAll(".e");
const c = document.querySelectorAll(".c");

//function window event listner when load page funtion init
window.addEventListener("DOMContentLoaded", init);

function init() {
  getOneProject(projectID);
}

function getOneProject(projectID) {
  fetch(baseLink + "/" + projectID, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c9667bddf5d634f46ecae24",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(displayOneProject);
}

function displayOneProject(data) {
  // console.log(data);
  const copy = document.querySelector(".main-temp").content.cloneNode(true);

  copy.querySelector(".project-photo").src =
    "https://restju-f026.restdb.io/media/" +
    data.image +
    "?key=5c9667bddf5d634f46ecae24";

  copy.querySelector("h2").textContent = data.title;
  copy.querySelector("h4").textContent = data.year;
  copy.querySelector("h3").textContent = data.place;
  copy.querySelector(".text-project p").textContent = data.description;
  copy.querySelector(".role-detail p").textContent = data.role;

  // console.log(data.gallery);
  const imageList = copy.querySelectorAll(".galery-container img");
  if (data.gallery.length == 0) {
    copy.querySelector(".galery-container").innerHTML = data.report;
    // copy.querySelector(".galery-container img").classList.add("hide");
  } else {
    // console.log(imageList);
    imageList.forEach((element, i) => {
      // console.log(element, i);
      element.src =
        "https://restju-f026.restdb.io/media/" +
        data.gallery[i] +
        "?key=5c9667bddf5d634f46ecae24";
      console.log(element.parentElement);
      if (
        element.src ===
        "https://restju-f026.restdb.io/media/undefined?key=5c9667bddf5d634f46ecae24"
      ) {
        element.parentElement.style.display = "none";
      }
    });
  }

  if (data.link === "") {
    copy.querySelector(".link").classList.add("hide");
  } else {
    copy.querySelector(".link a").href = data.link;
  }

  document.querySelector("#each-project").appendChild(copy);

  const projSwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    initialSlide: 0,
    spaceBetween: 30,
    allowTouchMove: true,
    //pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
