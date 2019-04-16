"use strict";

//arrays
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

// content about variables
const aboutArticle = document.querySelector("#about-article");
const eduArticle = document.querySelector("#education-article");
const expArticle = document.querySelector("#experience-article");
const sofArticle = document.querySelector("#software-article");
const hobArticle = document.querySelector("#hobbies-article");

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

//init funto with butto event listners
function init() {
  aboutBtn.style.backgroundColor = currentBtnColor;
  aboutBtn.addEventListener("click", aboutClicked);
  eduBtn.addEventListener("click", eduClicked);
  expBtn.addEventListener("click", expClicked);
  sofBtn.addEventListener("click", sofClicked);
  hobBtn.addEventListener("click", hobClicked);

  navATag.forEach(a => a.addEventListener("click", navCliked));

  document
    .querySelector("[data-action=arq]")
    .addEventListener("click", filterProjects);
  document
    .querySelector("[data-action=ani]")
    .addEventListener("click", filterProjects);
  document
    .querySelector("[data-action=web]")
    .addEventListener("click", filterProjects);
  document
    .querySelector("[data-action=app]")
    .addEventListener("click", filterProjects);
  document
    .querySelector("[data-action=vid]")
    .addEventListener("click", filterProjects);
  document
    .querySelector("[data-action=all]")
    .addEventListener("click", filterProjects);
  get();
}

// funtion to get restdb projects
function get() {
  fetch(baseLink, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c9667bddf5d634f46ecae24",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(e => {
      projectsarr = e;

      //sort the array of projects by date
      sortedarr = projectsarr.sort(projectssorted);

      // display sorte array
      sortedarr.forEach(displayP2018);
      //call resize funtion
      resize();
    });
}

//funtion to sort the projects
function projectssorted(a, b) {
  if (a.date > b.date) {
    return -1;
  } else {
    return 1;
  }
}

// funtion to dislply each project using template
function displayP2018(project) {
  const copy = document.querySelector("template").content.cloneNode(true);

  //images
  copy.querySelector(".project-box").dataset.category = project.category;
  copy.querySelector("img").src =
    "https://restju-f026.restdb.io/media/" +
    project.image +
    "?key=5c9667bddf5d634f46ecae24";

  // const target = copy.querySelector("[data-anime]");
  // // console.log(target);
  // window.addEventListener("scroll", () => {
  //   animateScroll();
  // });
  // function animateScroll() {
  //   const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  //   if (windowTop > target.offsetTop) {
  //     // console.log("in");
  //     target.classList.add("animate");
  //   } else {
  //     // console.log("out");
  //     target.classList.remove("animate");
  //   }
  // }
  console.log(project._id);

  //project link
  copy.querySelector(".projectlink").href =
    "project.html?projectid=" + project._id;
  //project link
  copy.querySelector(".projectlink2").href =
    "project.html?projectid=" + project._id;
  //project title
  copy.querySelector("h2").textContent = project.title;
  //project place
  copy.querySelector(".place").textContent = project.place;
  //project role
  copy.querySelector(".role p").textContent = project.role;

  // append child in each section
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

window.addEventListener("scroll", () => {
  animateScroll();
});
function animateScroll() {
  const target = document.querySelectorAll("[data-anime]");

  target.forEach(t => {
    console.log(target);
    const windowTop = window.pageYOffset - (window.innerHeight * 3) / 4;
    console.log(window.innerHeight);
    console.log(window.pageYOffset);
    if (windowTop > t.offsetTop) {
      t.classList.add("animate");
    } else {
      t.classList.remove("animate");
    }
  });
}

//Event Resize projects diferent when resize page
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
  }
}
window.addEventListener("resize", resize);

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

//funtions to display content in about section

//about
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
//education
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
//exparience
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
//software
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
//hobbies
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

/////////////////FILTERS

function filterProjects(event) {
  //current filter name
  let currentFilter = event.target.firstChild.data;

  //filter each projeect based on category
  let arqF = sortedarr.filter(project => project.category === currentFilter);

  //empty project sections to only apppear filter projects
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

  //variables of project section an year
  let projectSections = document.querySelectorAll(".project-grid");
  let yearlist = document.querySelectorAll(".year-dot");

  if (currentFilter === "All") {
    //display all projects
    sortedarr.forEach(displayP2018);
    yearlist.forEach(year => year.classList.remove("hide"));
  } else {
    //display filtered projects
    arqF.forEach(displayP2018);

    //if dont have child take year
    projectSections.forEach(projectS => {
      if (projectS.childNodes.length === 0) {
        projectS.previousElementSibling.classList.add("hide");
      } else {
        projectS.previousElementSibling.classList.remove("hide");
      }
    });
  }
}

