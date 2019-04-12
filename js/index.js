"use strict";
//arr
let projectsarr;
let sortedarr;
// btn about
const aboutBtn = document.querySelector("[data-action=about]");
const currentBtnColor = "#c7c7c7";
const normalBtnColor = "#fff";
const eduBtn = document.querySelector("[data-action=edu]");
const expBtn = document.querySelector("[data-action=exp]");
const sofBtn = document.querySelector("[data-action=sof]");
const hobBtn = document.querySelector("[data-action=hob]");

// content about
const aboutArticle = document.querySelector("#about-article");
const eduArticle = document.querySelector("#education-article");
const expArticle = document.querySelector("#experience-article");
const sofArticle = document.querySelector("#software-article");
const hobArticle = document.querySelector("#hobbies-article");
// console.log(aboutArticle, eduArticle, expArticle, sofArticle, hobArticle);

// fixed bar variavles
const fixedBack = document.querySelector(".header-back");
const nav = document.querySelector("#menu");
const logo = document.querySelector("#moveheader");
const aNav = document.querySelectorAll(".atag");
const jmoLogo = document.querySelectorAll(".jmologo");

window.addEventListener("scroll", headerFixed);

function resize() {
  const roles = document.querySelectorAll(".role");
  if (window.matchMedia("(max-width: 700px)").matches) {
    // console.log("less");
    roles.forEach(r => (r.style.display = "none"));
  } else {
    console.log("more");
    roles.forEach(r => {
      r.querySelector("p").text;
      r.style.display = "block";
    });
    //role.style.display = "block";
    //roletext.textContent = project.role;
  }
}
window.addEventListener("resize", resize);

function headerFixed() {
  let a = document.querySelectorAll(".a");
  let b = document.querySelectorAll(".b");
  let e = document.querySelectorAll(".e");
  let c = document.querySelectorAll(".c");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    fixedBack.style.top = "0%";
    fixedBack.style.opacity = 0.7;

    jmoLogo.forEach(l => l.classList.add("colorWhite"));
    aNav.forEach(aName => aName.classList.add("tagColorWhite"));
    e.forEach(e => e.classList.add("colorWhite"));
    a.forEach(a => a.classList.add("colorWhite"));
    b.forEach(b => b.classList.add("colorWhite"));

    b.forEach(b => b.classList.add("strokeWhite"));
    c.forEach(c => c.classList.add("strokeWhite"));
    e.forEach(e => e.classList.add("strokeWhite"));

    document.querySelector("[data-animeH=fixedlogo]").classList.add("animateH");
    document.querySelector("[data-animeH=fixednav]").classList.add("animateN");
    nav.style.position = "fixed";
  } else {
    fixedBack.style.top = "-100%";
    document
      .querySelector("[data-animeH=fixedlogo]")
      .classList.remove("animateH");
    document
      .querySelector("[data-animeH=fixednav]")
      .classList.remove("animateN");
    nav.style.position = "relative";

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

window.addEventListener("DOMContentLoaded", init);

function init() {
  //console.log(aboutBtn, eduBtn, expBtn, sofBtn, hobBtn);
  aboutBtn.style.backgroundColor = currentBtnColor;
  aboutBtn.addEventListener("click", aboutClicked);
  eduBtn.addEventListener("click", eduClicked);
  expBtn.addEventListener("click", expClicked);
  sofBtn.addEventListener("click", sofClicked);
  hobBtn.addEventListener("click", hobClicked);

  document
    .querySelector("[data-action=arq]")
    .addEventListener("click", filerArk);
  document
    .querySelector("[data-action=ani]")
    .addEventListener("click", filerArk);
  document
    .querySelector("[data-action=web]")
    .addEventListener("click", filerArk);
  document
    .querySelector("[data-action=app]")
    .addEventListener("click", filerArk);
  document
    .querySelector("[data-action=vid]")
    .addEventListener("click", filerArk);
  document
    .querySelector("[data-action=all]")
    .addEventListener("click", filerArk);
  get();
}

function aboutClicked() {
  eduArticle.classList.add("hide");
  aboutArticle.classList.remove("hide");
  expArticle.classList.add("hide");
  hobArticle.classList.add("hide");
  sofArticle.classList.add("hide");
  aboutBtn.style.backgroundColor = currentBtnColor;
  eduBtn.style.backgroundColor = normalBtnColor;
  expBtn.style.backgroundColor = normalBtnColor;
  sofBtn.style.backgroundColor = normalBtnColor;
  hobBtn.style.backgroundColor = normalBtnColor;
}
function eduClicked() {
  eduArticle.classList.remove("hide");
  aboutArticle.classList.add("hide");
  expArticle.classList.add("hide");
  hobArticle.classList.add("hide");
  sofArticle.classList.add("hide");
  eduBtn.style.backgroundColor = currentBtnColor;
  aboutBtn.style.backgroundColor = normalBtnColor;
  expBtn.style.backgroundColor = normalBtnColor;
  sofBtn.style.backgroundColor = normalBtnColor;
  hobBtn.style.backgroundColor = normalBtnColor;
}
function expClicked() {
  eduArticle.classList.add("hide");
  aboutArticle.classList.add("hide");
  expArticle.classList.remove("hide");
  hobArticle.classList.add("hide");
  sofArticle.classList.add("hide");
  aboutBtn.style.backgroundColor = normalBtnColor;
  eduBtn.style.backgroundColor = normalBtnColor;
  expBtn.style.backgroundColor = currentBtnColor;
  sofBtn.style.backgroundColor = normalBtnColor;
  hobBtn.style.backgroundColor = normalBtnColor;
}
function sofClicked() {
  eduArticle.classList.add("hide");
  aboutArticle.classList.add("hide");
  expArticle.classList.add("hide");
  hobArticle.classList.add("hide");
  sofArticle.classList.remove("hide");
  aboutBtn.style.backgroundColor = normalBtnColor;
  eduBtn.style.backgroundColor = normalBtnColor;
  expBtn.style.backgroundColor = normalBtnColor;
  sofBtn.style.backgroundColor = currentBtnColor;
  hobBtn.style.backgroundColor = normalBtnColor;
}
function hobClicked() {
  eduArticle.classList.add("hide");
  aboutArticle.classList.add("hide");
  expArticle.classList.add("hide");
  hobArticle.classList.remove("hide");
  sofArticle.classList.add("hide");
  aboutBtn.style.backgroundColor = normalBtnColor;
  eduBtn.style.backgroundColor = normalBtnColor;
  expBtn.style.backgroundColor = normalBtnColor;
  sofBtn.style.backgroundColor = normalBtnColor;
  hobBtn.style.backgroundColor = currentBtnColor;
}

function get() {
  fetch("https://restju-f026.restdb.io/rest/portfolioprojects", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c9667bddf5d634f46ecae24",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(e => {
      // console.log(e);
      projectsarr = e;
      sortedarr = projectsarr.sort(projectssorted);
      console.log(sortedarr);
      // const p2018 = sortedarr.filter(project => project.year == "2018");
      sortedarr.forEach(displayP2018);
      resize();
      // p2017.forEach(displayP2017);
    });
}

