"use strict";
//arr
let projectsarr;
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

window.addEventListener("DOMContentLoaded", init);

function init() {
  //console.log(aboutBtn, eduBtn, expBtn, sofBtn, hobBtn);
  aboutBtn.style.backgroundColor = currentBtnColor;
  aboutBtn.addEventListener("click", aboutClicked);
  eduBtn.addEventListener("click", eduClicked);
  expBtn.addEventListener("click", expClicked);
  sofBtn.addEventListener("click", sofClicked);
  hobBtn.addEventListener("click", hobClicked);
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
      const sortedarr = projectsarr.sort(projectssorted);
      console.log(sortedarr);
      // const p2018 = sortedarr.filter(project => project.year == "2018");
      sortedarr.forEach(displayP2018);
      // const p2017 = sortedarr.filter(project => project.year == "2017");
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
  const role = copy.querySelector(".role span");
  window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      // console.log("less");
      role.style.display = "none";
    } else {
      console.log("more");
      // role.style.display = "block";
      role.textContent = project.role;
    }
  });

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

// const projectlink = document.querySelectorAll(".projectlink");
// console.log(projectlink);
// projectlink.addEventListener("mouseover", () => {
//   console.log(e);
//   //   document.querySelector("[data-anime=hide]").classList.add("animate");
// });
