let projectID = param.get("projectid");

// fixed bar variavles
const fixedBack = document.querySelector(".header-back");
const nav = document.querySelector("#menu");
const logo = document.querySelector("#moveheader");
const aNav = document.querySelectorAll(".atag");
const jmoLogo = document.querySelectorAll(".jmologo");
const navATag = document.querySelectorAll("nav a");
console.log(navATag);

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
  console.log(data);
  const copy = document.querySelector("template").content.cloneNode(true);

  copy.querySelector(".project-photo").src =
    "https://restju-f026.restdb.io/media/" +
    data.image +
    "?key=5c9667bddf5d634f46ecae24";

  copy.querySelector("h2").textContent = data.title;
  copy.querySelector("h4").textContent = data.year;
  copy.querySelector("h3").textContent = data.place;
  copy.querySelector(".text-project p").textContent = data.description;
  copy.querySelector(".role-detail p").textContent = data.role;

  console.log(data.gallery.length);

  if (data.gallery.length == 0) {
    copy.querySelector(".galery-container").innerHTML = data.report;
    // copy.querySelector(".galery-container img").classList.add("hide");
  } else {
    copy.querySelector(".galery-container img").src =
      "https://restju-f026.restdb.io/media/" +
      data.gallery +
      "?key=5c9667bddf5d634f46ecae24";
  }

  console.log();
  copy.querySelector(".link a").href = data.link;

  document.querySelector("#each-project").appendChild(copy);
}

//Event fixed bar appear in desktop
window.addEventListener("resize", sizheader);
sizheader();
function sizheader() {
  if (window.matchMedia("(max-width: 700px)").matches) {
  } else {
    window.addEventListener("scroll", headerFixed);
  }
}

function headerFixed() {
  //if Statment if page scroll 100
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    //fixed bar apppears
    fixedBack.style.top = "0%";
    fixedBack.style.opacity = 0.7;

    //logo turns white
    jmoLogo.forEach(l => l.classList.add("colorWhite"));

    //nav span turns white
    aNav.forEach(aName => aName.classList.add("tagColorWhite"));

    //svg logo turns white
    e.forEach(e => e.classList.add("colorWhite"));
    a.forEach(a => a.classList.add("colorWhite"));
    b.forEach(b => b.classList.add("colorWhite"));
    b.forEach(b => b.classList.add("strokeWhite"));
    c.forEach(c => c.classList.add("strokeWhite"));
    e.forEach(e => e.classList.add("strokeWhite"));

    //animte classes to fix logo and nav
    document.querySelector("[data-animeH=fixedlogo]").classList.add("animateH");
    document.querySelector("[data-animeH=fixednav]").classList.add("animateN");
    nav.style.position = "fixed";
  } else {
    //fixed bar goes back to top
    fixedBack.style.top = "-100%";

    //remove animate classes to fix the logo and nav
    document
      .querySelector("[data-animeH=fixedlogo]")
      .classList.remove("animateH");
    document
      .querySelector("[data-animeH=fixednav]")
      .classList.remove("animateN");
    nav.style.position = "relative";

    //take color white from the nav icons, names and jmo logo
    e.forEach(e => e.classList.remove("colorWhite"));
    a.forEach(a => a.classList.remove("colorWhite"));
    b.forEach(b => b.classList.remove("colorWhite"));
    b.forEach(b => b.classList.remove("strokeWhite"));
    c.forEach(c => c.classList.remove("strokeWhite"));
    e.forEach(e => e.classList.remove("strokeWhite"));
    jmoLogo.forEach(l => l.classList.remove("colorWhite"));
    aNav.forEach(aName => aName.classList.remove("tagColorWhite"));
  }
}