function projectssorted(a, b) {
  if (a.date > b.date) {
    return -1;
  } else {
    return 1;
  }
}

function displayP2018(project) {
  // console.log(project);
  const copy = document.querySelector("template").content.cloneNode(true);
  copy.querySelector(".project-box").dataset.category = project.category;
  copy.querySelector("img").src =
    "https://restju-f026.restdb.io/media/" +
    project.image +
    "?key=5c9667bddf5d634f46ecae24";

  const target = copy.querySelector("[data-anime]");
  // console.log(target);
  window.addEventListener("scroll", () => {
    animateScroll();
  });
  function animateScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    if (windowTop > target.offsetTop) {
      // console.log("in");
      target.classList.add("animate");
    } else {
      // console.log("out");
      target.classList.remove("animate");
    }
  }

  copy.querySelector(".projectlink").href = project.link;
  copy.querySelector("h2").textContent = project.title;
  copy.querySelector(".place").textContent = project.place;
  const role = copy.querySelector(".role");
  //copy.querySelector(".role p");

  if (project.year == "2018") {
    document.querySelector("#p2018").appendChild(copy);
  }
  if (project.year == "2017") {
    document.querySelector("#p2017").appendChild(copy);
  }
  if (project.year == "2016") {
    document.querySelector("#p2016").appendChild(copy);
  }
  if (project.year == "2015") {
    document.querySelector("#p2015").appendChild(copy);
  }
  if (project.year == "2014") {
    document.querySelector("#p2014").appendChild(copy);
  }
  if (project.year == "2013") {
    document.querySelector("#p2013").appendChild(copy);
  }
  if (project.year == "2012") {
    document.querySelector("#p2012").appendChild(copy);
  }
  if (project.year == "2011") {
    document.querySelector("#p2011").appendChild(copy);
  }
  if (project.year == "2010") {
    document.querySelector("#p2010").appendChild(copy);
  }
  if (project.year == "2009") {
    document.querySelector("#p2009").appendChild(copy);
  }
  if (project.year == "2008") {
    document.querySelector("#p2008").appendChild(copy);
  }
}

/////////////////FILTERS

function filerArk(event) {
  console.log(event.target.firstChild.data);
  let currentFilter = event.target.firstChild.data;
  console.log(currentFilter);
  let arqF = sortedarr.filter(project => project.category === currentFilter);
  document.querySelector("#p2018").innerHTML = "";
  document.querySelector("#p2017").innerHTML = "";
  document.querySelector("#p2016").innerHTML = "";
  document.querySelector("#p2015").innerHTML = "";
  document.querySelector("#p2014").innerHTML = "";
  document.querySelector("#p2012").innerHTML = "";
  document.querySelector("#p2013").innerHTML = "";
  document.querySelector("#p2011").innerHTML = "";
  document.querySelector("#p2010").innerHTML = "";
  document.querySelector("#p2009").innerHTML = "";
  document.querySelector("#p2008").innerHTML = "";
  let projectSections = document.querySelectorAll(".project-grid");
  console.log(projectSections);

  let yearlist = document.querySelectorAll(".year-dot");

  if (currentFilter === "All") {
    sortedarr.forEach(displayP2018);
    yearlist.forEach(year => year.classList.remove("hide"));
  } else {
    //console.log(projectS.childNodes.length);
    arqF.forEach(displayP2018);
    projectSections.forEach(projectS => {
      // const article = document.querySelector(".project-box");
      // console.log(projectS.contains(article));
      if (projectS.childNodes.length === 0) {
        projectS.previousElementSibling.classList.add("hide");
      } else {
        projectS.previousElementSibling.classList.remove("hide");
      }
      /*
      if (projectS.childNodes.length === 0) {
        yearlist.forEach(year => year.classList.add("hide"));
      } else {
        yearlist.forEach(year => year.classList.remove("hide"));
      }*/
    });
  }
}

// const projectlink = document.querySelectorAll(".projectlink");
// console.log(projectlink);
// projectlink.addEventListener("mouseover", () => {
//   console.log(e);
//   //   document.querySelector("[data-anime=hide]").classList.add("animate");
// });
