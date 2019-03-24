"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  get();
}

function get() {
  fetch("https://restju-f026.restdb.io/rest/portfolioprojects?year=2018", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c9667bddf5d634f46ecae24",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(e => {
      console.log(e);
      e.forEach(displayP2018);
    });
}

function displayP2018(project) {
  console.log(project);
  const copy = document.querySelector("template").content.cloneNode(true);

  copy.querySelector("img").src =
    "https://restju-f026.restdb.io/media/" +
    project.image +
    "?key=5c9667bddf5d634f46ecae24";

  const target = copy.querySelector("[data-anime]");
  console.log(target);
  window.addEventListener("scroll", () => {
    animateScroll();
  });
  function animateScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    if (windowTop > target.offsetTop) {
      console.log("in");
      target.classList.add("animate");
    } else {
      console.log("out");
      target.classList.remove("animate");
    }
  }

  copy.querySelector("h2").textContent = project.title;
  copy.querySelector(".place").textContent = project.place;
  const role = copy.querySelector(".role");
  window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      //   console.log("less");
      role.style.display = "none";
    } else {
      //   console.log("more");
      role.style.display = "block";
      role.textContent = project.role;
    }
  });

  document.querySelector("#p2018").appendChild(copy);
}

// const projectlink = document.querySelectorAll(".projectlink");
// console.log(projectlink);
// projectlink.addEventListener("mouseover", () => {
//   console.log(e);
//   //   document.querySelector("[data-anime=hide]").classList.add("animate");
// });