//funtion to hover nav
function navCliked(event) {
  console.log(this.getAttribute("id"));
  //
  if (this.getAttribute("id") === "contacttag") {
    //spans
    document.querySelector("#contacttag span").classList.add("tagColorBlack");
    document.querySelector("#abouttag span").classList.remove("tagColorBlack");
    document.querySelector("#worktag span").classList.remove("tagColorBlack");
    document.querySelector("#hometag span").classList.remove("tagColorBlack");
    //svgs
    document.querySelector("#hometag svg .a").classList.remove("colorBlack");
    document.querySelector("#worktag svg .b").classList.remove("colorBlack");
    document.querySelector("#worktag svg .e").classList.remove("colorBlack");
    document.querySelector("#worktag svg .c").classList.remove("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.remove("colorBlack");
    document.querySelector("#abouttag svg .a").classList.remove("colorBlack");
    document.querySelector("#contacttag svg .e").classList.add("colorBlack");

    document.querySelector("#contacttag svg .e").classList.add("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.remove("strokeBlack");
    document.querySelector("#worktag svg .e").classList.remove("strokeBlack");
    document.querySelector("#worktag svg .b").classList.remove("strokeBlack");
    //
  } else if (this.getAttribute("id") === "abouttag") {
    //spans
    document
      .querySelector("#contacttag span")
      .classList.remove("tagColorBlack");
    document.querySelector("#abouttag span").classList.add("tagColorBlack");
    document.querySelector("#worktag span").classList.remove("tagColorBlack");
    document.querySelector("#hometag span").classList.remove("tagColorBlack");
    //svgs
    document.querySelector("#hometag svg .a").classList.remove("colorBlack");
    document.querySelector("#worktag svg .b").classList.remove("colorBlack");
    document.querySelector("#worktag svg .e").classList.remove("colorBlack");
    document.querySelector("#worktag svg .c").classList.remove("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.add("colorBlack");
    document.querySelector("#abouttag svg .a").classList.add("colorBlack");
    document.querySelector("#contacttag svg .e").classList.remove("colorBlack");

    document
      .querySelector("#contacttag svg .e")
      .classList.remove("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.add("strokeBlack");
    document.querySelector("#worktag svg .e").classList.remove("strokeBlack");
    document.querySelector("#worktag svg .b").classList.remove("strokeBlack");

    //
  } else if (this.getAttribute("id") === "worktag") {
    //spans
    document
      .querySelector("#contacttag span")
      .classList.remove("tagColorBlack");
    document.querySelector("#abouttag span").classList.remove("tagColorBlack");
    document.querySelector("#worktag span").classList.add("tagColorBlack");
    document.querySelector("#hometag span").classList.remove("tagColorBlack");
    //svgs
    document.querySelector("#hometag svg .a").classList.remove("colorBlack");
    document.querySelector("#worktag svg .b").classList.add("colorBlack");
    document.querySelector("#worktag svg .e").classList.add("colorBlack");
    document.querySelector("#worktag svg .c").classList.add("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.remove("colorBlack");
    document.querySelector("#abouttag svg .a").classList.remove("colorBlack");
    document.querySelector("#contacttag svg .e").classList.remove("colorBlack");

    document
      .querySelector("#contacttag svg .e")
      .classList.remove("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.remove("strokeBlack");
    document.querySelector("#worktag svg .e").classList.add("strokeBlack");
    document.querySelector("#worktag svg .b").classList.add("strokeBlack");

    //
  } else if (this.getAttribute("id") === "hometag") {
    //spans
    document
      .querySelector("#contacttag span")
      .classList.remove("tagColorBlack");
    document.querySelector("#abouttag span").classList.remove("tagColorBlack");
    document.querySelector("#worktag span").classList.remove("tagColorBlack");
    document.querySelector("#hometag span").classList.add("tagColorBlack");
    //svgs
    document.querySelector("#hometag svg .a").classList.add("colorBlack");
    document.querySelector("#worktag svg .b").classList.remove("colorBlack");
    document.querySelector("#worktag svg .e").classList.remove("colorBlack");
    document.querySelector("#worktag svg .c").classList.remove("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.remove("colorBlack");
    document.querySelector("#abouttag svg .a").classList.remove("colorBlack");
    document.querySelector("#contacttag svg .e").classList.remove("colorBlack");

    document
      .querySelector("#contacttag svg .e")
      .classList.remove("strokeBlack");
    document.querySelector("#abouttag svg .e").classList.remove("strokeBlack");
    document.querySelector("#worktag svg .e").classList.remove("strokeBlack");
    document.querySelector("#worktag svg .b").classList.remove("strokeBlack");
  }
}

// const projectlink = document.querySelectorAll(".projectlink");
// console.log(projectlink);
// projectlink.addEventListener("mouseover", () => {
//   console.log(e);
//   //   document.querySelector("[data-anime=hide]").classList.add("animate");
// });
